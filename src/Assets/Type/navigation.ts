import { ReactNode } from "react";

type NavigationItem = {
    segment: string;
    title: string;
    icon: ReactNode;
};

export type { NavigationItem };