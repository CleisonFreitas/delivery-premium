"use client";

import { OfferImageType } from "@/app/shared/types/offers-image-type";
import Image from "next/image";

export const OffersImage: React.FC<OfferImageType> = ({ image, item, index }) => {
    return (
        <li key={index} className="h-40 w-full sm:w-40 md:w-44 lg:h-56 lg:w-40 bg-gray-200 bg-opacity-30 flex flex-row sm:flex-col justify-center items-center gap-4 lg:gap-8 rounded-3xl">
            <span className="bg-white p-8 rounded-full">
                <Image src={image} alt={item} className="w-12 h-12" />
            </span>
            <p className="capitalize font-medium text-xl">{item}</p>
        </li>
    )
}