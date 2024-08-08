"use client"
import LocationIcon from './../../assets/location-icon.png';
import PersonIcon from './../../assets/person-icon.png';
import BurguerIcon from './../../assets/hamburguer-icon.png';
import HomeIcon from './../../assets/home-icon.png';
import Image from 'next/image';

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
        <section className="flex flex-col justify-center items-center gap-10">
            <h3 className="text-5xl font-bold capitalize">how to order?</h3>
            <ul className="flex items-center gap-8">
                {OrderList.map((item) => {
                    return (
                        <div className="flex" key={item.key}>
                            <p className="text-3xl font-medium text-orange-600">{item.key}</p>
                            <li key={item.key} className="h-56 w-48 bg-gray-200 bg-opacity-30 flex flex-col justify-center items-center gap-8 rounded-3xl relative right-8 top-8">
                                <span className="bg-white p-8 rounded-full">
                                    <Image src={item.image} alt={item.title} className="w-auto h-auto" />
                                </span>
                                <p className="font-medium text-lg text-center">{item.title}</p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}