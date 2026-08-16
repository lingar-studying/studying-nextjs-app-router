'use client'
import {iconsStore} from "@/app/client/components/memory-game/constant-memory-game";
import {useEffect, useState} from "react";

const useCardList = (gridLength, decreasePoints) => {

    //my lovely states:
    const [cardList, setCardList] = useState([]);

    const [selectedCard, setSelectedCard] = useState(null);
    const initCardList = () => {
        let length = (gridLength * gridLength);
        if (length % 2 != 0) {
            length -= 1;
        }

        let storeSize = iconsStore.length;


        //we need to take length randoms from 5 numbers

        const cardTypes = Array.from({length: storeSize}, (_, i) => i + 1)
            .sort(() => Math.random() - 0.5)
            .slice(0, length / 2);

        console.log("card type for " + length + " length:\n" + cardTypes);
        const funcCardList = [];

        for (let c of cardTypes) {
            const card1 = {
                iconIndex: c,
                isFlipped: false,
                key: c + "A"

            };

            funcCardList.push(card1);
            const card2 = {...card1};
            card2.key = c + "B";
            funcCardList.push(card2);
        }

        console.log("func card list - ", funcCardList)

        //shuffle
        for (let i = funcCardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [funcCardList[i], funcCardList[j]] = [funcCardList[j], funcCardList[i]];
        }

        console.log("func card list - after shuffle ", funcCardList)

        setCardList(funcCardList);


    }

    useEffect(() => {

        initCardList();
    }, [gridLength]);
    console.log("cards item = ", cardList)

    //functions:
    const selectCard = (card) => {

        // const indexOf = cardList.findIndex(item => item.key === card.key);
        if (!selectedCard) {
            const snd = new Audio("data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTAAAAAAAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A");
            snd.play();
            setSelectedCard(card)
        } else {
            if (selectedCard.iconIndex !== card.iconIndex) {
                decreasePoints();
                const snd2 = new Audio("data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTAAAAAAAP8A/wAAAP8AAP8AAP8AAP8AAP8AAP8AAP8AAP8AAP8AAP8A");
                snd2.play();

                setTimeout(() => {
                    console.log("hey ss.... ")

                    setCardList(prev => prev.map(cardItem => cardItem.key === card.key || cardItem.key === selectedCard.key ? {
                        ...cardItem,
                        isFlipped: false
                    } : cardItem));

                    setSelectedCard(null);
                }, 1000);
            }else{
                setSelectedCard(null);
                const snd3 = new Audio("data:audio/wav;base64,UklGRlAAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTAAAAAAAP8AAP8A/wD/AP8A/wD/AP8A/////wAAAP8A/wD/AP8A");
                snd3.play();

            }

        }
        setCardList(prev => prev.map(cardItem => cardItem.key === card.key ? {...cardItem, isFlipped: true} : cardItem)
        );
    }

    //outcome
    return {cardList, selectCard};


}

export default useCardList;