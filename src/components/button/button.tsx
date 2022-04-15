import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { ResponsiveIcon } from 'components';
import { THEMES } from './themes';
import { Theme, Position, Size, TEXT_SIZES, BUTTON_SIZES } from 'models';
import './button.css';

export interface Props {
    theme?: Theme;
    skin?: 'regular' | 'ghost' | 'outline';
    width?: Size;
    size?: Size;
    label?: string;
    icon?: IconType;
    iconPosition?: Position;
    labelAlwaysVisible?: boolean;
    uppercase?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const dummyCallback = () => {};

export function ResponsiveButton({
    label,
    theme = 'primary',
    skin = 'regular',
    icon,
    iconPosition = 'right',
    width = 'sm',
    size = 'md',
    labelAlwaysVisible = false,
    uppercase = true,
    type = 'button',
    onClick = dummyCallback,
}: Props) {
    const [themeClass, setThemeClass] = useState('');
    const [sizeClass, setSizeClass] = useState('');
    const [contentClass, setContentClass] = useState('');
    const [uppercaseClass, setUppercaseClass] = useState('');
    const [flexCol, setFlexCol] = useState('');
    const [labelAlwaysVisibleClass, setLabelAlwaysVisibleClass] = useState('');

    useEffect(() => {
        const selected = THEMES[theme];
        let themeClass = '';

        switch (skin) {
            case 'ghost':
                themeClass = selected.ghost;
                break;
            case 'outline':
                themeClass = selected.outline;
                break;
            default:
                themeClass = selected.regular;
        }

        setThemeClass(themeClass);
    }, [theme, skin]);

    useEffect(() => {
        setSizeClass(BUTTON_SIZES[width]);
    }, [width]);

    useEffect(() => {
        setContentClass(TEXT_SIZES[size]);
    }, [size]);

    useEffect(() => {
        if (uppercase) {
            setUppercaseClass('uppercase');
        } else {
            setUppercaseClass('');
        }
    }, [uppercase]);

    useEffect(() => {
        if (iconPosition === 'top' || iconPosition === 'bottom') {
            setFlexCol('flex-col');
        } else {
            setFlexCol('');
        }
    }, [iconPosition]);

    useEffect(() => {
        if (labelAlwaysVisible) {
            setLabelAlwaysVisibleClass('');
        } else {
            setLabelAlwaysVisibleClass('hidden xs:block');
        }
    }, [labelAlwaysVisible]);

    return (
        <button
            type={type}
            className={`bounce inline cursor-pointer rounded-md px-4 py-1.5 text-neutral-200 ${themeClass} ${sizeClass} ${uppercaseClass} ${contentClass}`}
            onClick={onClick}
        >
            <div className={`flex justify-center items-center ${flexCol}`}>
                {icon &&
                    (iconPosition === 'left' || iconPosition === 'top') && (
                        <ResponsiveIcon icon={icon} size={size} />
                    )}

                {label && (
                    <div
                        className={`mx-1 self-center truncate ${labelAlwaysVisibleClass}`}
                    >
                        {label}
                    </div>
                )}

                {icon &&
                    (iconPosition === 'right' || iconPosition === 'bottom') && (
                        <ResponsiveIcon
                            icon={icon}
                            size={size}
                            className="mx-1"
                        />
                    )}
            </div>
        </button>
    );
}
