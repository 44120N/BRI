import React, { useState } from "react";
import { AppBar, Toolbar, Button as MuiButton, Stack, Icon, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const NavButtons = ({ menuItems, sx }) => (
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

export default function Navbar({course}) {
    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Silabus", href: `/course/${course}` },
    ];
    const [mobileOpen, setMobileOpen] = useState(false);

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
                                <img src="/putih.svg" style={{ maxHeight: "5vh" }} alt="Rumah Ilmiah" />
                            </Icon>
                        </IconButton>

                        {/* Desktop Navigation */}
                        <NavButtons menuItems={menuItems} sx={{ display: { xs: "none", sm: "block" } }} />

                        {/* Login Button */}
                        <MuiButton color="inherit" variant="outlined" component={Link} sx={{ textTransform: "capitalize", p: "1vh 1.5vh" }} to="/login">
                            Masuk/Daftar Akun
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}
