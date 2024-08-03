import getAllUsers from "@/lib/controllers/getAllUsers"
import type { Metadata } from "next"
import React from 'react'
import Link from "next/link"


export const metadata:Metadata = {
    title:'Users',
}


export default async function UsersPages() {

  const usersData: Promise<User> = getAllUsers()
  const users = await (await usersData).allUsers
  console.log(users)

  const content = (
    <section>
      <h2>
        <Link href={'/'}>Back to Home</Link>
      </h2>
      <br />

      {users.map((user) => {
        return (
          <>
            <p key={user._id}>
              <Link href={`users/${user._id}`}>{user.name}</Link>
            </p>
            <br />

          </>
        )
      })}
    </section>
  )

  return content
}