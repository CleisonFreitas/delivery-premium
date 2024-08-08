"use client"
import Image from 'next/image';
import PizzaIcon from '../../assets/pizza-icon.png';
import PizzaDeliver from '../../assets/entregador.png';
import Link from 'next/link';
import { BrowserMenu } from '@/components/navigate-menu/browser-menu';
import { CustomButton } from '@/components/custom-button/custom-button';
import { SearchMenu } from '@/components/search-menu/search-menu';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { DeliveryDetails } from '@/components/delivery-details/delivery-details';
import { OrderDetails } from '@/components/order-details/order-details';
import { CustomersFeedback } from '@/components/customer-feedback/customer-feedback';
import { NewsLetter } from '@/components/news-letter/news-letter';
import { MarketStoreOptions } from '@/components/marketstore-options/marketstore-options';
import { Footer } from '@/components/footer/footer';

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

export const LayoutFile = () => {
    return (
        <section className="grid grid-rows-[120px_2800px_500px]">
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
            <footer className="row-start-3 row-end-3 bg-black flex flex-col justify-between pt-14">
                <Footer />
            </footer>
        </section>
    );
}