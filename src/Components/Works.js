import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorksHolder from "./subComponents/WorksHolder";
import TodoListImg from '../assets/images/JPG/todolist.JPG'
import WCampImg from '../assets/images/JPG/WelpCamp.JPG'
import ColorPaletteImg from '../assets/images/JPG/colorpalt.JPG'
import '../assets/styles/works.css';

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


export default function Works({worksRefHandler}) {

    const { ref, inView } = useInView({threshold: .5});

    const worksInternalRefHandler = () => {
        worksRefHandler(inView);
    }


    useEffect(()=> {
        worksInternalRefHandler()
    })

   
    return (
        <div ref={ref} id="works" className="works mt-5">
            <motion.h2
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
            >
                My Works:
            </motion.h2>
            
            <div className="container">
                <div className="row d-flex justify-content-around row-cols-1 row-cols-md-2 row-cols-lg-3">


                    <WorksHolder 
                        imgSrc={TodoListImg}
                        worksAltTxt={"To Do List app"}
                        workDesc={"A quick web app you can use to list the things you need to do! Made with Reactjs, you can easily note and list your todos."}
                        workSite={"https://ayronman99.github.io/todo-list/"}
                        workSrc={"https://github.com/ayronman99/todo-list"}
                    />

                    <WorksHolder 
                        imgSrc={WCampImg}
                        worksAltTxt={"WelpCamp"}
                        workDesc={"A fullstack project utilizing Node.js, MongoDB, ExpressJS, Mongoose, Passport and Cloudinary. A place where you can add your camping experience and show it to the world!"}
                        workSite={"https://evening-everglades-74796.herokuapp.com/"}
                        workSrc={"https://github.com/ayronman99/WelpCamp"}
                    />

                    <WorksHolder 
                        imgSrc={ColorPaletteImg}
                        worksAltTxt={"Color Palette App"}
                        workDesc={"Sometimes it's hard to pick a group of colors you want to use. That's why this color palette is made!. Easily pick or create your own palette of colors!"}
                        workSite={"https://ayronman99.github.io/color-palette-react/"}
                        workSrc={"https://github.com/ayronman99/color-palette-react"}
                    />

                </div>
            </div>

            {/* <div className="see-more d-flex justify-content-center flex-row align-items-center">
                <motion.p className="me-3 mt-2"
                    initial={{x: '-100%'}}
                    whileInView={{x: 0, transition: { type: "spring", damping: 5 }}}
                    viewport={{ once: true }}
                > 
                    See More  
               </motion.p>

               <motion.a 
                 href="#"
                 initial={{x: '-100%'}}
                 whileInView={{x: 0, rotate: 360, transition: { type: "spring", damping: 3 }}}
                 viewport={{ once: true, amount: 0.7 }}
               > 
                <span className="chev-right-1">
                       <FontAwesomeIcon icon={faChevronCircleRight} />
                        </span>
               </motion.a>
            </div> */}
        </div>

    )
}