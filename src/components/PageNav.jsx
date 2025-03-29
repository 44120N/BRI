import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Button from "./Button";

export default function PageNav({ pages, courseName }) {
    const navigate = useNavigate();
    const location = useLocation();
    const index = pages.indexOf(location.pathname);

    const progressKey = `progress_${courseName}`;
    const handleNavigation = (newIndex) => {
        localStorage.setItem(progressKey, newIndex);
        navigate(pages[newIndex]);
    };

    return (
        <Stack direction={'row'} sx={{backgroundColor: 'kurai_ao.main'}} justifyContent="space-around" alignItems="center" p={2}>
            <Button disabled={index === 0} sx={{width:"4em", px:2, py:1}} bgcolor={'primary.main'} bdcolor={'#000'} onClick={() => handleNavigation(index - 1)}>
                Back
            </Button>
            <Typography color="#fff">{index + 1} / {pages.length}</Typography>
            <Button disabled={index === pages.length - 1} sx={{width:"4em", px:2, py:1}} bgcolor={'primary.main'} bdcolor={'#000'} onClick={() => handleNavigation(index + 1)}>
                Next
            </Button>
        </Stack>
    );
}
