import { Box, Divider, Stack, Typography, Container } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { CustomRawTable } from "../components/Tabel";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Tiles from "../components/Tiles";
import Dropdown from "../components/Dropdown";
import Problem from "../components/Problem";

import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/MenuBook";

//colspan || 1
const tableData = [
    //table row
    [
        {
            content: (
                <MathJax>
                    [\\frac{1}{2}\]
                </MathJax>
            ),
            colspan: 2,
            rowspan: 3,
        }, //table column
        { content: "10", colspan: 2, rowspan: 3 }, //table column
        { content: "12", colspan: 2, rowspan: 3 }, //table column
    ], //tableData[0] = the table head
    [
        {
            content: (
                <MathJax>
                    [\\frac{4}
                    {5}\]
                </MathJax>
            ),
            colspan: 2,
            rowspan: 3,
        }, //table column
        { content: "9", colspan: 2, rowspan: 3 }, //table column
        { content: "11", colspan: 2, rowspan: 3 }, //table column
    ], //tableData[1] = the table body
];
// cannot colspan and rowspan
const tableData1 = [
    ["x", "0,9", "0,99"],
    ["0,999", "1", "1,1"],
    ["1,01", "1,001", "202002"],
];
const tableData2 = [
    [<>Test</>, "1,9", "1,99", "1,999", "...", "2,1", "2,01", "2,001"],
];

export default function Testing() {
    const slides = [
        {
            bg: "/BRI/galaxy1.jpg",
            title: "Title 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: "primary",
            color: "#fff",
        },
        {
            bg: "/BRI/cave2.jpg",
            title: "Title 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: "secondary",
            color: "#fff",
        },
        {
            bg: "/BRI/home3.jpg",
            title: "Title 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: "tertiary",
            color: "#fff",
        },
        {
            bg: "/BRI/ocean4.jpg",
            title: "Title 4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: "quaternary",
            color: "#fff",
        },
    ];

    const dropdown = [
        {
            label: "Kursus Online",
            desc: "Belajar di mana saja, kapan saja",
            icon: <SchoolIcon />,
            link: "/kursus",
        },
        {
            label: "Webinar & Workshop",
            desc: "Belajar melalui event premium",
            icon: <EventIcon />,
            badge: "Rekomendasi",
            link: "/webinar",
        },
        {
            label: "Alur Pembelajaran",
            desc: "Belajar secara terstruktur dengan silabus",
            icon: <BookIcon />,
            link: "/alur",
        },
    ];

    return (
        <>
            <Stack direction={"column"}>
                <Carousel slides={slides} time={5000} />
                <Stack
                    id={"intro"}
                    sx={{
                        width: "100%",
                        height: "100%",
                        padding: "5vh 0",
                    }}
                    className="radialbg"
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Stack
                        sx={{
                            border: "3px solid black",
                            padding: "2% 3%",
                            borderRadius: "32px",
                            backgroundColor: "#fff",
                            maxWidth: "80vw",
                        }}
                        direction={"column"}
                        gap={3}
                    >
                        <Stack direction={"column"} gap={1}>
                            <Typography
                                variant="h1"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{ xs: "3em", sm: "6em" }}
                                color="primary"
                            >
                                Learn beyond limits
                            </Typography>
                            <Typography
                                variant="p"
                                textAlign={{ xs: "center", sm: "left" }}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                            >
                                Rumah Ilmiah provides a comprehensive stream of
                                knowledge that is easy to access, anytime,
                                anywhere.
                            </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: { xs: "center", sm: "end" } }}>
                            <Button
                                color={"#fff"}
                                bgcolor={"primary.main"}
                                bdcolor={"#000"}
                                sx={{ width: "8em", height: "3.5em", p: 2 }}
                            >
                                More Info
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack id={"content"} gap={{ xs: 2, sm: 0 }}>
                    <Stack
                        direction={"column"}
                        gap={2}
                        sx={{
                            padding: "2% 3%",
                        }}
                        justifyContent={"center"}
                    >
                        <Stack>
                            <Stack
                                direction={"column"}
                                alignItems={{ xs: "center", sm: "flex-start" }}
                            >
                                <Stack
                                    className="col-auto"
                                    direction={"column"}
                                    alignItems={"flex-start"}
                                    sx={{ width: "fit-content" }}
                                >
                                    <Typography
                                        variant="h2"
                                        textAlign={{
                                            xs: "center",
                                            sm: "justify",
                                        }}
                                        component={"h1"}
                                        fontSize={{ xs: "3em", sm: "4.5em" }}
                                        color="primary"
                                    >
                                        Title
                                    </Typography>
                                    <Divider
                                        sx={{
                                            borderWidth: ".3vh",
                                            width: "100%",
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography
                            variant="p"
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{ xs: ".7em", sm: "1em" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque corrupti voluptate laboriosam iusto
                            saepe laborum et, iure dolores quibusdam ad est non
                            fuga quasi quas, blanditiis, culpa sunt asperiores
                            magni. Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Obcaecati nihil animi fugit
                            incidunt architecto quod cupiditate facere pariatur
                            porro odio, laudantium voluptas dolorem, atque
                            molestiae earum tempore, necessitatibus quia a!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque corrupti voluptate laboriosam iusto
                            saepe laborum et, iure dolores quibusdam ad est non
                            fuga quasi quas, blanditiis, culpa sunt asperiores
                            magni.
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={1}
                        sx={{
                            padding: "2% 3%",
                        }}
                        justifyContent={"center"}
                    >
                        <Stack
                            direction={"column"}
                            alignItems={{ xs: "center", sm: "flex-start" }}
                        >
                            <Stack
                                className="col-auto"
                                direction={"column"}
                                alignItems={"flex-start"}
                                sx={{ width: "fit-content" }}
                            >
                                <Typography
                                    variant="h3"
                                    textAlign={{ xs: "center", sm: "justify" }}
                                    component={"h1"}
                                    fontSize={{ xs: "2.5em", sm: "3.5em" }}
                                    color="secondary"
                                    sx={{
                                        width: "fit-content",
                                    }}
                                >
                                    Subtitle
                                </Typography>
                                <Divider
                                    sx={{ borderWidth: ".3vh", width: "100%" }}
                                />
                            </Stack>
                        </Stack>
                        <Typography
                            variant="p"
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{ xs: ".7em", sm: "1em" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque corrupti voluptate laboriosam iusto
                            saepe laborum et, iure dolores quibusdam ad est non
                            fuga quasi quas, blanditiis, culpa sunt asperiores
                            magni. Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Obcaecati nihil animi fugit
                            incidunt architecto quod cupiditate facere pariatur
                            porro odio, laudantium voluptas dolorem, atque
                            molestiae earum tempore, necessitatibus quia a!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque corrupti voluptate laboriosam iusto
                            saepe laborum et, iure dolores quibusdam ad est non
                            fuga quasi quas, blanditiis, culpa sunt asperiores
                            magni.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack id={"accordion"}>
                    <Stack sx={{ padding: "2% 3%" }} gap={2}>
                        <Stack>
                            <Typography
                                variant="h2"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{ xs: "3em", sm: "4.5em" }}
                                color="primary"
                            >
                                Question
                            </Typography>
                            <Divider sx={{ borderWidth: ".3vh" }} />
                        </Stack>
                        <Stack gap={2}>
                            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Accordion
                                        question={"What is Rumah Ilmiah"}
                                        answer={
                                            "Rumah Ilmiah is the best place who seek knowledge and science"
                                        }
                                        bgcolor_title={"primary.main"}
                                        color_title={"#fff"}
                                        bgcolor_text={"#fff"}
                                        color_text={"primary"}
                                        bdcolor={"#000"}
                                    />
                                </Stack>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Accordion
                                        question={"What is Rumah Ilmiah"}
                                        answer={
                                            "Rumah Ilmiah is the best place who seek knowledge and science"
                                        }
                                        bgcolor_title={"secondary.main"}
                                        color_title={"#fff"}
                                        bgcolor_text={"#fff"}
                                        color_text={"secondary"}
                                        bdcolor={"#000"}
                                    />
                                </Stack>
                            </Stack>
                            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Accordion
                                        question={"What is Rumah Ilmiah"}
                                        answer={
                                            "Rumah Ilmiah is the best place who seek knowledge and science"
                                        }
                                        bgcolor_title={"tertiary.main"}
                                        color_title={"#fff"}
                                        bgcolor_text={"#fff"}
                                        color_text={"tertiary"}
                                        bdcolor={"#000"}
                                    />
                                </Stack>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Accordion
                                        question={"What is Rumah Ilmiah"}
                                        answer={
                                            "Rumah Ilmiah is the best place who seek knowledge and science"
                                        }
                                        bgcolor_title={"quaternary.main"}
                                        color_title={"#fff"}
                                        bgcolor_text={"#fff"}
                                        color_text={"quaternary"}
                                        bdcolor={"#000"}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack id={"tiles"}>
                    <Stack sx={{ padding: "2% 3%" }} gap={2}>
                        <Stack>
                            <Typography
                                variant="h2"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{ xs: "3em", sm: "4.5em" }}
                                color="primary"
                            >
                                Overview
                            </Typography>
                            <Divider sx={{ borderWidth: ".3vh" }} />
                        </Stack>
                        <Stack gap={2}>
                            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Tiles
                                        bg={"/BRI/galaxy1.jpg"}
                                        bgcolor={"primary.main"}
                                        bdcolor={"#000"}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.9rem",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            Galaxy
                                        </Typography>
                                    </Tiles>
                                </Stack>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Tiles
                                        bg={"/BRI/cave2.jpg"}
                                        bgcolor={"secondary.main"}
                                        bdcolor={"#000"}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.9rem",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            Cave
                                        </Typography>
                                    </Tiles>
                                </Stack>
                            </Stack>
                            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Tiles
                                        bg={"/BRI/home3.jpg"}
                                        bgcolor={"tertiary.main"}
                                        bdcolor={"#000"}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.9rem",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            Home
                                        </Typography>
                                    </Tiles>
                                </Stack>
                                <Stack
                                    className="col"
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Tiles
                                        bg={"/BRI/ocean4.jpg"}
                                        bgcolor={"quaternary.main"}
                                        bdcolor={"#000"}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.9rem",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            Ocean
                                        </Typography>
                                    </Tiles>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    mt={"20vh"}
                    mb={"40vh"}
                >
                    <Dropdown
                        bgcolor={"primary.main"}
                        color={"#fff"}
                        bdcolor={"#000"}
                        items={dropdown}
                        sx={{ "&:hover": {} }}
                        MainBorder
                    >
                        Study
                    </Dropdown>
                </Stack>
                <Stack sx={{ padding: "2% 3%" }} gap={2}>
                    <Problem
                        title="Contoh"
                        equation={
                            "\\[ \\lim_{x \\to 1} \\frac{x^{2}-1}{x-1} \\]"
                        }
                        instruction={"Perkirakan nilai limit berikut"}
                        accordion_text="Pembahasan"
                    >
                        <Stack
                            direction={"row"}
                            gap={3}
                            flexWrap={"wrap"}
                            justifyContent={"space-around"}
                            alignItems={"center"}
                        >
                            <Stack>
                                <Typography>Pendekatan dari kiri:</Typography>
                                <Typography>
                                    <MathJax>{"\\( f(0,9) = 1,9 \\)"}</MathJax>
                                </Typography>
                                <Typography>
                                    <MathJax>
                                        {"\\( f(0,99) = 1,99 \\)"}
                                    </MathJax>
                                </Typography>
                                <Typography>
                                    <MathJax>
                                        {"\\( f(0,999) = 1,999 \\)"}
                                    </MathJax>
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography>Pendekatan dari kanan:</Typography>
                                <Typography>
                                    <MathJax>{"\\( f(1,1) = 2,1 \\)"}</MathJax>
                                </Typography>
                                <Typography>
                                    <MathJax>
                                        {"\\( f(1,01) = 2,01 \\)"}
                                    </MathJax>
                                </Typography>
                                <Typography>
                                    <MathJax>
                                        {"\\( f(1,001) = 2,001 \\)"}
                                    </MathJax>
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {
                                        "Dapat disimpulkan bahwa nilai \\(x\\) mendekati nilai \\(2\\) dari sisi kiri maupun sisi kanan. Maka dari itu:"
                                    }
                                </MathJax>
                            </Typography>
                            <Typography
                                fontSize={"1.2em"}
                                textAlign={"center"}
                                color="kurai_ao.main"
                            >
                                <MathJax>
                                    {
                                        "\\[ \\lim_{x \\to 1} \\frac{x^{2}-1}{x-1} = 2 \\]"
                                    }
                                </MathJax>
                            </Typography>
                            <CustomRawTable
                                content={tableData}
                                sx={{
                                    table: {
                                        width: "50%",
                                        mx: "auto",
                                    },
                                }}
                            />
                        </Stack>
                    </Problem>
                </Stack>
            </Stack>
        </>
    );
}
