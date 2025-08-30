"use client";
import { memo, useRef, useCallback } from "react";
import "../styles/drawer-button.css"

function OpenDrawerButton() {
    const openDrawerButton = useRef(null);
    const openDrawer = useCallback(() => {
        if (openDrawerButton.current) {
            const currentNode = openDrawerButton.current as HTMLDivElement;
            const drawerNavigator = currentNode.parentNode!.lastElementChild as HTMLElement;
            drawerNavigator.style.display = "flex";
        };
    }, []);
    return (
        <div onClick={openDrawer} ref={openDrawerButton} className="drawer-wraper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default memo(OpenDrawerButton);
