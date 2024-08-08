import styled from "styled-components";

type ButtonStyledProps = {
    $baseClass: string;
    children: React.ReactNode;
}

export const ButtonStyled = styled.button.attrs<ButtonStyledProps>(props => ({
    className: props.$baseClass,
})) <ButtonStyledProps>``;