import {shadows, spacing, colors, sizes, fonts, animations} from "./theme";
import {Config} from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors,
            spacing,
            ...sizes,
            ...animations,
            ...fonts,
            ...shadows,
            gridTemplateColumns: {
                testimonial: '0.45fr 1fr',
                'testimonial-md': '0.75fr 1fr',
            },
            zIndex: {
                1: '1',
                2: '2',
                999: '999',
            },
        },
    },
    plugins: []
} satisfies Config;
