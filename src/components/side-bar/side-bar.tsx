import { useEffect, useState } from 'react';
import { BACKGROUND_STYLES, Variant } from 'models';

export type SideBarProps = {
    backgroundVariant: Variant;
};

export function SideBar({ backgroundVariant = 'dark' }: SideBarProps) {
    const [backgroundClass, setBackgroundClass] = useState(
        BACKGROUND_STYLES[backgroundVariant]
    );

    useEffect(() => {
        setBackgroundClass(BACKGROUND_STYLES[backgroundVariant]);
    }, [backgroundVariant]);

    return (
        <div className="flex">
            <div className="z-40 h-full mt-4 fixed hidden md:block">
                <div className="h-full pt-12 w-60 bg-slate-400 shadow-2xl">
                    {/* <Menu sectionGroups={sectionGroups} /> */}
                </div>
            </div>

            {/* Just an invisible pladholder behind the fixed container above.
                To make sure that the container to the right of the side menu
                is correctly centered */}
            <div className="mt-4 hidden invisible md:block pt-12 w-60"></div>
        </div>
    );
}
