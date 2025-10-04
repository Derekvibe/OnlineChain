import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function FAQ() {
  return (
    <div >
      <div>
        
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-12 text-white mt-12"> Answers To Your  {" "}
          <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
            Questions!
        </span>
        </h2>
        
        <div className='flex  m-auto w-1/3 border px-6 py-6'>
          <Accordion className='text-white'>
            <AccordionItem className="border" header="What is Web3Task?">
              Web3Task is an innovative platform that solves the challenge of monetizing contributions by fragmenting tasks in a way inspired by the GitHub problem model.  Our focus is to reduce the barriers to entry that students face in the job market by providing opportunities to gain real work experience.
            </AccordionItem>
            
            <AccordionItem header="Where does it come from?">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringillavel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.
            </AccordionItem>
            
            <AccordionItem header="Why do we use it?"> Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat. </AccordionItem>
          </Accordion>
        </div>

         
      
      </div>
      
     
    
    </div>
  )
}

export default FAQ