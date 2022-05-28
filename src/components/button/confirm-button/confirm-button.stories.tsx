import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmButton as ConfirmButtonComponent } from 'components';
import { MdDeleteOutline, MdAddCircle, MdEmail, MdMap } from 'react-icons/md';

export default {
    title: 'Playground/Actions/Button/ConfirmButton',
    component: ConfirmButtonComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    argTypes: {
        icon: {
            options: ['None', 'Check', 'Alert', 'Chat', 'Box'],
            mapping: {
                None: undefined,
                Check: MdDeleteOutline,
                Alert: MdAddCircle,
                Chat: MdEmail,
                Box: MdMap,
            },
        },
    },
} as ComponentMeta<typeof ConfirmButtonComponent>;

const Template: ComponentStory<typeof ConfirmButtonComponent> = (args) => (
    <ConfirmButtonComponent {...args} />
);

export const ConfirmButton = Template.bind({});
ConfirmButton.args = {
    label: 'Delete',
    icon: MdDeleteOutline,
};
