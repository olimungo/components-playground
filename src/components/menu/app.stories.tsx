import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, Header, MenuProps, Footer } from 'components';
import { menuItems } from './menu.stories';

function Shell(args: { menuProps: MenuProps }) {
    const { menuProps } = args;

    return (
        <>
            <Header />
            <Menu {...menuProps} />
            <Footer />
        </>
    );
}

export default {
    title: 'Playground/Layout/Shell',
    component: Shell,
    parameters: { controls: { sort: 'requiredFirst' } },
} as ComponentMeta<typeof Shell>;

const Template: ComponentStory<typeof Shell> = (args) => <Shell {...args} />;

export const Test1 = Template.bind({});
Test1.args = {
    menuProps: { menuItems },
};
