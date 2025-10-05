import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";


function FAQ() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full mx-auto px-4 max-w-3xl lg:w-1/3 m-auto ">
        
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-12 text-white mt-12"> Answers To Your  {" "}
          <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
            Questions!
        </span>
        </h2>
        
         <Accordion
          type="single"
          collapsible
          className="text-white border rounded-4xl px-4 sm:px-6 py-6"
        >
          <AccordionItem value="item-1" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>What is Web3Task?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Web3Task is a platform that enables users to earn by contributing
              to tasks in a decentralized ecosystem.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>How do I get started?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Simply connect your wallet, explore available tasks, and start
              contributing based on your skills.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>Which wallets are supported?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              You can use popular wallets like MetaMask, Trust Wallet, and other
              Web3-enabled wallets.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>What are the benefits of joining Web3Task as a student?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Rewards are paid instantly in crypto tokens directly to your
              connected wallet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>Who can complete a task?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Web3Task encourages collaboration between users to complete larger
              projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>Who can create a task?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Anyone can create a task. Signing up and browsing tasks is free —
              you just need a wallet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>Is there a ranking of users?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Yes, Web3Task has a ranking system to highlight top contributors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>How do disputes work?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Disputes are handled through community governance and moderators
              to ensure fairness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>
                What are the benefits of participating in Web3Task as a
                recruiter?
              </span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Recruiters gain access to a pool of skilled contributors while
              saving costs and time on hiring.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="flex justify-between items-center py-3 font-semibold">
              <span>What types of tasks are available on the platform?</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm sm:text-base font-inter font-thin">
              Tasks range from software development and design to research,
              writing, and marketing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
         
      
      </div>
      
     
    
    </motion.section>
  )
}

export default FAQ