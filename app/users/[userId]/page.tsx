import React from 'react'
import getUser from '@/lib/controllers/getUser'
import getUserPost from '@/lib/controllers/getUserPost'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
import getAllUsers from '@/lib/controllers/getAllUsers'
import Image from 'next/image'


type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({params:{userId}}:Params): Promise<Metadata> {
  const userData: Promise<Users> = getUser(userId)
  const user:Users = await userData

  return{
    title: user.singleUser.name,
    description:`This is the page of ${user.singleUser.name}`
  }
  
} 

export default async function UserPage({params:{userId}}:Params) {
  console.log(userId)
  const userData: Promise<Users> = getUser(userId)
  const userPostDt: Promise<Profile> = getUserPost(userId);

  // const [user, userPosts] = await Promise.all([(await userData).allUsers, (await userPostDt).allprofiles])

  const user = await (await userData).singleUser
  // const image = await fetch(user.thumbNail)

  // console.log(user)
  // console.log('user')
  const content = (
    <>
    <div>
      <Image src={user.thumbNail} alt='user image' width={100} height={100}/>
      <br />
      <h2>{user.name}</h2>
    </div>
    <br />
    <Suspense fallback={<h2> Loading ... </h2>}>
      @ts-expect-error Server Component
      <UserPosts promise = {userPostDt}/>
    </Suspense>
    </>
  )
  return content;
}


export async function generateStaticParams() {
  const usersData: Promise<User> = await getAllUsers();
  const users = await usersData

  return users.allUsers.map(user => ({
    userId: user._id
  }))
}
export async function getStaticProps (context: { params: { userId: string } }) {
  const usersData: Promise<User> = await getAllUsers();
  const users = await usersData
  const id  = context?.params.userId

  console.log(context)
  console.log(id)
  const usersid = users.allUsers.find((userid) =>  userid._id === id);
  console.log(usersid)
  return{
      props:{data: usersid},
  }
}