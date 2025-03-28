import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{md,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#b8bb26',
                secondary: '#fb4934',
                background: '#1d2021',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#ebdbb2',
                        a: {
                            color: '#b8bb26',
                            '&:hover': {
                                color: '#98971a',
                            },
                        },
                        h1: {
                            color: '#ebdbb2',
                        },
                        h2: {
                            color: '#ebdbb2',
                        },
                        h3: {
                            color: '#ebdbb2',
                        },
                        strong: {
                            color: '#ebdbb2',
                        },
                        code: {
                            color: '#ebdbb2',
                        },
                        pre: {
                            backgroundColor: '#282828',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

export default config; 