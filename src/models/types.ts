export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Theme =
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

export const BUTTON_SIZES = {
    xs: 'w-[5rem]',
    sm: 'w-[8rem]',
    md: 'w-[13rem]',
    lg: 'w-[21rem]',
    xl: 'w-[34rem]',
    auto: '',
};
