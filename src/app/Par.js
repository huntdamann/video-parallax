"use client";

import Image from "next/image";
import styles from "./page.module.css";
import land from '../../public/land.png'

import moon from './moon.png';
import cat from './cat.gif';
import ghost from './ghost.jpeg'



import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export function Par() {




    return (

      <Parallax className="cat"  speed={5}>
        <Image src={cat} width={100} height={100} alt="cat"  />
      </Parallax>

        

    )
}




