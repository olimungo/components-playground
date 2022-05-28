export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

export const TEXT_SIZES = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    auto: 'text-md',
};

export const BACKGROUND_STYLES = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
    light: 'bg-light',
    dark: 'bg-dark',
};

export const TEXT_STYLES = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
    light: 'text-light',
    dark: 'text-dark',
};

export const HIGHLIGHT_STYLES = {
    primary: 'hover:bg-primary',
    secondary: 'hover:bg-secondary',
    success: 'hover:bg-success',
    danger: 'hover:bg-danger',
    warning: 'hover:bg-warning',
    info: 'hover:bg-info',
    light: 'hover:bg-light',
    dark: 'hover:bg-dark',
};

export const BORDER_STYLES = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    danger: 'border-danger',
    warning: 'border-warning',
    info: 'border-info',
    light: 'border-light',
    dark: 'border-dark',
};
