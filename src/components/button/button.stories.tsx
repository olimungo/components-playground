import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResponsiveButton } from 'components';
import {
    RiCheckDoubleFill,
    RiAlertFill,
    RiChatNewFill,
    RiAddBoxLine,
} from 'react-icons/ri';

export default {
    title: 'Playground/Actions/Button',
    component: ResponsiveButton,
    parameters: { controls: { sort: 'requiredFirst' } },
    argTypes: {
        icon: {
            options: ['None', 'Check', 'Alert', 'Chat', 'Box'],
            mapping: {
                None: undefined,
                Check: RiCheckDoubleFill,
                Alert: RiAlertFill,
                Chat: RiChatNewFill,
                Box: RiAddBoxLine,
            },
        },
    },
} as ComponentMeta<typeof ResponsiveButton>;

const Template: ComponentStory<typeof ResponsiveButton> = (args) => (
    <ResponsiveButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Primary',
    buttonSize: 'md',
    icon: RiCheckDoubleFill,
};
