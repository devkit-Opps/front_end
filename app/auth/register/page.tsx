import React from "react";
import RegistrationForm from "@/app/components/feedback/registration";


const Registration = () => {

    return (
        <section>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" />
                <br />
                <label htmlFor="name">email</label>
                <input type="email" />
                <br />
                <label htmlFor="name">password</label>
                <input type="password" />
                <br />
                <button>submit</button>

            </form>
        </section>
    )
}

export default Registration;