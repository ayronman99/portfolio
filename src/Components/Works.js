import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorksHolder from "./subComponents/WorksHolder";
import TodoListImg from '../assets/images/JPG/todolist.JPG'
import TSN from '../assets/images/JPG/tsn.png'
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
                        imgSrc={TSN}
                        worksAltTxt={"The Social Network"}
                        workDesc="Simple Social-like networking site madde using React + Typescript. Utilizing libraries like react-query, MUI, and axios."
                        workSite="https://ayronman99.github.io/tsn"
                        workSrc="https://github.com/ayronman99/tsn"
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
        </div>

    )
}