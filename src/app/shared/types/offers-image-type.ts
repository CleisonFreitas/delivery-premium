import { StaticImageData } from "next/image";

export type OfferImageType = {
    index?: string | number;
    image: StaticImageData;
    item: string;
}