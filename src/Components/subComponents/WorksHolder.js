import React from "react";
import { motion } from "framer-motion";

const worksVariants = {
    offscreen: {
        y: 150,
        opacity: 0
      },
      onscreen: {
        y: 0,
        opacity: 1,
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
                        className="col m-2 p-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={worksVariants}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true }}
                    >
                        <div className="card">
                          <a href={workSite} target="_blank">
                              <img src={imgSrc} className="card-img-top" alt={worksAltTxt}/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">{workDesc}</p>
                                <div className="row row-cols-1 row-cols-md-1 g-1">
                                 <div className="col-1"></div>
                                    <a href={workSite} target="_blank" className="col-4 btn btn-primary" role="button">View Site</a>
                                    <div className="col-2"></div>
                                    <a href={workSrc} target="_blank" className="col-4 btn btn-secondary" role="button">See Code</a>
                                    <div className="col-1"></div>

                                </div>
                               
                            </div>
                        </div>
                    </motion.div>
    )
}

export default WorksHolder;