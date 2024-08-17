"use client";

import { CustomButton } from "@/components/custom-button/custom-button";
import Image from "next/image";
import PizzaIcon from '../../assets/pizza-icon.png';
import { NavMenu } from "@/components/navigate-menu/nav-menu";
import { SettingsMenu } from "@/components/settings-menu/settings-menu";
import { TopMenu } from "@/components/top-menu/top-menu";

export const TemplateHeader = () => {
    return (
        <header className="row-start-1 row-end-1 flex items-center justify-between md:justify-around w-[calc(100dvw-30px)]">
            <figure className="w-8 h-8 md:w-24 md:h-12">
                <Image src={PizzaIcon} alt="icon" priority className="relative left-8" />
            </figure>
            <div className="hidden md:block">
                <NavMenu />
            </div>

            <div className="flex items-center md:hidden">
                <TopMenu />
                <SettingsMenu />
            </div>
            <div className="hidden md:flex items-center gap-4">
                <CustomButton sx="sm" variant="secondary">Login</CustomButton>
                <CustomButton sx="sm" variant="primary">Sign Up</CustomButton>
            </div>
        </header>
    )
}