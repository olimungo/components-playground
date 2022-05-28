import { useEffect, useState } from 'react';
import { IconType } from 'react-icons/lib';
import { Button } from 'components';
import { RiCheckDoubleFill } from 'react-icons/ri';
import { Position, Size, Variant } from 'models';

const dummyCallback = () => true;

export type ConfirmButtonProps = {
    label?: string;
    confirmLabel: string;
    variant?: Variant;
    skin?: 'regular' | 'ghost' | 'outline';
    width?: Size;
    size?: Size;
    icon?: IconType;
    iconPosition?: Position;
    labelAlwaysVisible?: boolean;
    uppercase?: boolean;
    onConfirm: () => void;
};

export function ConfirmButton({
    label,
    confirmLabel = 'Confirm',
    variant = 'primary',
    skin = 'regular',
    width = 'auto',
    size = 'md',
    icon,
    iconPosition = 'left',
    labelAlwaysVisible = false,
    uppercase = true,
    onConfirm = dummyCallback,
}: ConfirmButtonProps) {
    const [toConfirm, setToConfirm] = useState(false);
    const [toConfirmTimer, setToConfirmTimer] = useState<NodeJS.Timeout>();

    useEffect(() => {
        return () => {
            if (toConfirmTimer) {
                clearTimeout(toConfirmTimer);
            }
        };
    }, [toConfirmTimer]);

    const handleConfirm = () => {
        const timer = setTimeout(() => {
            setToConfirm(false);
        }, 2000);

        setToConfirmTimer(timer);
        setToConfirm(true);
    };

    const handleConfirmed = () => {
        if (toConfirmTimer) {
            clearTimeout(toConfirmTimer);
        }

        setToConfirm(false);
        onConfirm();
    };

    return (
        <>
            {!toConfirm && (
                <Button
                    label={label}
                    variant={variant}
                    skin={skin}
                    width={width}
                    size={size}
                    icon={icon}
                    iconPosition={iconPosition}
                    labelAlwaysVisible={labelAlwaysVisible}
                    uppercase={uppercase}
                    onClick={handleConfirm}
                />
            )}

            {toConfirm && (
                <Button
                    label={confirmLabel}
                    variant={variant}
                    skin={skin}
                    width={width}
                    size={size}
                    icon={RiCheckDoubleFill}
                    iconPosition={iconPosition}
                    labelAlwaysVisible={labelAlwaysVisible}
                    uppercase={uppercase}
                    onClick={handleConfirmed}
                />
            )}
        </>
    );
}
