import { Button } from "@mui/material";
import React from "react";

interface SecondaryButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    // Hier haben wir eine optionale Prop "variant", die den Stil des Buttons bestimmt.
    // border erwartet entweder "outline" oder "ghost".
    // "outline" bedeutet, dass der Button einen Rahmen hat, aber keinen Hintergrund.
    // "ghost" bedeutet, dass der Button keinen Rahmen und keinen Hintergrund hat, sondern nur Text.
    variant?: 'outline' | 'ghost';
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    onClick,
    children,
    type = 'button',
    disabled = false,
    variant = 'outline',
}) => {
    return (
        <Button
            color="secondary"
            onClick={onClick}
            type={type}
            disabled={disabled}
            variant={variant === 'ghost' ? 'text' : 'outlined'}
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;