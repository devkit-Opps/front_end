// import { profile } from 'console'
import React from 'react'
import Image from 'next/image'

type Props = {
    promise: Promise<Profile>
}

export default async function UserPosts({promise}:Props) {
    const posts = (await promise).allprofiles

    console.log(posts)
    console.log('posts')

    const content = (
        <article>
            {posts.map( post => {
                return (
                    <div key={post._id}>
                        <div>
                            <Image
                            src={post.Image}
                            alt='profile image'
                            width={200}
                            height={200}
                            />
                        </div>
                        <h2>{post.grade}</h2>
                        <p>{post.position}</p>
                        <br />
                        <p>{post.info}</p>
                        <div>
                            <br />
                            {post.subject.map(sub => {
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <ul>
                                        <li>{sub}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <br />
        </article>
    )
  return content;
}
