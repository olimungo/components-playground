import { createElement, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { IconType } from 'react-icons/lib';
import { Size } from 'models';

const SIZES = {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    auto: '1.4rem',
};

type Props = {
    icon: IconType;
    size?: Size;
    className?: string;
};

export function Icon(props: Props) {
    const { icon, size = 'md', className } = props;
    const [iconSize, setIconSize] = useState(SIZES[size]);

    useEffect(() => {
        setIconSize(SIZES[size]);
    }, [size]);

    return (
        <>
            <div className={`${className} flex`}>
                <IconContext.Provider value={{ size: iconSize }}>
                    {createElement(icon)}
                </IconContext.Provider>
            </div>
        </>
    );
}
