"use client";

import { CustomButton } from "@/components/custom-button/custom-button";
import { BrowserMenu } from "@/components/navigate-menu/browser-menu";
import Image from "next/image";
import PizzaIcon from '../../assets/pizza-icon.png';
import Link from 'next/link';

const NavMenus = [
    {
        url: '/',
        menu: 'restaurants',
        type: 'link'
    },
    {
        url: '/',
        menu: 'recipes',
        type: 'link'
    },
    {
        url: '/',
        menu: 'about',
        type: 'link'
    },
    {
        url: '/',
        menu: 'pages',
        type: 'dropdown'
    },
];
export const TemplateHeader = () => {
    return (
        <header className="row-start-1 row-end-1 flex items-center justify-around">
            <figure className="w-24 h-12">
                <Image src={PizzaIcon} alt="icon" priority />
            </figure>
            <nav>
                <ul className="flex items-center gap-4 capitalize">
                    {NavMenus.map((item) =>
                        item.type === 'link' ? (
                            <Link key={item.menu} href={item.url} >
                                <li className="relative cursor-pointer group">
                                    <span className="hover:transition-shadow">{item.menu}</span>
                                    <div className="absolute left-0 -bottom-2 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full rounded-lg"></div>
                                </li>
                            </Link>
                        ) : (
                            <li key={item.menu} className="relative cursor-pointer group capitalize">
                                <BrowserMenu menu={item.menu} key={item.menu} items={[
                                    {
                                        menu: 'algo',
                                        url: '/'
                                    }
                                ]} />
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <div className="flex items-center gap-4">
                <CustomButton sx="sm" variant="secondary">Login</CustomButton>
                <CustomButton sx="sm" variant="primary">Sign Up</CustomButton>
            </div>
        </header>
    )
}