import React from "react";
import Link from "next/link";
import Image from "next/image";
import About_Dt from "@/pages/api/controllers/getAbout";
import Review from "./reviews";

const Reviews = async() => {
    const reviews = await About_Dt()
    const content = (

      <section>
        <Review reviews={reviews}/>
      </section>
    )
    console.log(reviews?.length)

    return content;
}

export default Reviews;