"use client"

import { SearchMenu } from "../search-menu/search-menu";

export const NewsLetter = () => {
    return (
        <section className="bg-red-100 flex items-center justify-center md:h-[500px]">
            <div className="flex justify-between items-center w-full md:w-[calc(100vw-220px)]">
                <div className="flex flex-col gap-8">
                    <h3 className="text-4xl font-bold">Subscribe our newsletter</h3>
                    <p>Browse local restaurants and businesses for delivery by entering your address blow.</p>
                </div>
                <div className="md:w-[720px]">
                    <SearchMenu placeholder="Enter your email address..." searchName="send" />
                </div>
            </div>
        </section>
    );
}