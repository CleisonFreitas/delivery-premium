"use client"
import { SearchMenuType } from "@/app/shared/types/search-menu-type";
import { CustomButton } from "../custom-button/custom-button";

export const SearchMenu = ({placeholder, searchName}: SearchMenuType) => {
    return (
        <div className="flex w-full">
            <input type="text" placeholder={placeholder} className="w-full px-3 py-2 rounded-full" style={{backgroundColor: '#F4F4F4'}} />
            <CustomButton sx="md" variant="primary" style="relative right-16 capitalize">{searchName}</CustomButton>
        </div>
    );
}