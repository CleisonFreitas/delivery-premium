"use client";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const StoreMarketButtons = [
    {
        title: 'Download on the',
        subTitle: 'App Store',
        icone: <FaApple className="text-4xl sm:text-2xl md:text-4xl" />
    },
    {
        title: 'GET IT ON',
        subTitle: 'Google Play',
        icone: <FaGooglePlay className="text-4xl sm:text-2xl md:text-3xl" />
    }
];
export const MarketStoreOptions = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-start items-start gap-2 mt-4 w-full md:mb-0 mb-4">
            {StoreMarketButtons.map((item) => {
                return (
                    <span key={item.title} className="flex gap-2 items-center rounded-xl px-3 py-8 sm:py-1 cursor-text w-full" style={{ backgroundColor: '#F4F4F4' }}>
                        {item.icone}
                        <span className="flex flex-col">
                            <p className="text-sm font-medium">{item.title}</p>
                            <span className=" text-md sm:text-xl md:text-2xl font-medium">{item.subTitle}</span>
                        </span>
                    </span>
                )
            })}
        </div>
    );
}