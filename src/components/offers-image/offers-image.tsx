"use client";

import { OfferImageType } from "@/app/shared/types/offers-image-type";
import Image from "next/image";

export const OffersImage: React.FC<OfferImageType> = ({ image, item, index }) => {
    return (
        <li key={index} className="h-52 w-full sm:w-40 sm:p-4 sm:h-40 md:w-36 md:h-48 lg:w-32 lg:h-44 xl:h-52 xl:w-44 bg-gray-200 bg-opacity-30 flex flex-row sm:flex-col p-3  lg:p-4 items-center justify-center gap-4 lg:gap-8 rounded-3xl">
            <span className="bg-white p-4  rounded-full">
                <Image src={image} alt={item} className="w-full h-full" />
            </span>
            <p className="capitalize font-medium text-sm xl:text-md text-center">{item}</p>
        </li>
    )
}