"use client"
import { useMemo, useRef, useCallback, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation";
import Link from 'next/link'


type TabProps = {
    component: ReactNode,
    href: string,
    activeClassName: string
};


function getFirstSegment(url: string) {
    return url.split("/")[1] || "";
};

export default function Tab({ href, component, activeClassName }: TabProps) {
    const tab = useRef(null);
    const hideDrawer = useCallback(() => {
        if (window.innerWidth < 1281) {
            if (tab.current) {
                const currentNode = tab.current as HTMLLIElement;
                (currentNode.parentNode as HTMLElement).style.display = "none";
            };
        };
    }, []);
    //
    const path = usePathname();
    //
    const isActive = useMemo(() => {
        const firstRouteSegment = getFirstSegment(href);
        const currentPathFirstSegment = getFirstSegment(path);
        return firstRouteSegment === currentPathFirstSegment;
    }, [href, path]);
    //
    useEffect(() => {
        hideDrawer();
    }, [path, hideDrawer]);
    //
    return (
        <li ref={tab} key={href} className={isActive ? activeClassName : undefined}>
            <Link href={href}>
                {component}
            </Link>
        </li>
    );
};