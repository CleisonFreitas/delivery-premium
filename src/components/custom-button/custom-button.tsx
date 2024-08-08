"use client"
import { ButtonStyled } from "./styles";

type ButtonVariant = {
    variant: 'primary' | 'secondary' | 'success' | 'danger';
    children: React.ReactNode;
    sx: 'sm' | 'md' | 'lg';
    style?: string | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CustomButton = ({ variant = 'primary', sx = 'md', children , style = ''}: ButtonVariant) => {
    const variantStyles = {
        primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-600 rounded-full py-3 px-4 font-bold ',
        secondary: 'text-black hover:bg-gray-100 focus:ring-gray-500 rounded-full py-3 px-4 font-bold ',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 rounded-full py-3 px-4 font-bold ',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 rounded-full py-3 px-4 font-bold ',
    };

    const sizeStyles = {
        sm: 'text-sm h-12 w-18 ',
        md: 'text-md h-16 w-48 ',
        lg: 'text-lg h-36 w-48 ',
    };
    const buttonStyle = variantStyles[variant]+sizeStyles[sx]+style;
    return (
        <ButtonStyled $baseClass={buttonStyle} >{children}</ButtonStyled>
    );
}