"use client"
import { SearchMenuType } from "@/app/shared/types/search-menu-type";
import { CustomButton } from "../custom-button/custom-button";

export const SearchMenu = ({placeholder, searchName}: SearchMenuType) => {
    return (
        <div className="flex flex-col gap-1 sm:gap-0  md:flex-row w-full">
            <input type="text" placeholder={placeholder} className="px-3 py-4 sm:py-2 rounded-full text-wrap" style={{backgroundColor: '#F4F4F4'}} />
            <CustomButton sx="md" variant="primary" style="relative right-0 sm:right-8 md:right-16 capitalize flex-shrink">{searchName}</CustomButton>
        </div>
    );
}