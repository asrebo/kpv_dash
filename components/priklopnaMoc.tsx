"use client"

import {motion } from "framer-motion";

export default function PriklopnaMoc() {
    return <div className="w-full h-full flex flex-row gap-1  items-center text-4xl  rounded-md p-2">
        { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25.26,27,28,29,30].map((item, index) => (
            <motion.div 
            className="px-1 py-3 bg-black rounded-sm "
           initial={{backgroundColor: "#76624bff"}}
            animate={{backgroundColor: ["#76624bff", "#f97316"]}}
            transition={{delay: index * 0.1}}
           
            key={index}
            ></motion.div>))
        }

    </div>
}