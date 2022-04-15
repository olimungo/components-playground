import { createElement, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { IconType } from 'react-icons/lib';
import { Size } from 'models';

const SIZES = {
    xs: '1.3rem',
    sm: '1.7rem',
    md: '2.0rem',
    lg: '2.3rem',
    xl: '2.6rem',
    auto: '2.0rem',
};

type Props = {
    icon: IconType;
    size?: Size;
    className?: string;
};

export function ResponsiveIcon(props: Props) {
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
