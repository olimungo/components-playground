import '../src/index.css';

export const parameters = {
    // options: {
    //     storySort: {
    //         method: 'alphabetical',
    //         includeName: true,
    //     },
    // },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? a[1].name.localeCompare(b[1].name)
                : a[1].id.localeCompare(b[1].id),
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
};
