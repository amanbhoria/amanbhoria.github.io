/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../../../lib/utils.ts";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName
}) => {
    return (<>
        <FloatingDockDesktop items={items} className={desktopClassName} />
        <FloatingDockMobile items={items} className={mobileClassName} />
    </>);
};

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const FloatingDockMobile = ({
    items,
    className
}) => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="flex justify-center mx-auto">
            <div className="flex space-x-4 bg-black rounded-full p-4">
                <button
                    onClick={() => scrollToSection("home")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection("about")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

const FloatingDockDesktop = ({
    items,
    className
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        (<motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
                className
            )}>
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>)
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href
}) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        (<a href={href} style={{ behavior: 'smooth' }}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative">
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs">
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center">
                    {icon}
                </motion.div>
            </motion.div>
        </a>)
    );
}
