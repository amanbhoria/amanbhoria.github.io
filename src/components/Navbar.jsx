import React from "react";
import { FaHome, FaTerminal, FaCogs, FaTwitter, FaGithub, FaExchangeAlt, FaUser } from "react-icons/fa";
import { FloatingDock } from "./ui/floating-dock.jsx";
import { FcAbout, FcContacts } from "react-icons/fc";
import { FaX } from "react-icons/fa6";

export default function Navbar() {

    const links = [
        {
            title: "Home",
            icon: <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },
        {
            title: "Contact",
            icon: <FcContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "contact",
        },
        {
            title: "About",
            icon: <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "about",
        },
        {
            title: "X",
            icon: <FaX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.x.com/be_creative007",
        },
        {
            title: "GitHub",
            icon: <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.github.com/amanbhoria",
        },
    ];

    return (
        <div className="flex items-center pt-20 w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
