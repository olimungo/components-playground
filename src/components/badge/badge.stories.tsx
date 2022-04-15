import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge as BadgeComponent } from 'components';

export default {
    title: 'Playground/DataDisplay/Badge',
    component: BadgeComponent,
} as ComponentMeta<typeof BadgeComponent>;

const Template: ComponentStory<typeof BadgeComponent> = (args) => (
    <BadgeComponent {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    value: '+999',
    contentSize: 'xs',
    theme: 'primary',
};

export const Small = Template.bind({});
Small.args = {
    value: '+999',
    contentSize: 'sm',
    theme: 'secondary',
};

export const Medium = Template.bind({});
Medium.args = {
    value: '+999',
    contentSize: 'md',
    theme: 'warning',
};

export const Large = Template.bind({});
Large.args = {
    value: '+999',
    contentSize: 'lg',
    theme: 'info',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    value: '+999',
    contentSize: 'xl',
    theme: 'danger',
};

export const SizeUndefined = Template.bind({});
SizeUndefined.args = {
    value: '+999',
    theme: 'danger',
};

export const Auto = Template.bind({});
Auto.args = {
    value: '+999',
    contentSize: 'auto',
    theme: 'danger',
};
