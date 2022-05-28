import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components';
import {
    RiCheckDoubleFill,
    RiAlertFill,
    RiChatNewFill,
    RiAddBoxLine,
} from 'react-icons/ri';

export default {
    title: 'Playground/Actions/Button/Button',
    component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Primary' };
Default.storyName = '# Default';
