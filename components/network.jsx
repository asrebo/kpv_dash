"use client";

import { use, useEffect } from "react";
import { CircleCheck } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { animate } from "motion";

export default function Network() {
  useEffect(() => {
    const commonTransition = {
      repeat: Infinity, // Loop indefinitely
      duration: 1.5,   // Speed of the "march"
      ease: "linear",  // Keep the speed constant
    };

    // --- Line VO (Yellow) ---
    const lineVO = document.getElementById("linija_x5F_vo");
    if (lineVO) {
        // Set a 5px dash, 5px gap pattern (total cycle length: 10px)
        lineVO.style.strokeDasharray = '5 5'; 
        // Animate the offset from 0 to -10 to shift the pattern one full cycle backward
        animate(
            lineVO, 
            { strokeDashoffset: [0, -10] }, 
            commonTransition
        );
    }

    // --- Line OG (Red) ---
    const lineOG = document.getElementById("linija_x5F_og");
    if (lineOG) {
        // Set an 8px dash, 8px gap pattern (total cycle length: 16px)
        lineOG.style.strokeDasharray = '8 8'; 
        // Animate the offset from 0 to -16
        animate(
            lineOG, 
            { strokeDashoffset: [0, -16] }, 
            commonTransition
        );
    }
    
    // --- Line EL (Blue) ---
    const lineEL = document.getElementById("linija_x5F_el");
    if (lineEL) {
        // Set a 4px dash, 4px gap pattern (total cycle length: 8px)
        lineEL.style.strokeDasharray = '4 4'; 
        // Animate the offset from 0 to -8
        animate(
            lineEL, 
            { strokeDashoffset: [0, -8] }, 
            commonTransition
        );
    }
  }, []);

  return (
    <Card className=" w-full">
      <CardHeader>
        <CardTitle>Omrežje</CardTitle> 
        <CardDescription>Ni zaznanih motenj v dobavi</CardDescription>
      </CardHeader>
      <CardContent className="max-w-[500px] w-full mx-auto">
        
        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 500 325.1" enableBackground="new 0 0 500 325.1" >
          <g id="Layer_1">
            {/* Circles and icons (unchanged) */}
            <g>
                <circle fill="#2E5CCE" cx="42.3" cy="248.9" r="28"/>
                <path fill="#FFFFFF" d="M42.3,227.6c0.3,0.5,0.6,1.1,0.9,1.6c3.2,5.4,6.4,10.9,9.6,16.3c4.4,7.4-0.1,16.9-8.6,18.3
                    c-6.8,1.1-13.1-3.7-14-10.5c-0.4-2.9,0.3-5.5,1.7-8c2.7-4.6,5.4-9.2,8.1-13.7c0.7-1.2,1.4-2.5,2.2-3.7
                    C42.2,227.8,42.2,227.7,42.3,227.6z M52,253.6c0-0.6-0.2-1-0.7-1.1c-0.5,0-0.8,0.3-0.9,1c-0.2,2.3-1.4,4.8-4.4,5.5
                    c-0.5,0.1-0.8,0.6-0.7,1c0.1,0.5,0.6,0.7,1.1,0.6c0.5-0.2,1-0.3,1.5-0.6C50.5,258.7,51.7,256.4,52,253.6L52,253.6z"/>
            </g>
            <g>
                <circle fill="#DDD30B" cx="42.3" cy="87" r="28"/>
                <path fill="#FFFFFF" d="M32.2,87.2c4.4-6.7,8.9-13.4,13.3-20.1c0.1,0,0.2,0.1,0.4,0.1c-1.1,5-2.3,10-3.4,15.3h10
                    c-4.8,7.3-9.3,14.3-13.8,21.3c-0.1-0.1-0.2-0.1-0.3-0.1c1.1-5.3,2.2-10.5,3.3-16h-9.1C32.4,87.5,32.3,87.3,32.2,87.2L32.2,87.2z"
                    />
            </g>
            <g>
                <circle fill="#FC343B" cx="41.4" cy="167.9" r="28"/>
                <path fill="#FEFEFE" d="M31.8,159.1c1.2,1.5,1.1,3.1,1.3,5c1.8-2.3,3.3-4.7,4.4-7.2c1.2-2.5,1.8-5.1,1.6-8.1
                    c5.1,2.5,7.2,7.1,8.7,12.3c1.3-1.6,1.3-3.2,0.9-4.8c-0.1-0.2-0.3-0.5,-0.1-0.7c0.2-0.2,0.4,0.1,0.6,0.3c3.3,3.7,5.5,7.9,5.8,12.9
                    c0.2,4.6-1.9,8.2-5.3,11.2c-0.9,0.8-2,1.6-3.3,2.3c1.5-3.6,1.8-7,0.9-10.5c-0.8-3.5-2.5-6.6-5.5-9c0,3.3-0.5,6.2-2.5,9
                    c0-1.7,0-3.2-0.9-4.6c-0.2,0.6-0.4,1.2-0.6,1.7c-0.4,1.3-1,2.6-1.8,3.7c-1.8,2.7-2.1,5.6-0.9,8.7c0.1,0.2,0.2,0.5,0.3,1
                    c-3.6-2.3-6.8-4.7-7.5-9.2c-0.4-2.4,0.3-4.7,1.2-6.9c0.7-1.7,1.6-3.3,2.2-5.1C31.4,160.6,31.6,160,31.8,159.1L31.8,159.1z"/>
            </g>
            <image overflow="visible" width="678" height="646" href="city.png" transform="matrix(0.48 0 0 0.48 200.64 2.3366)">
            </image>
            
            <line fill="none" stroke="#dfdfdfff" strokeMiterlimit="10" x1="70.2" y1="85.6" x2="235.7" y2="85.6"/>
            <line fill="none" stroke="#e1e1e1ff" strokeMiterlimit="10" x1="70.2" y1="166.7" x2="200.8" y2="166.7"/>
            <line fill="none" stroke="#dbdbdbff" strokeMiterlimit="10" x1="70.2" y1="250" x2="234.8" y2="250"/>
          </g>

          <g id="Layer_2">
            {/* Animated lines. Note: SVG attributes use camelCase in React (strokeMiterlimit) */}
            <line id="linija_x5F_vo" fill="none" stroke="#DDD30B" strokeWidth="3" x1="70.2" y1="85.3" x2="235.7" y2="85.3"/>
            <line id="linija_x5F_og" fill="none" stroke="#FC343B" strokeWidth="3" strokeMiterlimit="10" x1="70.2" y1="166.4" x2="200.8" y2="166.4"/>
            <line id="linija_x5F_el" fill="none" stroke="#2E5CCE" strokeWidth="3" strokeMiterlimit="10" x1="70.2" y1="249.7" x2="234.8" y2="249.7"/>
          </g>
        </svg>
		

      </CardContent>
	  		<CardFooter className="border-t py-2 text-xl font-bold flex justify-center items-center gap-2 flex-1">  
			<CircleCheck 
        size={28}         // Set the size of the icon
        color="#4bc54bff"  // Set the color to a matching green
        strokeWidth={2}  // Optional: Adjust the line thickness
        /> Optimalno
		</CardFooter>
    </Card>
  )}