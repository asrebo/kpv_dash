"use client"
import { motion } from "motion/react"




export default function MotionComp() {

return <motion.div
            className="absolute bottom-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"SDSADFSDFSDFSDFSDFFSDFDS"}
          </motion.div>
}