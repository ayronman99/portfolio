import React from "react";
import { motion } from "framer-motion";

const worksVariants = {
    offscreen: {
        y: 150
      },
      onscreen: {
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }
}

const WorksHolder = ({imgSrc, worksAltTxt, workDesc, workSrc, workSite}) => {
    return (
        <motion.div 
                        className="col mb-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={worksVariants}
                        transition={{delay: .2}}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="card m-auto">
                          <a href={workSite} target="_blank">
                              <img src={imgSrc} className="card-img-top" alt={worksAltTxt}/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">{workDesc}</p>
                                <div className="row row-cols-md-1 g-2">
                                 <div className="col-1"></div>
                                    <a href={workSite} target="_blank" className="col-4 btn btn-primary" role="button">View Site</a>
                                    <div className="col-2"></div>
                                    <a href={workSrc} target="_blank" className="col-4 btn btn-secondary" role="button">View Code</a>
                                    <div className="col-1"></div>

                                </div>
                               
                            </div>
                        </div>
                    </motion.div>
    )
}

export default WorksHolder;