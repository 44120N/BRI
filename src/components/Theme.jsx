import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from "@mui/material";

export default function Theme(props) {
    let kurai_ao_dark = "#0A2472";
    let kurai_ao_main = "#0A2472";
    let kurai_ao_light = "#3b508e";
    let primary_dark = "#1565c0";
    let primary_main = "#1976d2";
    let primary_light = "#42a5f5";
    let black_blue_dark = "#111344";
    let black_blue_main = "#151855";
    let black_blue_light = "#444677";
    let secondary_dark = "#00786d";
    let secondary_main = "#009688";
    let secondary_light = "#33aba0";
    let tertiary_dark = "#b72e2a";
    let tertiary_main = "#e53935";
    let tertiary_light = "#ea615d";
    let quaternary_dark = "#cc8000";
    let quaternary_main = "#ffa000";
    let quaternary_light = "#ffb333";

    let white_dark = "#a1b0c8";
    let white_main = "#c9dcfa";
    let white_light = "#d4e3fb";
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            primary: theme.palette.augmentColor({
                color: {
                    dark: primary_dark,
                    main: primary_main,
                    light: primary_light,
                },
                name: "primary",
            }),
            black_blue: theme.palette.augmentColor({
                color: {
                    dark: black_blue_dark,
                    main: black_blue_main,
                    light: black_blue_light,
                },
                name: "black_blue",
            }),
            kurai_ao: theme.palette.augmentColor({
                color: {
                    dark: kurai_ao_dark,
                    main: kurai_ao_main,
                    light: kurai_ao_light,
                },
                name: "kurai_ao",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    dark: secondary_dark,
                    main: secondary_main,
                    light: secondary_light,
                },
                name: "secondary",
            }),
            tertiary: theme.palette.augmentColor({
                color: {
                    dark: tertiary_dark,
                    main: tertiary_main,
                    light: tertiary_light,
                },
                name: "tertiary",
            }),
            quaternary: theme.palette.augmentColor({
                color: {
                    dark: quaternary_dark,
                    main: quaternary_main,
                    light: quaternary_light,
                },
                name: "quaternary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    dark: white_dark,
                    main: white_main,
                    light: white_light,
                },
                name: "white",
            }),
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            fontFamily: "Inter, DM Sans, sans-serif",
                            textAlign: {
                                xs: "justify",
                                sm: "justify",
                                md: "justify",
                                lg: "left",
                            },
                        }),
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "Inter, DM Sans, sans-serif",
                    },
                },
            },
        },
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
