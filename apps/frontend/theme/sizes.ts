import type { ThemeConfig } from 'tailwindcss/types/config';

export const sizes: Partial<
  Pick<ThemeConfig, 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'>
> = {
  minHeight: {
    100: '25rem', // 400px
    75: '18.75rem', // 300px
  },
};
