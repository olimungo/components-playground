const defaultTheme = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`;
        }
        return `rgb(var(${variable}) / ${opacityValue})`;
    };
}

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '400px',
            xm: '500px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                primary: withOpacityValue('--primary'),
                'primary-focus': withOpacityValue('--primary-focus'),
                secondary: withOpacityValue('--secondary'),
                'secondary-focus': withOpacityValue('--secondary-focus'),
                success: withOpacityValue('--success'),
                'success-focus': withOpacityValue('--success-focus'),
                danger: withOpacityValue('--danger'),
                'danger-focus': withOpacityValue('--danger-focus'),
                warning: withOpacityValue('--warning'),
                'warning-focus': withOpacityValue('--warning-focus'),
                info: withOpacityValue('--info'),
                'info-focus': withOpacityValue('--info-focus'),
                light: withOpacityValue('--light'),
                'light-focus': withOpacityValue('--light-focus'),
                dark: withOpacityValue('--dark'),
                'dark-focus': withOpacityValue('--dark-focus'),
            },
        },
    },
    plugins: [],
};
