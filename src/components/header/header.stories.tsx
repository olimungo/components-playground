import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header as HeaderComponent } from 'components';

export default {
    title: 'Playground/Layout/Header',
    component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
    <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {};
