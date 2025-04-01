import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./404.css";

export default function PageNotFound() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize cursor position (-0.5 to 0.5)
            const x = (e.clientX / window.innerWidth - 0.5).toFixed(2);
            const y = (e.clientY / window.innerHeight - 0.5).toFixed(2);

            document.documentElement.style.setProperty(
                "--parallax_mountainbg-x",
                x
            );
            document.documentElement.style.setProperty(
                "--parallax_mountainbg-y",
                y
            );
            document.documentElement.style.setProperty(
                "--parallax_mountainfg-x",
                x * 2
            );
            document.documentElement.style.setProperty(
                "--parallax_mountainfg-y",
                y * 2
            );
            document.documentElement.style.setProperty(
                "--parallax_clouds-x",
                x * 3
            );
            document.documentElement.style.setProperty(
                "--parallax_clouds-y",
                y * -3
            );
            document.documentElement.style.setProperty(
                "--parallax_sun-x",
                x * 0.5
            );
            document.documentElement.style.setProperty(
                "--parallax_sun-y",
                y * -1.5
            );
            document.documentElement.style.setProperty(
                "--parallax_button-x",
                x * 0.5
            );
            document.documentElement.style.setProperty(
                "--parallax_button-y",
                y * -1.5
            );
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <Stack
                sx={{
                    height: "100vh",
                    display: { xs: "flex", sm: "none" },
                    backgroundColor: "#b60801",
                    color: "#fef0da",
                    px: 5,
                }}
                justifyContent="center"
                alignItems="start"
            >
                <Typography variant="h1">404.</Typography>
                <Typography>Page Not Found</Typography>
                <Typography>
                    Welcome, lost traveler. The page that you are looking for
                    does not exist.
                </Typography>
                <Button
                    sx={{
                        height: "1.5rem",
                        bgcolor: "#fef0da",
                    }}
                >
                    <Link
                        to="/BRI/"
                        style={{
                            textDecoration: "none",
                            color: "#b60801",
                            fontWeight: "900",
                        }}
                    >
                        Go Home &rArr;
                    </Link>
                </Button>
            </Stack>
            <Stack
                sx={{
                    height: "100vh",
                    display: { xs: "none", sm: "flex" },
                    background:
                        "radial-gradient(circle, rgba(182,8,1,1) 0%, rgba(219,126,112,1) 50%, rgba(254,240,218,1) 100%)",
                }}
                justifyContent="center"
                alignItems="start"
            >
                <Stack className="parallax__sun"></Stack>
                <Stack className="parallax__mountainbg"></Stack>
                <Stack className="parallax__mountainfg"></Stack>
                <Stack className="parallax__clouds"></Stack>
                <Stack
                    sx={{
                        width: "100vw",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Button
                        sx={{
                            height: "1.5rem",
                            bgcolor: "#fef0da",
                            width: "fit-content",
                        }}
                    >
                        <Link
                            to="/BRI/"
                            style={{
                                textDecoration: "none",
                                color: "#b60801",
                                fontWeight: "900",
                            }}
                        >
                            Go Home &rArr;
                        </Link>
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}
