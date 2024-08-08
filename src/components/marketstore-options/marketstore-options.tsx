"use client"
import { FaApple, FaGooglePlay } from "react-icons/fa";

const StoreMarketButtons = [
    {
        title: 'Download on the',
        subTitle: 'App Store',
        icone: <FaApple size={48} />
    },
    {
        title: 'GET IT ON',
        subTitle: 'Google Play',
        icone: <FaGooglePlay size={36} />
    }
];
export const MarketStoreOptions = () => {
    return (
        <div className="flex justify-start items-start gap-8 mt-4 w-full">
            {StoreMarketButtons.map((item) => {
                return (
                    <span key={item.title} className="flex gap-2 items-center rounded-xl px-3 py-1 cursor-text" style={{ backgroundColor: '#F4F4F4' }}>
                        {item.icone}
                        <span className="flex flex-col">
                            <p className="text-sm font-medium">{item.title}</p>
                            <span className="text-2xl font-medium">{item.subTitle}</span>
                        </span>
                    </span>
                )
            })}
        </div>
    );
}