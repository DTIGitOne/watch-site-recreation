import { useEffect, useState } from "react";
import { mergedArray } from "../Data/data";
import ProductCard from "./ProductCard";

// The whole Cart component that is being passed to the DrownDownMenu animation slate
const Cart = () => {
    const [cartItems, setCartItems] = useState([]); //state for items in cart

    //get all of the current products from the localstorage and set them inside of the cart state
    useEffect(() => {
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const matchedWatches = watchesCart
            .map(cartItem => {
                const watch = mergedArray.find(watch => watch.id === cartItem.id);
                return watch ? { ...watch, amount: cartItem.amount } : null;
            })
            .filter(Boolean);
        setCartItems(matchedWatches);
    }, []);

    // live update for displaying the cart amount
    const updateCartItemAmount = (id, newAmount) => {
        const updatedItems = cartItems.map(item => 
            item.id === id ? { ...item, amount: newAmount } : item
        );
        setCartItems(updatedItems);
        
        const watchesCart = updatedItems.map(({ id, amount }) => ({ id, amount }));
        localStorage.setItem('watches', JSON.stringify(watchesCart));
    };

    // delteing ceratin product from cart and local storage
    const deleteItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        
        const watchesCart = updatedItems.map(({ id, amount }) => ({ id, amount }));
        localStorage.setItem('watches', JSON.stringify(watchesCart));
    };

    // variables for displaying the current items and price being added or deducted
    const totalAmount = cartItems.reduce((sum, item) => sum + item.amount, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);

    return (
        <div id="CartBox" className="h-full w-full flex flex-col gap-16 items-center p-5 pt-0 relative">
            <h2>My Cart</h2>
            {/* the mapping of all of the items from the cart into card product components */}
            {cartItems.length > 0 ? (
                <div id="boxWidth" className="h-auto flex flex-col gap-6">
                {cartItems.map((item) => (
                    <ProductCard 
                        key={item.id} 
                        image={item.Image}
                        name={item.name} 
                        price={item.price} 
                        id={item.id}
                        amount={item.amount}
                        onIncrement={() => updateCartItemAmount(item.id, item.amount + 1)}
                        onDecrement={() => item.amount > 1 && updateCartItemAmount(item.id, item.amount - 1)}
                        onDelete={() => deleteItem(item.id)}
                    />
                ))}
                </div>
            ) : (
                <div id="noItems">No items</div>
            )}
            <div id="amountBox">
                <span>{totalAmount} Items</span>
                <div>${totalPrice}</div>
            </div>
        </div>
    );
}

export default Cart;
