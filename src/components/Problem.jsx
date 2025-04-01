import { Stack, Typography, Button } from "@mui/material";
import Accordion from "./Accordion";
import { MathJax } from "better-react-mathjax";

function Problem({ Equation }) {
    return (
        <>
            <Stack
                gap={3}
                px={2}
                py={1}
                sx={{ backgroundColor: "#e0f0ff", border: "1px solid #000" }}
            >
                <Typography>
                    <MathJax>
                        {
                            "Ketika \\( x \\) mendekati \\( a \\), nilai \\( f(x) \\) mendekati \\( L \\)"
                        }
                    </MathJax>
                </Typography>
                <Typography fontSize={"1.2em"} textAlign={"center"}>
                    <MathJax>{Equation}</MathJax>
                </Typography>
                <Typography>
                    <MathJax>
                        {
                            "dengan syarat \\(f(x)\\) sedekat mungkin dengan \\(L\\) untuk semua \\(x\\) yang cukup dekat dengan \\(a\\) dari sisi kiri dan kanan"
                        }
                    </MathJax>
                </Typography>
                <Stack>
                    <Accordion
                        question={<b>skibidi</b>}
                        answer={<i>skibidi</i>}
                        bgcolor_title="inherit"
                        color_title="kurai_ao"
                        bgcolor_text="#f0f0f0"
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
    return <Problem Equation={"\\[ \\lim_{x \\to a} f(x) = L \\]"} />;
}
