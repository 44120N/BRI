import { Stack, Typography, Button } from "@mui/material";
import Accordion from "./Accordion";
import { MathJax } from "better-react-mathjax";

export default function Problem({ title, equation, children, instruction, note, accordion_text="Solution" }) {
    return (
        <>
            <Typography fontWeight={600} fontSize={'1.2em'}>{title}</Typography>
            <Stack
                px={2}
                py={1}
                sx={{ backgroundColor: "#e0f0ff", border: "1px solid #000" }}
            >
                {instruction && (
                    <Typography fontSize={"1em"}>
                        <MathJax>{instruction}</MathJax>
                    </Typography>
                )}
                <Typography fontSize={"1.2em"} textAlign={"center"}>
                    <MathJax>{equation}</MathJax>
                </Typography>
                {note && (
                    <Typography fontSize={"1em"} fontWeight={600}>
                        <MathJax>{note}</MathJax>
                    </Typography>
                )}
                <Stack>
                    <Accordion
                        question={
                            <Typography fontWeight={750}>{accordion_text}</Typography>
                        }
                        answer={children}
                        bgcolor_title="inherit"
                        color_title="kurai_ao"
                        bgcolor_text="inherit"
                        color_text="#000"
                        nopadding
                        nohover
                        rawinput
                        sx={{
                            boxShadow: 0, maxWidth: "100%", border:"none",
                            "title":{
                                padding:0,
                                "&:hover":{
                                    border:"none",
                                },
                                "&:active":{
                                    border:"none",
                                }
                            },
                            "text":{
                                padding:0
                            }
                        }}
                    />
                </Stack>
            </Stack>
        </>
    );
}
