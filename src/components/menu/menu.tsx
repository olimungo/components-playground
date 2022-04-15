import { Badge } from 'components';
import { ResponsiveIcon } from 'components';
import { Size, TEXT_SIZES, Theme } from 'models';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
    BACKGROUND_THEMES,
    CONTENT_THEMES,
    HIGHLIGHT_THEMES,
    SEPARATOR_THEMES,
} from './themes';

type ElementType = string | IconType | undefined;

const dummyCallback = () => true;

interface MenuItem {
    key: string;
    isHeader?: boolean;
    before?: ElementType;
    content?: string;
    after?: ElementType;
    addSeparator?: boolean;
    children?: MenuItem[];
}

interface MenuItemDecoratorProps {
    value: ElementType;
    size?: Size;
    iconClass?: string;
    badgeTheme?: Theme;
    className?: string;
}

function MenuItemDecorator({
    value,
    size,
    iconClass,
    badgeTheme,
    className,
}: MenuItemDecoratorProps) {
    return (
        <>
            {typeof value === 'string' ? (
                <Badge
                    value={value}
                    theme={badgeTheme}
                    contentSize={size}
                    className={className}
                />
            ) : (
                value && (
                    <ResponsiveIcon
                        icon={value}
                        size={size}
                        className={`${iconClass} ${className}`}
                    />
                )
            )}
        </>
    );
}

interface MenuItemComponentProps {
    menuItem: MenuItem;
    size?: Size;
    contentClass?: string;
    separatorClass?: string;
    iconClass?: string;
    badgeTheme?: Theme;
    highlightClass?: string;
    onClick?: (key: string) => void;
}

function MenuItemComponent({
    menuItem,
    size = 'md',
    contentClass = '',
    separatorClass = '',
    iconClass,
    badgeTheme,
    highlightClass,
    onClick = dummyCallback,
}: MenuItemComponentProps) {
    const [textClass, setTextClass] = useState(TEXT_SIZES['md']);
    const [marginLeftClass, setMarginLeftClass] = useState('ml-7');
    const [headerClass, setHeaderClass] = useState('');

    useEffect(() => {
        if (menuItem.isHeader) {
            setHeaderClass('');
        } else {
            setHeaderClass(`cursor-pointer ${highlightClass}`);
        }
    }, [menuItem, highlightClass]);

    useEffect(() => {
        setTextClass(TEXT_SIZES[size]);

        switch (size) {
            case 'xs':
                setMarginLeftClass('ml-7');
                break;
            case 'sm':
                setMarginLeftClass('ml-9');
                break;
            case 'md':
                setMarginLeftClass('ml-10');
                break;
            case 'lg':
                setMarginLeftClass('ml-[3rem]');
                break;
            case 'xl':
                setMarginLeftClass('ml-[3rem]');
                break;
            default:
                setMarginLeftClass('ml-10');
        }
    }, [size]);

    return (
        <div className={`${contentClass}`}>
            <div
                className={`flex items-center p-1 rounded-md ${headerClass}`}
                onClick={() => onClick(menuItem.key)}
            >
                <MenuItemDecorator
                    value={menuItem.before}
                    size={size}
                    iconClass={iconClass}
                    badgeTheme={badgeTheme}
                    className="mr-2"
                />

                <div className={`mr-2 ${textClass}`}>{menuItem.content}</div>

                <MenuItemDecorator
                    value={menuItem.after}
                    size={size}
                    iconClass={iconClass}
                    badgeTheme={badgeTheme}
                />
            </div>

            <div className={`${marginLeftClass}`}>
                {menuItem.children &&
                    menuItem.children.map((child) => (
                        <MenuItemComponent
                            key={child.key}
                            menuItem={child}
                            size={size}
                            iconClass={iconClass}
                            contentClass={contentClass}
                            separatorClass={separatorClass}
                            badgeTheme={badgeTheme}
                            highlightClass={highlightClass}
                            onClick={onClick}
                        />
                    ))}
            </div>

            {menuItem.addSeparator && (
                <div className={`border-b ${separatorClass} my-2`}></div>
            )}
        </div>
    );
}

interface MenuProps {
    menuItems: MenuItem[];
    size?: Size;
    contentTheme?: Theme;
    backgroundTheme?: Theme;
    separatorTheme?: Theme;
    iconTheme?: Theme;
    badgeTheme?: Theme;
    highlightTheme?: Theme;
    onClick?: (key: string) => void;
}

export function Menu({
    menuItems = [],
    size = 'md',
    contentTheme = 'light',
    backgroundTheme = 'dark',
    separatorTheme = 'light',
    iconTheme = 'light',
    badgeTheme = 'light',
    highlightTheme = 'warning',
    onClick = dummyCallback,
}: MenuProps) {
    const [contentClass, setContentClass] = useState(
        CONTENT_THEMES[contentTheme]
    );
    const [separatorClass, setSeparatorClass] = useState(
        SEPARATOR_THEMES[separatorTheme]
    );

    const [backgroundClass, setBackgroundClass] = useState(
        BACKGROUND_THEMES[backgroundTheme]
    );

    const [iconClass, setIconClass] = useState(CONTENT_THEMES[iconTheme]);

    const [highlightClass, setHighlightClass] = useState(
        HIGHLIGHT_THEMES[highlightTheme]
    );

    const [paddingClass, setPaddingClass] = useState('p-2');

    useEffect(() => {
        setContentClass(CONTENT_THEMES[contentTheme]);
    }, [contentTheme]);

    useEffect(() => {
        setSeparatorClass(SEPARATOR_THEMES[separatorTheme]);
    }, [separatorTheme]);

    useEffect(() => {
        setBackgroundClass(BACKGROUND_THEMES[backgroundTheme]);
    }, [backgroundTheme]);

    useEffect(() => {
        setIconClass(CONTENT_THEMES[iconTheme]);
    }, [iconTheme]);

    useEffect(() => {
        setHighlightClass(HIGHLIGHT_THEMES[highlightTheme]);
    }, [highlightTheme]);

    useEffect(() => {
        setPaddingClass(size === 'xs' ? 'p-2' : size === 'xl' ? 'p-4' : 'p-3');
    }, [size]);

    return (
        <div
            className={`inline-flex flex-col ${backgroundClass} ${paddingClass} text-slate-200`}
        >
            {menuItems.map((menuItem) => (
                <MenuItemComponent
                    key={menuItem.key}
                    menuItem={menuItem}
                    size={size}
                    contentClass={contentClass}
                    separatorClass={separatorClass}
                    iconClass={iconClass}
                    badgeTheme={badgeTheme}
                    highlightClass={highlightClass}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}
