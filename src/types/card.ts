import { type ReactNode } from 'react';

export interface CardProps {
    titulo: string;
    valor: number | string ;
    icon?: ReactNode
    className?: string;
}
