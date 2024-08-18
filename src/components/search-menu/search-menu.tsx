"use client"
import { SearchMenuType } from "@/app/shared/types/search-menu-type";
import { CustomButton } from "../custom-button/custom-button";

export const SearchMenu = ({placeholder, searchName}: SearchMenuType) => {
    return (
        <div className="flex flex-col gap-1 sm:gap-0  md:flex-row w-full">
            <input type="text" placeholder={placeholder} className="md:text-sm lg:text-lg px-3 md:px-8 py-4 rounded-full text-wrap" style={{backgroundColor: '#F4F4F4'}} />
            <CustomButton sx="md" variant="primary" style="relative right-0 md:right-8 capitalize flex-shrink">{searchName}</CustomButton>
        </div>
    );
}