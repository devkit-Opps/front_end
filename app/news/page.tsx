import React from "react";
import Link from "next/link";
// import styles from '../page.module.css'
// import News_Dt from "@/pages/api/controllers/getNews";
// import Events from "../components/news/news_events";
const News = async () => {
  

  // const routeData: Promise <data[]> = News_Dt()
    
  // const NewsData = await routeData;
    
  
    const content = (
      <section >
        <h2>
          <Link href={'/'}>Back to Home</Link>
          <Link href={'/editNews'}> Edit </Link>
        </h2>
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:selection-min-height tallcreen:selection-min-height">
          <article className="sm:w-1/2 ">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5x1 sm:text-left text-slate-900 dark:text-white">TIME_LAB 2024<span className="text-indigo-700 dark:text-indigo-300"> COMING SOON ... </span>PRODUCT OF LAB-DEVELOPERS</h2>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">HAPPY BIRTHDAY</p>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">JOSPHAT GAITURI</p>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">Think timelab by JG </p>
          </article>
          
          <img src="./images/download.png" alt="bux" className="w-1/2  " />
        </section>
      </section>
    )

    return content;
}

export default News;

