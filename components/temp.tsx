"use client"

import { motion, Variants } from "motion/react"


export default function Temp() {
    return (
        <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
         
        >
            <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                strokeWidth="8"
                fill="transparent"
         
              
                custom={1}
             />

        </motion.svg>
    )
}