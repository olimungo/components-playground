import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { Icon } from 'components';
import { BUTTON_VARIANT, BUTTON_SIZES } from './styles';
import { Variant, Position, Size, TEXT_SIZES } from 'models';
import './button.css';

export interface ButtonProps {
    label?: string;
    variant?: Variant;
    skin?: 'regular' | 'ghost' | 'outline';
    width?: Size;
    size?: Size;
    icon?: IconType;
    iconPosition?: Position;
    labelAlwaysVisible?: boolean;
    uppercase?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const dummyCallback = () => {};

export function Button({
    label,
    variant = 'primary',
    skin = 'regular',
    icon,
    iconPosition = 'right',
    width = 'auto',
    size = 'md',
    labelAlwaysVisible = false,
    uppercase = true,
    type = 'button',
    onClick = dummyCallback,
}: ButtonProps) {
    const [variantClass, setVariantClass] = useState('');
    const [sizeClass, setSizeClass] = useState('');
    const [contentClass, setContentClass] = useState('');
    const [uppercaseClass, setUppercaseClass] = useState('');
    const [flexCol, setFlexCol] = useState('');
    const [labelAlwaysVisibleClass, setLabelAlwaysVisibleClass] = useState('');

    useEffect(() => {
        const selected = BUTTON_VARIANT[variant];
        let variantClass = '';

        switch (skin) {
            case 'ghost':
                variantClass = selected.ghost;
                break;
            case 'outline':
                variantClass = selected.outline;
                break;
            default:
                variantClass = selected.regular;
        }

        setVariantClass(variantClass);
    }, [variant, skin]);

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
            className={`bounce inline cursor-pointer rounded-md px-4 py-1.5 ${variantClass} ${sizeClass} ${uppercaseClass} ${contentClass}`}
            onClick={onClick}
        >
            <div className={`flex justify-center items-center ${flexCol}`}>
                {icon &&
                    (iconPosition === 'left' || iconPosition === 'top') && (
                        <Icon icon={icon} size={size} className="mx-1" />
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
                        <Icon icon={icon} size={size} className="mx-1" />
                    )}
            </div>
        </button>
    );
}
