import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        common: {
            black: "#ffc107",
            white: "#000",
        },
        secondary: {
            main: '#631976',
        },
    },
    typography: {
        fontFamily: " roboto",
    },
})