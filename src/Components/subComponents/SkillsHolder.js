import React from "react";
import { motion } from "framer-motion";


 const SkillsHolder = ({initial, whileInView, viewport, srcImg, altTxt, imgClxNm}) => {
    return (
        <motion.div className="col"
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
        
        >
            <img className={imgClxNm} src={srcImg} alt={altTxt}/>    
        </motion.div>
    )
}


export default SkillsHolder;