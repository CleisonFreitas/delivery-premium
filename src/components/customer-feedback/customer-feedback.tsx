"use client"

import Image from "next/image";
import VectorIcon from './../../assets/vector.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const CustomersFeedback = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-4 items-center text-center w-[550px]">
                <h3 className="font-bold text-5xl capitalize">our clients feedback</h3>
                <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out
                    of the oven to your doorstep.
                </p>
            </div>
            <figure>
                <Image src={VectorIcon} alt="vector icon" />
            </figure>
            <h4 className="text-3xl italic w-[1020px] text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”
            </h4>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col gap-2 justify-center">
                    <h3 className="text-center font-bold">Mitchell Marsh</h3>
                    <p>CEO, Bexon Agency</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <span className="p-2 rounded-full bg-slate-200 bg-opacity-55 cursor-pointer">
                        <IoIosArrowBack />
                    </span>
                    <span className="p-2 rounded-full bg-orange-600 text-white cursor-pointer">
                        <IoIosArrowForward />
                    </span>
                </div>
            </div>
        </section>
    );
}