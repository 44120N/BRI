import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from "@mui/material";

export default function Theme(props) {
    let kurai_ao = "#0A2472";
    let black_blue = "#151855";
    let secondary = "#009688";
    let tertiary = "#e53935";
    let quaternary = "#ffa000";

    let white = "#c9dcfa";
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            black_blue: theme.palette.augmentColor({
                color: {
                    main: black_blue,
                },
                name: "black_blue",
            }),
            kurai_ao: theme.palette.augmentColor({
                color: {
                    main: kurai_ao,
                },
                name: "kurai_ao",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    main: secondary,
                },
                name: "secondary",
            }),
            tertiary: theme.palette.augmentColor({
                color: {
                    main: tertiary,
                },
                name: "tertiary",
            }),
            quaternary: theme.palette.augmentColor({
                color: {
                    main: quaternary,
                },
                name: "quaternary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    main: white,
                },
                name: "white",
            }),
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: ({theme}) => theme.unstable_sx({
                        fontFamily: "Inter, DM Sans, sans-serif",
                        textAlign: {xs:"justify", sm:"justify", md:"justify", lg:"left"},
                    })
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "Inter, DM Sans, sans-serif",
                    }
                }
            },
        }
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
