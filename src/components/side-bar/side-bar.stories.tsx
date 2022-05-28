import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar as SideBarComponent } from 'components';

export default {
    title: 'Playground/Layout',
    component: SideBarComponent,
} as ComponentMeta<typeof SideBarComponent>;

const Template: ComponentStory<typeof SideBarComponent> = (args) => (
    <SideBarComponent {...args} />
);

export const SideBar = Template.bind({});
SideBar.args = {};
