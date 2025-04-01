import { Stack, Typography, Button } from "@mui/material";
import Accordion from "./Accordion";
import { MathJax } from "better-react-mathjax";

function Problem({ equation, children, instruction, note }) {
    return (
        <>
            <Stack
                gap={3}
                px={2}
                py={1}
                sx={{ backgroundColor: "#e0f0ff", border: "1px solid #000" }}
            >
                <Typography>
                    <MathJax>{instruction}</MathJax>
                </Typography>
                <Typography fontSize={"1.2em"} textAlign={"center"}>
                    <MathJax>{equation}</MathJax>
                </Typography>
                <Typography>
                    <MathJax>{note}</MathJax>
                </Typography>
                <Stack>
                    <Accordion
                        question={
                            <Typography fontWeight={750}>Solution</Typography>
                        }
                        answer={children}
                        bgcolor_title="inherit"
                        color_title="kurai_ao"
                        bgcolor_text="inherit"
                        color_text="#000"
                        sx={{ boxShadow: 0, maxWidth: "100%" }}
                        nopadding
                        nohover
                        rawinput
                    />
                </Stack>
            </Stack>
        </>
    );
}

export default function DisplayProblem() {
    return (
        <Stack px={15}>
            <Problem equation={"\\[ \\lim_{x \\to a} f(x) = L \\]"}>
                <Stack>Hey jude</Stack>
            </Problem>
        </Stack>
    );
}
