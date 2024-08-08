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
        <section className="flex flex-col gap-8 items-center w-full ">
            <div className="flex flex-col items-center justify-center capitalize md:w-[650px] gap-3 text-center">
                <h3 className="text-5xl font-bold">more than <span className="text-orange-600">10,000</span> dishes to order!</h3>
                <p>welcome to the biggest network of food ordering & delivery</p>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex gap-2 items-center">
                    <ul className="flex gap-8">
                        {MainOffers.map((item, index) => {
                            return (
                                <li key={index} className="h-56 w-40 bg-gray-200 bg-opacity-30 flex flex-col justify-center items-center gap-8 rounded-3xl">
                                    <span className="bg-white p-8 rounded-full">
                                        <Image src={item.image} alt={item.name} className="w-12 h-12" />
                                    </span>
                                    <p className="capitalize font-medium text-xl">{item.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="bg-gray-200 bg-opacity-30 flex flex-col rounded-3xl p-10 h-56 w-[550px]">
                        <p className="text-2xl font-medium">Find <span className="text-orange-600">deals</span>, <span className="text-green-600">free delivery</span>, and more from our restaurant partners.</p>
                        <figure className="flex justify-end items-center">
                            <Image src={DeliveryIcon} alt="delivery icon" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <span className="flex flex-col gap-4 w-[550px]">
                    <Image src={VectorIcon} alt="vector-icon" />
                    <p className="font-light text-2xl">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </p>
                </span>
                <ul className="flex items-center gap-2">
                    {specialOffers.map((item, index) => {
                        return (
                            <li key={index} className="h-56 w-40 bg-gray-200 bg-opacity-30 flex flex-col justify-center items-center gap-8 rounded-3xl">
                                <span className="bg-white p-8 rounded-full">
                                    <Image src={item.image} alt={item.name} className="w-12 h-12" />
                                </span>
                                <p className="capitalize font-medium text-xl">{item.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}