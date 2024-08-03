'use client'
'as'
import React, {useState} from "react";
import Profile_I from "../components/feedback/profile";
import Image_Upload from "../components/feedback/image";

const ROLE_LIST = {
    "Admin":5150,
    "Editor":1984,
    "User":2001,
}

const Profile = () => {

    const [role, setRole] = useState('')

    const handleRole = (e: any) => {

        e.preventDefault();
        // const role

        console.log(e.currentTarget.value)

        const result = ROLE_LIST


    }


    return(
        <section>
            <div>
                <br />
                <h2>Profile Image</h2>
                <Image_Upload/>
                <br />
                <Profile_I/>
            </div>
            <form onSubmit={handleRole}>
                
                <select name="Editor" id="Editor" onChange={(e) => setRole(e.target.value)}>
                    <option value="Editor" >user</option>
                    <option value="Editor">Editor</option>
                    <option value="Editor">Admin</option>
                </select>

                <button type="submit">Change</button>
            </form>
            
                
            
        </section>
    )
}

export default Profile;