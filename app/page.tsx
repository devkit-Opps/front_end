import Reviews from './Reviews/page';
import Pop from './popup/page';


export default function Home() {
  return (
    <main> 
      <Pop />
      <main className="max-w-4x1 mx-auto z-2">
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:selection-min-height tallcreen:selection-min-height">
          <article className="sm:w-1/2 ">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5x1 sm:text-left text-slate-900 dark:text-white">We Boldly stand <span className="text-indigo-700 dark:text-indigo-300">As Kenyans In Solidarity</span> To Protect Our Land for  generations to come .... </h2>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">We are building a kenya for the next century today. The power of the people is stronger than people in power.</p>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">Think timelab by JG </p>
          </article>
          
          <img src="./images/rev-001.png" alt="bux" className="w-1/2  " />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:selection-min-height tallcreen:selection-min-height">
          <h2 className="text-4x1 font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Our Goal</h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-1/2 sm:w-5/6 flex flex-col bg-black items-center border border-solid border-slate-900 dark:border-gray-100 py-6 px-2 rounded-3xl shadow-x1 glass">
              <img src="./images/mzee jomo kenyatta.png" alt="light face" className="w-1/2 mb-5" />
              <h3 className="text-3x1 text-center text-slate-900 dark:text-white">Explore</h3>
              <p className="hidden sm:block text-3x1 mt-2 text-center text-slate-900 dark:text-white">$</p>
              <p className="sm:hidden text-2x1 text-center mt-2 text-slate-500 dark:text-slate-400">Explore</p>
            </li>
            <li className="w-1/2 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 py-6 px-2 rounded-3xl shadow-x1 glass">
              <img src="./images/mashujaa.png" alt="light face" className="w-1/2 mb-5" />
              <h3 className="text-3x1 text-center text-slate-900 dark:text-white">adventurer</h3>
              <p className="hidden sm:block mt-2 text-3x1 text-center text-slate-900 dark:text-white">$$</p>
              <p className="sm:hidden text-2x1 text-center mt-2 text-slate-500 dark:text-slate-400">Best selling website</p>
            </li>
            <li className="w-1/2 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100  py-6 px-2 rounded-3xl shadow-x1 glass">
              <img src="./images/platypus.png" alt="light face" className="w-1/2 mb-5" />
              <h3 className="text-3x1 text-center text-slate-900 dark:text-white">Infinity</h3>
              <p className="hidden sm:block text-3x1 text-center text-slate-900 dark:text-white mt-2">$$$</p>
              <p className="sm:hidden text-2x1 text-center mt-2 text-slate-500 dark:text-slate-400">affordable exploration</p>
            </li>
          </ul>

        </section>
        
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:selection-min-height tallcreen:selection-min-height">
          <h2 className="text-4x1 font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Timelabs 2024</h2>          
          <Reviews />

         

        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:selection-min-height tallcreen:selection-min-height">
          <h2 className="text-4x1 font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Contact Us</h2>
          <form action="" className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4'>
            <label htmlFor="subjects">subject:</label>
            <input type="text" id='subject' name='subject' required minLength={3} maxLength={60} placeholder=' your Subject' className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none' />
          </form>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols={30} rows={10} className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'></textarea>
          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
        </section>
      </main>
    </main>
  )
}


