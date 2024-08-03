"use client"

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";


const Review = ({reviews}:any) => { 
  
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = reviews[index];

    const checkNumber = (number:any) => {
        if (number > reviews.length - 1 ) {
            return 0;
        }
        if (number < 0 ) {
            return reviews.length - 1; 
        }
        return number;
    }

    const nextReview = () => {
        setIndex(() => {
            const newIndex = index + 1;
            return checkNumber (newIndex);
        })
    }
    const prevReview = () => {
        setIndex(() => {
            const newIndex = index - 1;
            return checkNumber (newIndex);
        })
    }

    const randomReview = () => {
      setIndex( () => {
        let newrrandom =  Math.floor (Math.random() * reviews.length);
        return checkNumber(newrrandom)
        });
      
    }

    
    const content = (                        
        <figure className="p-5 my-12 article glass ">
            <div className="imgcontainer">

              <img src={image} alt="reviewer's image" className="img"/>  
            </div>
            <div className="container">
                <div className="iconbtn1">
                    <button onClick={prevReview} className="text-5xl">
                        <FaChevronLeft />
                    </button>
                </div>
                <div className="quote">
                    <div>
                        <blockquote className="pl-14 pr-8 py-12 rounded-3x1 relative articlecontainer">
                        <p className="text-2x1 sm:text-3x1 text-left mt-2 text-slate-500 dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-slate-600 before:dark:text-white before:opacity-25 before:tranform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-slate-600 after:dark:text-white after:opacity-25 after:tranform after:-translate-x-2 after:-translate-y-2  ">{text}</p>              
                        </blockquote>
                    </div>
                    <figcaption className="italic text-x1 sm:text-2x1 text-right mt-2 mr-14 text-slate-700 dark:text-slate-400">&#8212;{name}, CEO {job}</figcaption>
                </div>
                <div>
                    <button onClick={nextReview} className="text-5xl">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
                
            <button onClick={randomReview} className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Random_Rev</button>
        </figure>
    )

    return content;
}

export default Review;