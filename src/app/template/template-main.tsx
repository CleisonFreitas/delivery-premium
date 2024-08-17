"use client";

import { CustomersFeedback } from "@/components/customer-feedback/customer-feedback";
import { DeliveryDetails } from "@/components/delivery-details/delivery-details";
import { MarketStoreOptions } from "@/components/marketstore-options/marketstore-options";
import { NewsLetter } from "@/components/news-letter/news-letter";
import { OrderDetails } from "@/components/order-details/order-details";
import { SearchMenu } from "@/components/search-menu/search-menu";
import PizzaDeliver from '../../assets/entregador.png';

import Image from "next/image";

export const TemplateMain = () => {
    return (
        <main className="row-start-2 row-end-2 flex flex-col gap-28">
            <div className="flex flex-col md:flex-row justify-around items-center p-4 ">
                <div className="flex flex-col gap-4 items-center w-[30%]">
                    <h3 className="text-5xl font-extrabold capitalize">your favorite food delivery partner</h3>
                    <p className="font-light text-md mb-4">The food at your doorstep. Why starve when you have us.
                        You hunger partner. Straight out of the oven to your doorstep.
                    </p>
                    <SearchMenu placeholder="Enter your delivery location" searchName="order now" />
                    <MarketStoreOptions />
                </div>
                <figure className="flex justify-center items-center rounded-3xl p-4" style={{ backgroundColor: '#F2EBDA' }}>
                    <Image src={PizzaDeliver} alt="deliver icon" />
                </figure>
            </div>
            <DeliveryDetails />
            <OrderDetails />
            <CustomersFeedback />
            <NewsLetter />
        </main>
    );
}