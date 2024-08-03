import React from 'react';
import Editors_news from '@/app/components/feedback/Editors';
import { Small_Profile } from '@/app/components/feedback/Editors';

const Blog = () => {
    return (
        <main>
            <div>
                <Small_Profile/>
            </div>
            <br />
            <section>
               <Editors_news/> 
            </section>
            
        </main>
    )
}

export default Blog;