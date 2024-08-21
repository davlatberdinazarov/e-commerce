import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ComplexNavbar } from '../components/Navbar'
import { DrawerCart } from '../components/drawer-card';

export const MainLayoutContext = createContext();

export default function MainLayout() {
    const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('cardData')) || []);

    // ADD TO LOCAL STORAGE CARD DATA
    useEffect(() => {
        localStorage.setItem('cardData', JSON.stringify(cardData));
    }, [cardData]);

    const addCard = (card) => {
        // isCardEXITS
        const isCardExists = cardData.some((c) => c.id === card.id);
        // if isCardExists TRUE THEN ADD 1 TO quantity ELSE ADD NEW
        if (isCardExists) {
            const updatedCardData = cardData.map((c) =>
                c.id === card.id? {...c, quantity: c.quantity + 1 } : c
            );
            setCardData(updatedCardData);
            localStorage.setItem('cardData', JSON.stringify(updatedCardData));
        } else {
            const newCard = {...card, quantity: 1 };
            setCardData([...cardData, newCard]);
            localStorage.setItem('cardData', JSON.stringify(cardData));
        }
    };

    // countTotalPrice
    const totalPrice = cardData.reduce((acc, card) => acc + card.price * card.quantity, 10);

    const handleDecrementQuantity = (id) => {
        const updatedCardData = cardData.map((c) =>
            c.id === id && c.quantity > 1 ? {...c, quantity: c.quantity - 1 } : c
        );
        setCardData(updatedCardData);
        localStorage.setItem('cardData', JSON.stringify(updatedCardData));
    }
    
    const removeCard = (id) => {
        setCardData(cardData.filter((card) => card.id !== id));
        localStorage.setItem('cardData', JSON.stringify(cardData));
    };

    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    console.log('cardData:', cardData);

    return (
        <MainLayoutContext.Provider
            value={{
                openRight,
                closeDrawerRight,
                openDrawerRight,
                addCard,
                removeCard,
                cardData,
                handleDecrementQuantity,
                totalPrice,
            }}>
            <DrawerCart />
            <div>
                <ComplexNavbar />
            </div>
            <Outlet />
        </MainLayoutContext.Provider>
    )
}
