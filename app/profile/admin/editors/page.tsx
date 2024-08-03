import React from "react";
import Link from "next/link";


const Appoint = () => {

    return(
        <section>
            <br />
            <div>
                <h1>Choose Editor</h1>
            </div>
            <br />
            <div>
                <label htmlFor="name">search</label>
                <input type="text" />
                <br />
            </div>
            <br />
            <div>
                <Link href={'/profile'}>
                    users Profiles
                </Link>
            </div>
        </section>
    )
}

export default Appoint;