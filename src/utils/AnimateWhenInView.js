import React from 'react'
import { motion } from 'framer-motion'

function AnimateWhenInView({ children }) {
  return (
    <motion.div
        initial={{ opacity: .4 }}
        whileInView={{ opacity: 1, transition: { duration: .4 }, AnimationDelay: .4 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
    
  )
}

export default AnimateWhenInView