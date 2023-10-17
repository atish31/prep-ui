import { useState } from "react";

export const MyCart = () => {
    const myCartItems = [
        {
            'roadMap': 'roadMap1',
            'inCart': true,
            'id': 1,
        }, 
        {
            'roadMap': 'roadMap2',
            'inCart': true,
            'id': 2,
        },
        {
            'roadMap': 'roadMap3',
            'inCart': true,
            'id': 3,
        },
    ];

    const [myCart, setCart] = useState(myCartItems);
    const removeFromCart = (id) => {
        const changedCart = myCart.filter(item => {
            console.log(item, '!!!item');
            return item.id !== id;
        });
        setCart(changedCart);
    }

    return(
        <>
            <p>this is my cart</p>
            
            {
                myCart.map(item => {
                    return (
                        <li id={item.id} key={item.id}>
                            {item.roadMap}
                            <button onClick={() => removeFromCart(item.id)}>
                                Remove from Cart
                            </button>
                        </li>
                    )
                })
            }
        </>
    )
}