import React from 'react'
import { motion } from 'framer-motion';

function ConstructionFooter() {
  return (
    <div id='c-footer' className='xl:h-80 md:h-40 max-sm:h-30 w-full bg-white'>
      <div className='size-full relative'>
        <motion.div 
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }} // amount: 0.5 means it triggers when 50% visible
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10, 
            bounce: 0.8, 
            duration: 0.8 
          }}
          className='w-full readex absolute text-center text-[#000000]/10 xl:text-[300px] md:text-[980%] max-sm:text-[500%] xl:-bottom-42 md:-bottom-22 max-sm:-bottom-11'
        >
          SquareM
        </motion.div>
      </div>
    </div>
  )
}

export default ConstructionFooter
