import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar as SearchBarComponent } from 'components';

export default {
    title: 'Playground/Layout',
    component: SearchBarComponent,
} as ComponentMeta<typeof SearchBarComponent>;

const Template: ComponentStory<typeof SearchBarComponent> = (args) => (
    <SearchBarComponent {...args} />
);

export const SearchBar = Template.bind({});
SearchBar.args = {};
