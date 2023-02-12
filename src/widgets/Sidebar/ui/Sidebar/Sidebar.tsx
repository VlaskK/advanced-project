import cls from "./Sidebar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className] )}
        >
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};