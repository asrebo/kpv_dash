"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export function LottieAnimation({ path, style }) {
  return <DotLottieReact
        src="./kolendar.lottie"
        loop
        autoplay
        style={{ width:"500px"}}
     />
}

