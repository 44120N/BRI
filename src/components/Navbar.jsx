import React, { useState } from "react";
import { AppBar, Toolbar, Button as MuiButton, Stack, Icon, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/MenuBook";

const menuItems = [
    { label: "Home", href: "/BRI/" },
    { label: "Blog", href: "/BRI/blog" },
    {
        label: "Study",
        dropdown: [
            { label: "Kursus Online", desc: "Belajar di mana saja, kapan saja", icon: <SchoolIcon />, link: "/BRI/course" },
            { label: "Webinar & Workshop", desc: "Belajar melalui event premium", icon: <EventIcon />, badge: "Rekomendasi", link: "/BRI/webinar" },
            { label: "Alur Pembelajaran", desc: "Belajar secara terstruktur dengan silabus", icon: <BookIcon />, link: "/BRI/alur" },
        ],
    },
];

const NavButtons = ({ sx }) => (
    <Stack direction="row" gap={2} sx={sx}>
        {menuItems.map(({ label, href, dropdown }) =>
            dropdown ? (
                <Dropdown key={label} bgcolor="primary.main" color="#fff" bdcolor="#000" items={dropdown}>
                    {label}
                </Dropdown>
            ) : (
                <MuiButton key={label} color="inherit" component={Link} to={href} sx={{ textTransform: "capitalize", "&:hover": { color: "quaternary.main" } }}>
                    {label}
                </MuiButton>
            )
        )}
    </Stack>
);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false); // For mobile dropdown

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer active={mobileOpen} setActive={setMobileOpen} title="Menu" bgcolor="primary.main" color="#fff" bdcolor="#000" list={menuItems}/>

            {/* Top Navbar */}
            <AppBar position="sticky" sx={{ bgcolor: "primary.main", boxShadow: "none", borderBottom: "3px solid", borderColor: "black_blue.main", color: "#fff" }}>
                <Toolbar sx={{justifyContent:"space-between"}}>
                    {/* Mobile Menu Button */}
                    <MuiButton color="#fff" bgcolor="primary.main" bdcolor="#000" onClick={() => setMobileOpen(true)} sx={{ display: { xs: "flex", sm: "none" }, p: 1 }}>
                        <MenuIcon />
                    </MuiButton>

                    <Stack sx={{ display: { xs: "block", sm: "flex" }, flexGrow: {xs:0, sm:1} }} direction="row" justifyContent="space-around" alignItems="center">
                        {/* Logo */}
                        <IconButton color="inherit" sx={{ p: "1vh 1.5vh", display: { xs: "none", sm: "block" }, }} >
                            <Icon sx={{ height: "5vh" }}>
                                <img src="/BRI/putih.svg" style={{ maxHeight: "5vh" }} alt="Rumah Ilmiah" />
                            </Icon>
                        </IconButton>

                        {/* Desktop Navigation */}
                        <NavButtons sx={{ display: { xs: "none", sm: "block" } }} />

                        {/* Login Button */}
                        <MuiButton color="inherit" variant="outlined" component={Link} sx={{ textTransform: "capitalize", p: "1vh 1.5vh" }} to="/BRI/login">
                            Masuk/Daftar Akun
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}
