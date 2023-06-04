import React from 'react';
import {pictures, pictures2} from "../constant";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderHistoryCard from "./helperComponent/OrderHistoryCard";

const Index = () => {
    return (
        <div className="Index">
            <div className="grey-background">
                <div className="floating-container">
                    <h1>Order History</h1>
                    <OrderHistoryCard pictures={pictures} id = {1}></OrderHistoryCard>
                    <OrderHistoryCard pictures={pictures2} id = {2}></OrderHistoryCard>
                </div>
            </div>
        </div>
    );
};

export default Index;