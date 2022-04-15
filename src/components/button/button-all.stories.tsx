import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Props, ResponsiveButton } from 'components';
import {
    RiCheckDoubleFill,
    RiAlertFill,
    RiChatNewFill,
    RiAddBoxLine,
} from 'react-icons/ri';

function ButtonsList(args: { buttons: { label: string; props: Props }[] }) {
    const { buttons } = args;
    return (
        <div className="flex flex-wrap items-end">
            {buttons.map(({ label, props }) => (
                <div key={label} className="flex flex-col items-center m-3">
                    <ResponsiveButton {...props} />
                    <div className="mt-2 text-neutral-400">{label}</div>
                </div>
            ))}
        </div>
    );
}

export default {
    title: 'Playground/Actions/Button',
    component: ButtonsList,
} as ComponentMeta<typeof ButtonsList>;

const TemplateList: ComponentStory<typeof ButtonsList> = (args) => {
    return <ButtonsList {...args} />;
};

export const Appearance = TemplateList.bind({});
Appearance.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                theme: 'primary',
            },
        },
        {
            label: 'Secondary',
            props: { label: 'Secondary', theme: 'secondary' },
        },
        {
            label: 'Success',
            props: { label: 'Success', theme: 'success' },
        },
        {
            label: 'Warning',
            props: { label: 'Warning', theme: 'warning' },
        },
        {
            label: 'Info',
            props: { label: 'Info', theme: 'info' },
        },
        {
            label: 'Light',
            props: { label: 'Light', theme: 'light' },
        },
        {
            label: 'Dark',
            props: { label: 'Dark', theme: 'dark' },
        },
    ],
};

export const Uppercase = TemplateList.bind({});
Uppercase.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                theme: 'primary',
                uppercase: false,
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                theme: 'secondary',
                uppercase: false,
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                theme: 'success',
                uppercase: false,
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                theme: 'warning',
                uppercase: false,
            },
        },
        {
            label: 'Info',
            props: { label: 'Info', theme: 'info', uppercase: false },
        },
        {
            label: 'Light',
            props: { label: 'Light', theme: 'light', uppercase: false },
        },
        {
            label: 'Dark',
            props: { label: 'Dark', theme: 'dark', uppercase: false },
        },
    ],
};

export const Outline = TemplateList.bind({});
Outline.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                theme: 'primary',
                skin: 'outline',
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                theme: 'secondary',
                skin: 'outline',
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                theme: 'success',
                skin: 'outline',
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                theme: 'warning',
                skin: 'outline',
            },
        },
        {
            label: 'Info',
            props: {
                label: 'Info',
                theme: 'info',
                skin: 'outline',
            },
        },
        {
            label: 'Light',
            props: {
                label: 'Light',
                theme: 'light',
                skin: 'outline',
            },
        },
        {
            label: 'Dark',
            props: {
                label: 'Dark',
                theme: 'dark',
                skin: 'outline',
            },
        },
    ],
};

export const Ghost = TemplateList.bind({});
Ghost.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                theme: 'primary',
                skin: 'ghost',
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                theme: 'secondary',
                skin: 'ghost',
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                theme: 'success',
                skin: 'ghost',
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                theme: 'warning',
                skin: 'ghost',
            },
        },
        {
            label: 'Info',
            props: {
                label: 'Info',
                theme: 'info',
                skin: 'ghost',
            },
        },
        {
            label: 'Light',
            props: {
                label: 'Light',
                theme: 'light',
                skin: 'ghost',
            },
        },
        {
            label: 'Dark',
            props: {
                label: 'Dark',
                theme: 'dark',
                skin: 'ghost',
            },
        },
    ],
};

export const ContentSize = TemplateList.bind({});
ContentSize.args = {
    buttons: [
        {
            label: 'xs',
            props: {
                label: 'XS',
                theme: 'primary',
                buttonSize: 'xs',
            },
        },
        {
            label: 'sm',
            props: {
                label: 'SM',
                theme: 'secondary',
                buttonSize: 'sm',
            },
        },
        {
            label: 'md',
            props: {
                label: 'MD',
                theme: 'success',
                buttonSize: 'md',
            },
        },
        {
            label: 'lg',
            props: {
                label: 'LG',
                theme: 'warning',
                buttonSize: 'lg',
            },
        },
        {
            label: 'xl',
            props: {
                label: 'XL',
                theme: 'info',
                buttonSize: 'xl',
            },
        },
    ],
};

export const Icon = TemplateList.bind({});
Icon.args = {
    buttons: [
        {
            label: 'Top',
            props: {
                label: 'Primary',
                theme: 'primary',
                icon: RiCheckDoubleFill,
                iconPosition: 'top',
                uppercase: false,
            },
        },
        {
            label: 'Bottom',
            props: {
                label: 'XS',
                theme: 'secondary',
                icon: RiAlertFill,
                iconPosition: 'bottom',
                buttonSize: 'xs',
                contentSize: 'xs',
            },
        },
        {
            label: 'Left',
            props: {
                label: 'Left',
                theme: 'warning',
                icon: RiChatNewFill,
                contentSize: 'xs',
                buttonSize: 'auto',
            },
        },
        {
            label: 'Right',
            props: {
                label: 'Light',
                theme: 'light',
                icon: RiAddBoxLine,
                iconPosition: 'right',
                contentSize: 'lg',
                buttonSize: 'auto',
                skin: 'outline',
            },
        },
        {
            label: 'No label',
            props: {
                label: '',
                theme: 'success',
                icon: RiAlertFill,
                contentSize: 'xs',
                buttonSize: 'auto',
            },
        },
    ],
};
