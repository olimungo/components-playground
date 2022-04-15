import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer as FooterComponent } from 'components';

export default {
    title: 'Playground/Layout/Footer',
    component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = (args) => (
    <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {};

export const Footer2 = Template.bind({});
Footer2.args = {};
