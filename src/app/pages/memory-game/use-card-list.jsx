'use client'
import {iconsStore} from "@/app/pages/memory-game/constant-memory-game";
import {useEffect, useState} from "react";

const useCardList = (gridLength)=>{

    //my lovely states:
    const [cardList, setCardList] = useState([]);

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

        console.log("card type for " + length + " length:\n" + cardTypes);
        const funcCardList = [];

        for (let c of cardTypes){
            const card1 = {
                iconIndex: c,
                isFlipped: false,
                key: c+ "A"

            };

            funcCardList.push(card1);
            const card2 = {...card1};
            card2.key = c + "B";
            funcCardList.push(card2);
        }

        console.log("func card list - " , funcCardList)

        //shuffle
        for (let i = funcCardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [funcCardList[i], funcCardList[j]] = [funcCardList[j], funcCardList[i]];
        }

        console.log("func card list - after shuffle " , funcCardList)

        setCardList(funcCardList);



    }

    useEffect(()=>{

        initCardList();
    },[gridLength]);


    //outcome
    return {cardList};


}

export default useCardList;