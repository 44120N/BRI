import React from "react";
import { Stack, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../components/Problem";

export function GasKinetics1() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Typography>
                <MathJax>
                    {}
                </MathJax>
            </Typography>
            <Problem
                title={'Soal 1'}
                equation={
                    "Suhu awal dari suatu gas dalam ruang tertutup adalah \\(T\\). \
                    Tiap partikel bergerak secara acak dengan kelajuan \\(100 \\frac{m}{s}\\). \
                    Kelajuan partikel-partikel itu saat suhunya \\(4T\\) adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
            </Problem>
        </Stack>
    )
}