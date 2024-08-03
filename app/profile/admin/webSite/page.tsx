import React from "react";
import Link from "next/link";


const Web_edit = () => {

    return(
        <main>
            <h1>Update Website</h1>
            <br />
            <div>
                <ul>
                    <li><Link href={'/home/editWeb'}>Update Home</Link></li>
                    <li><Link href={'/news/editNews'}>Update News</Link></li>
                    <li><Link href={'/about/EditAbout'}>Update About</Link></li>
                    <li><Link href={'/GetWeb/editGetwebPage'}>Update Getweb</Link></li>
                    <li><Link href={'/jobs/editJobs'}>Update Jobs</Link></li>
                    <li><Link href={'/contact/editContact'}>Update Contact</Link></li>
                    <li><Link href={'/yearbooks/editYearbooks'}>Update YearBook</Link></li>
                </ul>
            </div>
        </main>
    )
}

export default Web_edit;