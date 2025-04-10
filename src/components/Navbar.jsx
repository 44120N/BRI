import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button as MuiButton,
    Stack,
    Icon,
    IconButton,
    Typography,
    Collapse,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

import CottageIcon from "@mui/icons-material/Cottage";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/MenuBook";
import RateReviewIcon from "@mui/icons-material/RateReview";

const menuItems = [
    { label: "Home", href: "/", icon: <CottageIcon /> },
    { label: "Blog", href: "/blog", icon: <RateReviewIcon /> },
    {
        label: "Study",
        dropdown: [
            {
                label: "Kursus Online",
                desc: "Belajar konsepsual di mana saja, kapan saja",
                icon: <SchoolIcon />,
                link: "/course",
            },
            {
                label: "Webinar & Workshop",
                desc: "Belajar melalui event premium",
                icon: <EventIcon />,
                badge: "Rekomendasi",
                link: "/comingsoon",
            },
            {
                label: "Latihan Soal",
                desc: "Belajar instan melalui latihan soal",
                icon: <BookIcon />,
                link: "/exercise",
            },
        ],
        icon: <SchoolIcon />,
    },
];

const NavButtons = ({ sx }) => (
    <Stack direction="row" gap={2} sx={sx}>
        {menuItems.map(({ label, href, dropdown }) =>
            dropdown ? (
                <Dropdown
                    key={label}
                    bgcolor="primary.main"
                    color="#fff"
                    bdcolor="#000"
                    items={dropdown}
                >
                    {label}
                </Dropdown>
            ) : (
                <MuiButton
                    key={label}
                    color="inherit"
                    component={Link}
                    to={href}
                    sx={{
                        textTransform: "capitalize",
                        "&:hover": { color: "quaternary.main" },
                    }}
                >
                    {label}
                </MuiButton>
            )
        )}
    </Stack>
);

const BottomNavButtons = ({ menuItems }) => (
    <Stack direction="row" gap={1}>
        {menuItems.map(({ label, href, dropdown, icon }) =>
            dropdown ? (
                <Dropdown
                    key={label}
                    bgcolor="primary.main"
                    color="#fff"
                    bdcolor="#000"
                    items={dropdown.map(({ label, link, icon }) => ({
                        label,
                        link,
                        icon,
                    }))}
                >
                    <Stack
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            p: 1,
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            textTransform: "uppercase",
                        }}
                        color="inherit"
                    >
                        {icon}
                        <Typography variant="caption">{label}</Typography>
                    </Stack>
                </Dropdown>
            ) : (
                <Button
                    key={label}
                    sx={{
                        display: { xs: "flex", sm: "none" },
                        p: 1,
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    color="inherit"
                    component={Link}
                    to={href}
                >
                    {icon}
                    <Typography variant="caption">{label}</Typography>
                </Button>
            )
        )}
    </Stack>
);

export default function Navbar() {
    return (
        <>
            {/* Top Navbar */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    borderBottom: "3px solid",
                    borderColor: "black_blue.main",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <IconButton
                        color="inherit"
                        sx={{
                            p: "1vh 1.5vh",
                            display: { xs: "flex", sm: "none" },
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon sx={{ height: "5vh" }}>
                            <img
                                src="/putih.svg"
                                style={{ maxHeight: "5vh" }}
                                alt="Rumah Ilmiah"
                            />
                        </Icon>
                    </IconButton>
                    <Stack
                        sx={{
                            display: { xs: "block", sm: "flex" },
                            flexGrow: { xs: 0, sm: 1 },
                        }}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {/* Logo */}
                        <IconButton
                            color="inherit"
                            sx={{
                                p: "1vh 1.5vh",
                                display: { xs: "none", sm: "flex" },
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Icon sx={{ height: "5vh" }}>
                                <img
                                    src="/putih.svg"
                                    style={{ maxHeight: "5vh" }}
                                    alt="Rumah Ilmiah"
                                />
                            </Icon>
                        </IconButton>

                        {/* Desktop Navigation */}
                        <NavButtons
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />

                        {/* Login Button */}
                        <MuiButton
                            color="inherit"
                            variant="outlined"
                            component={Link}
                            sx={{ textTransform: "capitalize", p: "1vh 1.5vh" }}
                            to="/login"
                        >
                            Masuk/Daftar Akun
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Bottom Navbar */}
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    bottom: 0,
                    top: "auto",
                    borderTop: "3px solid",
                    borderColor: "kurai_ao.main",
                    display: { xs: "flex", sm: "none" },
                    alignItems: "center",
                }}
            >
                <Toolbar>
                    <BottomNavButtons menuItems={menuItems} />
                </Toolbar>
            </AppBar>
        </>
    );
}

const NavButtons2 = ({ menuItems, sx }) => (
    <Stack direction="row" gap={2} sx={sx}>
        {menuItems.map(({ label, href, dropdown }) =>
            dropdown ? (
                <Dropdown
                    key={label}
                    bgcolor="primary.main"
                    color="#fff"
                    bdcolor="#000"
                    items={dropdown}
                >
                    {label}
                </Dropdown>
            ) : (
                <MuiButton
                    key={label}
                    color="inherit"
                    component={Link}
                    to={href}
                    sx={{
                        textTransform: "capitalize",
                        "&:hover": { color: "quaternary.main" },
                    }}
                >
                    {label}
                </MuiButton>
            )
        )}
    </Stack>
);

export function Navbar2({ course }) {
    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Silabus", href: `/course/${course}` },
    ];
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer
                active={mobileOpen}
                setActive={setMobileOpen}
                title="Menu"
                bgcolor="primary.main"
                color="#fff"
                bdcolor="#000"
                list={menuItems}
            />

            {/* Top Navbar */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    borderBottom: "3px solid",
                    borderColor: "black_blue.main",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Mobile Menu Button */}
                    <MuiButton
                        color="#fff"
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" }, p: 1 }}
                    >
                        <MenuIcon />
                    </MuiButton>

                    <Stack
                        sx={{
                            display: { xs: "block", sm: "flex" },
                            flexGrow: { xs: 0, sm: 1 },
                        }}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {/* Logo */}
                        <IconButton
                            color="inherit"
                            sx={{
                                p: "1vh 1.5vh",
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            <Icon sx={{ height: "5vh" }}>
                                <img
                                    src="/putih.svg"
                                    style={{ maxHeight: "5vh" }}
                                    alt="Rumah Ilmiah"
                                />
                            </Icon>
                        </IconButton>

                        {/* Desktop Navigation */}
                        <NavButtons2
                            menuItems={menuItems}
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />

                        {/* Login Button */}
                        <MuiButton
                            color="inherit"
                            variant="outlined"
                            component={Link}
                            sx={{ textTransform: "capitalize", p: "1vh 1.5vh" }}
                            to="/login"
                        >
                            Masuk/Daftar Akun
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export function Navbar3({ exercise }) {
    const menuItems = [
        { label: "Home", href: "/" },
        { label: "exercise", href: `/exercise` },
    ];
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    borderBottom: "3px solid",
                    borderColor: "black_blue.main",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Mobile Menu Button */}
                    <MuiButton
                        color="#fff"
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" }, p: 1 }}
                    >
                        <MenuIcon />
                    </MuiButton>

                    <Stack
                        sx={{
                            display: { xs: "block", sm: "flex" },
                            flexGrow: { xs: 0, sm: 1 },
                        }}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {/* Logo */}
                        <IconButton
                            color="inherit"
                            sx={{
                                p: "1vh 1.5vh",
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            <Icon sx={{ height: "5vh" }}>
                                <img
                                    src="/putih.svg"
                                    style={{ maxHeight: "5vh" }}
                                    alt="Rumah Ilmiah"
                                />
                            </Icon>
                        </IconButton>

                        {/* Desktop Navigation */}
                        <NavButtons2
                            menuItems={menuItems}
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />

                        {/* Login Button */}
                        <MuiButton
                            color="inherit"
                            variant="outlined"
                            component={Link}
                            sx={{ textTransform: "capitalize", p: "1vh 1.5vh" }}
                            to="/login"
                        >
                            Masuk/Daftar Akun
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}
