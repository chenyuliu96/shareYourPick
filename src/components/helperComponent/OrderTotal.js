import React, { useState } from 'react';
import '../../css/OrderTotal.css';

const OrderTotal = ({ prices }) => {
    const [orderTotal, setOrderTotal] = useState(0);

    // Calculate the order total when the component renders or when the prices prop changes
    React.useEffect(() => {
        const total = prices.reduce((acc, price) => acc + price, 0);
        setOrderTotal(total);
    }, [prices]);

    return (
        <div className="order-total-carousel">
            <h3>Amazon Fresh Subtotal: ${orderTotal}</h3>
            <h3>Total Saving: ${orderTotal}</h3>
            <button>Checkout</button>
        </div>
    );
};

export default OrderTotal;