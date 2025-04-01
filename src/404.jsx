import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <link rel="stylesheet" href="./404.css" />
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
                sx={{ height: "100vh", display: { xs: "none", sm: "flex" } }}
                justifyContent="center"
                alignItems="start"
            >
                <Stack className=""></Stack>
            </Stack>
        </>
    );
}
