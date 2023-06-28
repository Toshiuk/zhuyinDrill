import { extendTheme } from "@mui/joy";

const theme = extendTheme({
    "colorSchemes": {
        "light": {
            "palette": {
                "primary": {
                    "50": "#fafaf9",
                    "100": "#f5f5f4",
                    "200": "#e7e5e4",
                    "300": "#d6d3d1",
                    "400": "#a8a29e",
                    "500": "#78716c",
                    "600": "#57534e",
                    "700": "#44403c",
                    "800": "#292524",
                    "900": "#1c1917"
                },
                "neutral": {
                    "50": "#fff3e0",
                    "100": "#ffe0b2",
                    "200": "#ffcc80",
                    "300": "#ffb74d",
                    "400": "#ffa726",
                    "500": "#ff9800",
                    "600": "#fb8c00",
                    "700": "#f57c00",
                    "800": "#ef6c00",
                    "900": "#e65100"
                },
                "background": {
                    "body": "#e5b093"
                }
            }
        },
        "dark": {
            "palette": {
                "primary": {
                    "50": "#fff3e0",
                    "100": "#ffe0b2",
                    "200": "#ffcc80",
                    "300": "#ffb74d",
                    "400": "#ffa726",
                    "500": "#ff9800",
                    "600": "#fb8c00",
                    "700": "#f57c00",
                    "800": "#ef6c00",
                    "900": "#e65100"
                },
                "neutral": {
                    "50": "#fefce8",
                    "100": "#fef9c3",
                    "200": "#fef08a",
                    "300": "#fde047",
                    "400": "#facc15",
                    "500": "#eab308",
                    "600": "#ca8a04",
                    "700": "#a16207",
                    "800": "#854d0e",
                    "900": "#713f12"
                }
            }
        }
    }
});

export default theme;