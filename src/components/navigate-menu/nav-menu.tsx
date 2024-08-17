"use client";

import Link from "next/link";
import { BrowserMenu } from "./browser-menu";

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

export const NavMenu = () => {
    return (
        <nav>
            <ul className="flex flex-col md:flex-row items-center gap-4 capitalize">
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
    )
}