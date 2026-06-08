import { Button } from "@mui/material";
import React from "react";

// Hier definieren wir die Props, die unser PrimaryButton akzeptiert. 
// Wir haben eine optionale onClick-Funktion, die aufgerufen wird, 
// wenn der Button geklickt wird. 
// Außerdem akzeptieren wir children, um den Inhalt des Buttons zu definieren.
// children ist vom Typ React.ReactNode, damit wir beliebige React-Elemente oder Text als Inhalt verwenden können.
// children ist in React die Standardprop, um den Inhalt eines Components zu definieren.
// Disabled ist eine optionale Prop, die angibt, ob der Button deaktiviert ist oder nicht.
interface PrimaryButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    color?: 'primary' |  'success';
}

// Hier definieren wir unseren PrimaryButton als funktionalen React-Komponenten.
// Wir verwenden TypeScript, um die Props zu typisieren, die unser Button akzeptiert.
// Den Style des Buttons definieren wir über die Material-UI Button-Komponente, 
// die bereits vordefinierte Stile für verschiedene Varianten und Farben bietet.
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    onClick,
    children,
    type = 'button',
    disabled = false,
    color = 'primary',
}) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;