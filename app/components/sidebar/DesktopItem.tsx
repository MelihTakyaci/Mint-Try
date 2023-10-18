'use client';

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    icon: Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return(
        <li onClick={handleClick}>
            <Link 
            href={href}
            className={clsx(`
            group
            flex
            gap-x-3
            rounded-full
            p-3
            text-sm
            leading-6
            font-semibold
            text-green-500
            hover:text-green-600
            hover:bg-gray-100
            `,
            active && 'bg-gray-200 text-black'
            )}
            >
                <Icon clasName="h-6 w-6 shrink-0" />
                <span className="sr-only">{label}</span>
            </Link>
        </li>
    );
}

export default DesktopItem;