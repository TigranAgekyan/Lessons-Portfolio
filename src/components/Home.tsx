import React from 'react';
import pfp from '../assets/pfp-image.jpg';
import Cursor from './Cursor';

function Home ( ){

   const pfpRef = React.useRef<HTMLDivElement>(null);
   const [pfpState, setPFPState] = React.useState<boolean>(false);

   const onClick = () => {
      setPFPState(!pfpState);
   }

   return (
      <>
         <Cursor/>
         <div className='
         w-screen h-screen absolute
         z-[999] backdrop-blur-[0.25px]
         pointer-events-none'/>

         <div id='container' className='
         w-screen h-screen bg-alabaster-600
         flex flex-col justify-between items-center'>

            <div className='
            w-screen text-1xl font-inter pt-2 px-2
            font-light text-alabaster-400'>

               <span className='font-normal text-alabaster-300'>Hint</span><br/>
               Click on the Profile Pic

            </div>

            <div className='
            w-screen h-fit flex flex-col
            items-center'>

               <div className='
               transition-all duration-300 mb-4 flex
               place-content-center items-center'>

                  <div className={
                    'z-0 absolute text-2xl transition-all duration-300 '
                    +(pfpState ? 'translate-x-[115px] opacity-100':'opacity-0')}>

                     Phone:<br/><span className='font-light'>052-334-0938</span><br/>
                     Email:<br/><span className='font-light'>tigran.lessons@gmail.com</span>

                  </div>

                  <div id='pfp' ref={pfpRef} onClick={onClick} className={
                  'w-[10vw] aspect-square bg-green-500 rounded-full '
                  +'overflow-clip drop-shadow-[4px_4px_4px_rgba(0,0,0,.5)] '+
                  'transition-all duration-300 hover:scale-[1.15] '
                  +(pfpState ? '-translate-x-32':'')}>

                     <img alt='pfp-image' src={pfp} className='scale-150 translate-y-6'/>

                  </div>

               </div>

               <div id='intro' className='w-screen h-fit flex flex-col justify-center items-center'>
                  <p className='text-5xl font-inter font-normal mb-2'>Tigran Agekyan</p>
                  <p className='text-3xl font-inter font-light'>
                  Cyber Security, Networking & Coding student at Kinneret College</p>
               </div>

            </div>

            <div id='tabs' className='w-full h-full flex flex-row place-content-center items-center'>

               <div id='tab-math' className='
               w-[16%] h-[90%] bg-indigo_dye-500
               rounded-3xl flex flex-col place-content-center items-center
               p-4 drop-shadow-[4px_4px_4px_rgba(0,0,0,.5)]'>

                  <p className='text-5xl font-inter font-bold text-cherry_blossom_pink-500
                  drop-shadow-[2px_2px_1px_rgba(0,0,0,.25)]'>MATH</p>

                  <p className='text-center text-xl text-cherry_blossom_pink-500 font-extralight font-inter'>

                    Studied 
                    <span className='font-normal'> Math </span> 
                    at <span className='font-normal'>Level 5 </span> 
                    in school. Went on to study <span className='font-normal'>Advanced Math </span> 
                    in <span className='font-normal'>Physics</span> class.

                     <br/>
                     <br/>

                     <span className='font-normal'>1 Year Of Experience </span> 
                     in Teaching Personal Math Lessons.

                     <br/>
                     <br/>

                     Teaching levels:<br/>
                     <span className='font-normal'>7 - 10 Grades</span>: any level
                     <br/>
                     <span className='font-normal'>11 - 12 Grades</span>: Up to 4th level

                  </p>
               </div>

               <div id='tab-eng' className='
               w-[16%] h-[90%] bg-indigo_dye-500 rounded-3xl flex flex-col
               place-content-center items-center p-4 mx-32 drop-shadow-[4px_4px_4px_rgba(0,0,0,.5)]'>

                  <p className='
                  text-5xl font-inter font-bold text-cherry_blossom_pink-500
                  drop-shadow-[2px_2px_1px_rgba(0,0,0,.25)]'>ENGLISH</p>
                  
                  <p className='
                  text-center text-xl text-cherry_blossom_pink-500
                  font-extralight font-inter'>

                  Studied <span className='font-normal'> Native English </span> 
                  in school.
                  <span className='font-normal'> Fluent </span> 
                  in Speaking, Writing and Reading.

                  <br/>
                  <br/>

                  <span className='font-normal'>2 Years Of Experience </span> 
                  in Teaching Personal English Lessons.

                  <br/>
                  <br/>

                  Teaching any level of English, from <span className='font-normal'>Beginner </span> 
                  level to <span className='font-normal'>Advanced </span> 
                  to <span className='font-normal'>Fluent</span>.
                  </p>
               </div>

               <div id='tab-coding' className='
               w-[16%] h-[90%] bg-indigo_dye-500 rounded-3xl flex
               flex-col place-content-center items-center p-4
               drop-shadow-[4px_4px_4px_rgba(0,0,0,.5)]'>

                  <p className='
                  text-5xl font-inter font-bold text-cherry_blossom_pink-500
                  drop-shadow-[2px_2px_1px_rgba(0,0,0,.25)]'>CODING</p>

                  <p className='text-center text-xl text-cherry_blossom_pink-500 font-extralight font-inter'>

                  Studied <span className='font-normal'>Java Development </span> 
                  in school, while also taking <span className='font-normal'>Android Development </span> 
                  classes.

                  <br/>
                  <br/>

                  Have <span className='font-normal'>Intermediate - Advanced</span> Knowledge of:
                  
                  <br/>
                  <br/>
                  
                  <span className='font-normal'>~ ReactJS ~</span><br/>
                  <span className='font-normal'>~ HTML+CSS+JS ~</span><br/>
                  <span className='font-normal'>~ Java ~</span><br/>
                  <span className='font-normal'>~ Python ~</span><br/>
                  <span className='font-normal'>~ C# ~</span><br/>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home
