"use client"

import Image from "next/image";
import PizzaIcon from './../../assets/pizza-icon.png';
import BurguerIcon from './../../assets/hamburguer-icon.png';
import SushiIcon from './../../assets/sushi-icon.png';
import DeliveryIcon from './../../assets/moto-icon.png';
import SaladIcon from './../../assets/salad-icon.png';
import PastaIcon from './../../assets/pasta.png';
import DessertIcon from './../../assets/dessert-icon.png';
import VectorIcon from './../../assets/vector.png';
import { OffersImage } from "../offers-image/offers-image";

const MainOffers = [
    {
        image: PizzaIcon,
        name: 'pizza',
    },
    {
        image: BurguerIcon,
        name: 'burguer',
    },
    {
        image: SushiIcon,
        name: 'sushi',
    }
];

const specialOffers = [
    {
        image: PastaIcon,
        name: 'pasta'
    },
    {
        image: SaladIcon,
        name: 'salad'
    },
    {
        image: DessertIcon,
        name: 'dessert'
    }
];
export const DeliveryDetails = () => {
    return (
        <section className="flex flex-col gap-8 items-center w-[100dvw]">
            <div className="flex flex-col items-center justify-center capitalize gap-3 text-center">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">more than <span className="text-orange-600">10,000</span> dishes to order!</h3>
                <p>welcome to the biggest network of food ordering & delivery</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center w-full px-4">
                    <ul className="flex gap-2 lg:gap-8 w-full flex-wrap">
                        {MainOffers.map((item, index) => (
                            <OffersImage
                                key={index}
                                image={item.image}
                                item={item.name}
                                index={index} />
                            ))}
                    </ul>
                    <div className="bg-gray-200 bg-opacity-30 flex flex-row lg:flex-col rounded-3xl p-5 sm:p-3 xl:p-10 h-44 lg:h-56 w-full">
                        <p className="text-lg lg:text-2xl font-medium">Find <span className="text-orange-600">deals</span>, <span className="text-green-600">free delivery</span>, and more from our restaurant partners.</p>
                        <figure className="flex justify-end items-center">
                            <Image src={DeliveryIcon} alt="delivery icon" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center w-full px-4">
                <span className="flex flex-col gap-4 w-[350px] lg:w-[400px] xl:w-[550px]">
                    <Image src={VectorIcon} alt="vector-icon" />
                    <p className="font-light text-lg">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </p>
                </span>
                <ul className="flex gap-2 lg:gap-8 w-full flex-wrap">
                    {specialOffers.map((item, index) => (<OffersImage image={item.image} item={item.name} index={index} key={index}/>))}
                </ul>
            </div>
        </section>
    );
}