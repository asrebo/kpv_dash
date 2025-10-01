"use client";

import { useState } from "react";
import NumberFlow from '@number-flow/react'
import { set } from "zod";


export default function NumberCount({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(0);

 setTimeout(()=>{
    setDisplayValue(200);
 }, 1000);

 return <NumberFlow value={displayValue} />

}

