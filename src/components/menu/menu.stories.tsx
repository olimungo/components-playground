import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from 'components';
import {
    RiCheckFill,
    RiMessage3Line,
    RiAliensFill,
    RiBuilding3Fill,
    RiGlobalFill,
} from 'react-icons/ri';
import { HiCog } from 'react-icons/hi';

export default {
    title: 'Playground/Navigation/Menu',
    component: Menu,
    parameters: { controls: { sort: 'requiredFirst' } },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

const menuItems = [
    {
        key: '1',
        isHeader: true,
        before: RiAliensFill,
        content: 'People',
        addSeparator: true,
        children: [
            {
                key: '1.1',
                content: 'Employees',
                after: '+999',
            },
            {
                key: '1.2',
                content: 'External developers',
                after: '3',
            },
            {
                key: '1.3',
                isHeader: true,
                content: 'Factory',
                before: RiBuilding3Fill,
                children: [
                    {
                        key: '1.3.1',
                        before: RiCheckFill,
                        content: 'Checked option',
                    },
                    {
                        key: '1.3.2',
                        content: 'Checked option',
                        after: RiCheckFill,
                    },
                    {
                        key: '1.3.3',
                        before: '3',
                        content: 'Messages',
                        after: RiMessage3Line,
                    },
                    {
                        key: '1.3.4',
                        content: 'Emails',
                    },
                ],
            },
        ],
    },
    { key: '2', before: HiCog, content: 'Parameters', addSeparator: true },
    { key: '3', before: RiGlobalFill, content: 'Configuration' },
];

export const Medium = Template.bind({});
Medium.args = {
    menuItems,
    size: 'md',
};

export const SizeUndefined = Template.bind({});
SizeUndefined.args = {
    menuItems,
};

export const Auto = Template.bind({});
Auto.args = {
    menuItems,
    size: 'auto',
};

export const Large = Template.bind({});
Large.args = {
    menuItems,
    size: 'lg',
    backgroundTheme: 'primary',
    separatorTheme: 'warning',
    iconTheme: 'light',
    badgeTheme: 'info',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    menuItems,
    size: 'xs',
    contentTheme: 'primary',
    separatorTheme: 'light',
    iconTheme: 'secondary',
    badgeTheme: 'light',
    highlightTheme: 'info',
};

export const Small = Template.bind({});
Small.args = {
    menuItems,
    size: 'sm',
    contentTheme: 'primary',
    separatorTheme: 'light',
    iconTheme: 'secondary',
    badgeTheme: 'light',
    highlightTheme: 'info',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    menuItems,
    size: 'xl',
    contentTheme: 'primary',
    separatorTheme: 'light',
    iconTheme: 'secondary',
    badgeTheme: 'light',
    highlightTheme: 'info',
};
