"use client"

import Image from "next/image";
import PizzaIcon from './../../assets/pizza-icon.png';
import { MarketStoreOptions } from "../marketstore-options/marketstore-options";
import Link from "next/link";

type menuOptionsType = {
    menu: string;
    linkOption: 'quickLinksOption' | 'getToKnowOption' | 'newsOption' | 'contactOption';
}

const Links = [
    {
        url: '/',
        menu: 'privacy'
    },
    {
        url: '/',
        menu: 'policy'
    },
    {
        url: '/',
        menu: 'terms'
    },
    {
        url: '/',
        menu: 'services'
    }
];

const LinkOptions = {
    quickLinksOption: [
        {
            title: 'Quick links',
            url: '/'
        },
        {
            title: 'Features',
            url: '/'
        },
        {
            title: 'Food Menu',
            url: '/'
        },
        {
            title: 'Offer',
            url: '/'
        },
        {
            title: 'Review',
            url: '/'
        },
        {
            title: 'Rider',
            url: '/'
        }

    ],
    getToKnowOption: [
        {
            title: 'Get to Know Us',
            url: '/'
        },
        {
            title: 'Gift Cards',
            url: '/'
        },
        {
            title: 'DoorDash Stories',
            url: '/'
        },
        {
            title: 'Linkedin',
            url: '/'
        },
        {
            title: 'Glassdor',
            url: '/'
        },
        {
            title: 'Accessibility',
            url: '/'
        }
    ],
    newsOption: [
        {
            title: 'Blog',
            url: '/'
        },
        {
            title: 'FAQ',
            url: '/'
        },
        {
            title: 'Lift Media',
            url: '/'
        },
        {
            title: 'Press',
            url: '/'
        },
        {
            title: 'Press kit',
            url: '/'
        }
    ],
    contactOption: [
        {
            title: 'Whatsapp',
            url: '/'
        },
        {
            title: 'Support 24',
            url: '/'
        }
    ]
}

const menuOptions: menuOptionsType[] = [
    {
        menu: 'quick links',
        linkOption: 'quickLinksOption'
    },
    {
        menu: 'get to know us',
        linkOption: 'getToKnowOption'
    },
    {
        menu: 'news',
        linkOption: 'newsOption',
    },
    {
        menu: 'contact',
        linkOption: 'contactOption'
    }
]
export const Footer = () => {
    return (
        <>
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-start justify-center gap-16 h-full">
                    <Image src={PizzaIcon} alt="pizza-icon" />
                    <MarketStoreOptions />
                </div>
                <div className="flex items-start gap-4 justify-between w-[50vw]">
                    {menuOptions.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start gap-4">
                                <h3 className="text-white font-bold capitalize">{item.menu}</h3>
                                <ul className="flex flex-col gap-6 items-start text-gray-200 hover:text-gray-100">
                                    {LinkOptions[item.linkOption].map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item.url}>{item.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between items-center text-gray-400 py-4 px-28 w-full">
                <p>&copy; 2023 pizza.All right reserved</p>
                <ul className="flex items-center gap-12 w-[50dvw] justify-center text-lg">
                    {Links.map((item, index) => <li key={index}>
                        <Link href={item.url} className="capitalize hover:text-white">{item.menu}</Link>
                    </li>)}
                </ul>
            </div>
        </>
    );
}