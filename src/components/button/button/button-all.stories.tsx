import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonProps, Button } from 'components';
import {
    RiCheckDoubleFill,
    RiAlertFill,
    RiChatNewFill,
    RiAddBoxLine,
} from 'react-icons/ri';

function ButtonsList(args: {
    buttons: { label: string; props: ButtonProps }[];
}) {
    const { buttons } = args;
    return (
        <div className="flex flex-wrap items-end">
            {buttons.map(({ label, props }) => (
                <div key={label} className="flex flex-col items-center m-3">
                    <Button {...props} />
                    <div className="mt-2 text-neutral-400">{label}</div>
                </div>
            ))}
        </div>
    );
}

export default {
    title: 'Playground/Actions/Button/Button',
    component: ButtonsList,
} as ComponentMeta<typeof ButtonsList>;

const TemplateList: ComponentStory<typeof ButtonsList> = (args) => {
    return <ButtonsList {...args} />;
};

export const Variant = TemplateList.bind({});
Variant.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                variant: 'primary',
            },
        },
        {
            label: 'Secondary',
            props: { label: 'Secondary', variant: 'secondary' },
        },
        {
            label: 'Success',
            props: { label: 'Success', variant: 'success' },
        },
        {
            label: 'Warning',
            props: { label: 'Warning', variant: 'warning' },
        },
        {
            label: 'Info',
            props: { label: 'Info', variant: 'info' },
        },
        {
            label: 'Light',
            props: { label: 'Light', variant: 'light' },
        },
        {
            label: 'Dark',
            props: { label: 'Dark', variant: 'dark' },
        },
    ],
};

export const Lowercase = TemplateList.bind({});
Lowercase.args = {
    buttons: [
        {
            label: 'Primary',
            props: {
                label: 'Primary',
                variant: 'primary',
                uppercase: false,
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                variant: 'secondary',
                uppercase: false,
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                variant: 'success',
                uppercase: false,
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                variant: 'warning',
                uppercase: false,
            },
        },
        {
            label: 'Info',
            props: { label: 'Info', variant: 'info', uppercase: false },
        },
        {
            label: 'Light',
            props: { label: 'Light', variant: 'light', uppercase: false },
        },
        {
            label: 'Dark',
            props: { label: 'Dark', variant: 'dark', uppercase: false },
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
                variant: 'primary',
                skin: 'outline',
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                variant: 'secondary',
                skin: 'outline',
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                variant: 'success',
                skin: 'outline',
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                variant: 'warning',
                skin: 'outline',
            },
        },
        {
            label: 'Info',
            props: {
                label: 'Info',
                variant: 'info',
                skin: 'outline',
            },
        },
        {
            label: 'Light',
            props: {
                label: 'Light',
                variant: 'light',
                skin: 'outline',
            },
        },
        {
            label: 'Dark',
            props: {
                label: 'Dark',
                variant: 'dark',
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
                variant: 'primary',
                skin: 'ghost',
            },
        },
        {
            label: 'Secondary',
            props: {
                label: 'Secondary',
                variant: 'secondary',
                skin: 'ghost',
            },
        },
        {
            label: 'Success',
            props: {
                label: 'Success',
                variant: 'success',
                skin: 'ghost',
            },
        },
        {
            label: 'Warning',
            props: {
                label: 'Warning',
                variant: 'warning',
                skin: 'ghost',
            },
        },
        {
            label: 'Info',
            props: {
                label: 'Info',
                variant: 'info',
                skin: 'ghost',
            },
        },
        {
            label: 'Light',
            props: {
                label: 'Light',
                variant: 'light',
                skin: 'ghost',
            },
        },
        {
            label: 'Dark',
            props: {
                label: 'Dark',
                variant: 'dark',
                skin: 'ghost',
            },
        },
    ],
};

export const Width = TemplateList.bind({});
Width.args = {
    buttons: [
        {
            label: 'xs',
            props: {
                label: 'XS',
                variant: 'primary',
                width: 'xs',
            },
        },
        {
            label: 'sm',
            props: {
                label: 'SM',
                variant: 'secondary',
                width: 'sm',
            },
        },
        {
            label: 'md',
            props: {
                label: 'MD',
                variant: 'success',
                width: 'md',
            },
        },
        {
            label: 'lg',
            props: {
                label: 'LG',
                variant: 'warning',
                width: 'lg',
            },
        },
        {
            label: 'xl',
            props: {
                label: 'XL',
                variant: 'info',
                width: 'xl',
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
                label: 'Check',
                variant: 'primary',
                icon: RiCheckDoubleFill,
                iconPosition: 'top',
                uppercase: false,
            },
        },
        {
            label: 'Bottom',
            props: {
                label: 'Watch out!',
                variant: 'secondary',
                icon: RiAlertFill,
                iconPosition: 'bottom',
                width: 'xs',
                size: 'xs',
            },
        },
        {
            label: 'Left',
            props: {
                label: 'Message',
                variant: 'warning',
                icon: RiChatNewFill,
                iconPosition: 'left',
                size: 'xs',
                width: 'auto',
            },
        },
        {
            label: 'Right',
            props: {
                label: 'Add',
                variant: 'info',
                icon: RiAddBoxLine,
                iconPosition: 'right',
                size: 'lg',
                width: 'auto',
                skin: 'outline',
            },
        },
        {
            label: 'No label',
            props: {
                label: '',
                variant: 'success',
                icon: RiAlertFill,
                size: 'xs',
                width: 'auto',
            },
        },
    ],
};

export const Size = TemplateList.bind({});
Size.args = {
    buttons: [
        {
            label: 'xs',
            props: {
                label: 'XS',
                variant: 'primary',
                size: 'xs',
            },
        },
        {
            label: 'sm',
            props: {
                label: 'SM',
                variant: 'secondary',
                size: 'sm',
            },
        },
        {
            label: 'md',
            props: {
                label: 'MD',
                variant: 'success',
                size: 'md',
            },
        },
        {
            label: 'lg',
            props: {
                label: 'LG',
                variant: 'warning',
                size: 'lg',
            },
        },
        {
            label: 'xl',
            props: {
                label: 'XL',
                variant: 'info',
                size: 'xl',
            },
        },
    ],
};
