"use client"
import LocationIcon from './../../assets/location-icon.png';
import PersonIcon from './../../assets/person-icon.png';
import BurguerIcon from './../../assets/hamburguer-icon.png';
import HomeIcon from './../../assets/home-icon.png';
import Image from 'next/image';
import { OffersImage } from '../offers-image/offers-image';

const OrderList = [
    {
        key: '01',
        image: LocationIcon,
        title: 'Choose your location',
    },
    {
        key: '02',
        image: PersonIcon,
        title: 'Choose what to eat',
    },
    {
        key: '03',
        image: BurguerIcon,
        title: 'May your first order',
    },
    {
        key: '04',
        image: HomeIcon,
        title: 'Now! Your food in way',
    }
];
export const OrderDetails = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10 sm:px-8 md:px-0 w-full">
            <h3 className="text-2xl xl:text-5xl font-bold capitalize">how to order?</h3>
            <ul className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-[700px] xl:w-[80dvw] justify-center">
                {OrderList.map((item) => {
                    return (
                        <div className="sm:flex justify-center items-start px-4 md:px-0 w-full sm:w-[32%] md:w-[35%] lg:w-[22%] p-8" key={item.key}>
                            <p className="text-3xl font-medium text-orange-600 relative sm:-top-5 sm:-right-3 ">{item.key}</p>
                            <OffersImage key={item.key} image={item.image} item={item.title} index={item.key}/>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}