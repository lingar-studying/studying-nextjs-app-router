'use client'
import {iconsStore} from "@/app/pages/memory-game/constant-memory-game";
import {useEffect} from "react";

const useCardList = (gridLength)=>{

    const initCardList = ()=>{
        let length = (gridLength * gridLength);
        if(length % 2 != 0){
            length -=1;
        }

        let storeSize = iconsStore.length;


        //we need to take length randoms from 5 numbers

        const cardTypes = Array.from({length: storeSize}, (_, i )=> i+1)
            .sort(()=> Math.random() - 0.5)
            .slice(0, length/2);

        console.log("card type for " + gridLength + " length:\n" + cardTypes)

    }

    useEffect(()=>{

    },[gridLength]);



}

export default useCardList;