import React from "react";
import Link from "next/link";

const Adminstration= () => {
    return (
        <div>
            <br />
            <h2>Adminstration Page</h2>
            <br />
            <ul>
                <li><Link href={'/admin/webSite'}>Edit website</Link></li>
                <li><Link href={'/profile/users'}>Choose Editors</Link></li>
                <li><Link href={'/profile'}>Edit profile</Link></li>
                <li><Link href={'/editor/editorsblog'}>view blogs</Link></li>
            </ul>
        </div>
    );
}

export default Adminstration;