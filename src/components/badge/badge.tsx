import { BADGE_PADDING, BADGE_SIZES, BADGE_VARIANT } from './styles';
import { Size, Variant } from 'models';
import { useEffect, useState } from 'react';

type Props = {
    value: string;
    variant?: Variant;
    skin?: 'regular' | 'outline';
    size?: Size;
    className?: string;
};

export function Badge({
    value,
    variant = 'primary',
    skin,
    size = 'md',
    className,
}: Props) {
    const [variantClass, setVariantClass] = useState('');
    const [contentClass, setContentClass] = useState('');
    const [paddingClass, setPaddingClass] = useState('');

    useEffect(() => {
        const selected = BADGE_VARIANT[variant];
        let variantClass = '';

        switch (skin) {
            case 'outline':
                variantClass = selected.outline;
                break;
            default:
                variantClass = selected.regular;
        }

        setVariantClass(variantClass);
    }, [variant, skin]);

    useEffect(() => {
        setContentClass(BADGE_SIZES[size]);
        setPaddingClass(BADGE_PADDING[size]);
    }, [size]);

    return (
        <span
            className={`${variantClass} ${contentClass} ${paddingClass} h-fit rounded-2xl ${className}`}
        >
            {value}
        </span>
    );
}
