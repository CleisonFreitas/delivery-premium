"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { MdOutlinePersonOutline } from "react-icons/md";

export const SettingsMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="border border-gray-300 outline-none text-gray-700 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
                <MdOutlinePersonOutline size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Register</DropdownMenuItem>
                <DropdownMenuItem>Login</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}