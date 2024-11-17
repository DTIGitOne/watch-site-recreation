import { useState, useEffect } from "react";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";
import TrashIcon from "../svg/TrashIcon";

//card component for displying products in cart
const ProductCard = ({ image, name, price, id, amount: initialAmount, onIncrement, onDecrement, onDelete }) => {
    const [amount, setAmount] = useState(initialAmount); // current cart items state
    const [removed, setRemoved] = useState(false); // is item removed

    // updating the cart items live changes
    const updateCartAmount = (newAmount) => {
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const updatedCart = watchesCart.map(watch =>
            watch.id === id ? { ...watch, amount: newAmount } : watch
        );
        localStorage.setItem('watches', JSON.stringify(updatedCart));
    };

    // add amount of current item
    const incrementAmount = () => {
        if (amount <= 2) {
            onIncrement();
            const newAmount = amount + 1;
            setAmount(newAmount);
            updateCartAmount(newAmount);
        } 
    };

    // decrease amount of current item
    const decrementAmount = () => {
        if (amount > 1) {
            onDecrement();
            const newAmount = amount - 1;
            setAmount(newAmount);
            updateCartAmount(newAmount);
        }
    };

    // delete the current item from cart
    const removeItem = () => {
        onDelete()
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const updatedCart = watchesCart.filter(watch => watch.id !== id);
        localStorage.setItem('watches', JSON.stringify(updatedCart));
        setRemoved(true);
    };

    useEffect(() => {
        setAmount(initialAmount);
    }, [initialAmount]);

    return removed ? null : (
        <div className="flex">
            <div className="flex w-4/5">
                <div id="imageCartBox">
                    <img src={image} alt={name} />
                </div>
                <div id="productDetails" className="flex pElement">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <p>{name}</p>
                            <span>${price}</span>
                        </div>
                        <div id="counterBox" className="flex gap-3">
                            <button onClick={decrementAmount}>
                                <MinusIcon />
                            </button>
                            <div>{amount}</div>
                            <button onClick={incrementAmount}>
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end pElement2">
                <button onClick={removeItem}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
