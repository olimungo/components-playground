import { THEMES } from './themes';
import { Size, TEXT_SIZES, Theme } from 'models';
import { useEffect, useState } from 'react';

type Props = {
    value: string;
    theme?: Theme;
    skin?: 'regular' | 'outline';
    contentSize?: Size;
    className?: string;
};

export function Badge({
    value,
    theme = 'primary',
    skin,
    contentSize = 'md',
    className,
}: Props) {
    const [themeClass, setThemeClass] = useState('');
    const [contentClass, setContentClass] = useState('');

    useEffect(() => {
        const selected = THEMES[theme];
        let themeClass = '';

        switch (skin) {
            case 'outline':
                themeClass = selected.outline;
                break;
            default:
                themeClass = selected.regular;
        }

        setThemeClass(themeClass);
    }, [theme, skin]);

    useEffect(() => {
        setContentClass(TEXT_SIZES[contentSize]);
    }, [contentSize]);

    return (
        <span
            className={`${themeClass} ${contentClass} h-fit px-2 rounded-2xl ${className}`}
        >
            {value}
        </span>
    );
}
