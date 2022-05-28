import { Badge } from 'components';
import { Icon } from 'components';
import {
    Size,
    Variant,
    TEXT_SIZES,
    TEXT_STYLES,
    BACKGROUND_STYLES,
    HIGHLIGHT_STYLES,
    BORDER_STYLES,
} from 'models';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { MARGIN_LEFT_STYLES } from './styles';

type ElementType = string | IconType | undefined;

const dummyCallback = () => true;

export interface MenuItem {
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
    badgeVariant?: Variant;
    className?: string;
}

function MenuItemDecorator({
    value,
    size,
    iconClass,
    badgeVariant,
    className,
}: MenuItemDecoratorProps) {
    return (
        <>
            {typeof value === 'string' ? (
                <Badge
                    value={value}
                    variant={badgeVariant}
                    size={size}
                    className={className}
                />
            ) : (
                value && (
                    <Icon
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
    badgeVariant?: Variant;
    highlightClass?: string;
    onClick?: (key: string) => void;
}

function MenuItemComponent({
    menuItem,
    size = 'md',
    contentClass = '',
    separatorClass = '',
    iconClass,
    badgeVariant,
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
    }, [menuItem, highlightClass, onClick]);

    useEffect(() => {
        setTextClass(TEXT_SIZES[size]);
        setMarginLeftClass(MARGIN_LEFT_STYLES[size]);
    }, [size]);

    return (
        <div className={`${contentClass}`}>
            <div
                className={`flex items-center p-1 rounded-md ${headerClass}`}
                onClick={() =>
                    menuItem.isHeader ? dummyCallback : onClick(menuItem.key)
                }
            >
                <MenuItemDecorator
                    value={menuItem.before}
                    size={size}
                    iconClass={iconClass}
                    badgeVariant={badgeVariant}
                    className="mr-2"
                />

                <div className={`mr-2 ${textClass}`}>{menuItem.content}</div>

                <MenuItemDecorator
                    value={menuItem.after}
                    size={size}
                    iconClass={iconClass}
                    badgeVariant={badgeVariant}
                />
            </div>

            <div className={`${marginLeftClass}`}>
                {menuItem.children &&
                    menuItem.children.map((child) => (
                        <MenuItemComponent
                            key={child.key}
                            menuItem={child}
                            size={size}
                            badgeVariant={badgeVariant}
                            iconClass={iconClass}
                            contentClass={contentClass}
                            separatorClass={separatorClass}
                            highlightClass={highlightClass}
                            onClick={onClick}
                        />
                    ))}
            </div>

            {menuItem.addSeparator && (
                <div className={`border-b ${separatorClass} my-1`}></div>
            )}
        </div>
    );
}

export interface MenuProps {
    menuItems: MenuItem[];
    size?: Size;
    contentVariant?: Variant;
    backgroundVariant?: Variant;
    separatorVariant?: Variant;
    iconVariant?: Variant;
    badgeVariant?: Variant;
    highlightVariant?: Variant;
    onClick?: (key: string) => void;
}

export function Menu({
    menuItems = [],
    size = 'md',
    contentVariant = 'light',
    backgroundVariant = 'dark',
    separatorVariant = 'light',
    iconVariant = 'light',
    badgeVariant = 'light',
    highlightVariant = 'warning',
    onClick = dummyCallback,
}: MenuProps) {
    const [contentClass, setContentClass] = useState(
        TEXT_STYLES[contentVariant]
    );
    const [separatorClass, setSeparatorClass] = useState(
        BORDER_STYLES[separatorVariant]
    );

    const [backgroundClass, setBackgroundClass] = useState(
        BACKGROUND_STYLES[backgroundVariant]
    );

    const [iconClass, setIconClass] = useState(TEXT_STYLES[iconVariant]);

    const [highlightClass, setHighlightClass] = useState(
        HIGHLIGHT_STYLES[highlightVariant]
    );

    const [paddingClass, setPaddingClass] = useState('p-2');

    useEffect(() => {
        setContentClass(TEXT_STYLES[contentVariant]);
    }, [contentVariant]);

    useEffect(() => {
        setSeparatorClass(BORDER_STYLES[separatorVariant]);
    }, [separatorVariant]);

    useEffect(() => {
        setBackgroundClass(BACKGROUND_STYLES[backgroundVariant]);
    }, [backgroundVariant]);

    useEffect(() => {
        setIconClass(TEXT_STYLES[iconVariant]);
    }, [iconVariant]);

    useEffect(() => {
        setHighlightClass(HIGHLIGHT_STYLES[highlightVariant]);
    }, [highlightVariant]);

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
                    badgeVariant={badgeVariant}
                    contentClass={contentClass}
                    separatorClass={separatorClass}
                    iconClass={iconClass}
                    highlightClass={highlightClass}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}
