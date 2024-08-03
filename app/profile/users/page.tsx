import React from "react";
import Image from 'next/image'

const User = () => {
    return (
        <main>
            <br />
            <div>
                <h1>Users</h1>
            </div>
            <br />

            <div>
                <Image src={''} alt="user image"></Image>
                <h4>name</h4>
                <label htmlFor="role">change role</label>
                <select name="" id="">
                    <option value="">admin</option>
                    <option value="">editor</option>
                    <option value="">user</option>
                </select>                
            </div>

            <br />
            <div>
                <h1>user Profiles</h1>
            </div>
        </main>
    )
}

export default User;