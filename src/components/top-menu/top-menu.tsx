"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { NavMenu } from "../navigate-menu/nav-menu";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const TopMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <HiMenuAlt3 size={28}/>
                </Button>
            </SheetTrigger>
            <SheetContent side={'top'} className="flex flex-col gap-4">
                <SheetHeader>
                    <SheetTitle className="text-red-700 capitalize text-center">delivery premium</SheetTitle>
                    <Separator className="border border-gray-300" />
                    <SheetDescription className="text-center">
                        Checkout our options.
                    </SheetDescription>
                </SheetHeader>
                <NavMenu />
            </SheetContent>
        </Sheet>
    )
}