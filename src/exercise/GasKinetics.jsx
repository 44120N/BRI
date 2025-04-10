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
            <Problem
                title={'Soal 1'}
                equation={
                    "Suhu awal dari suatu gas dalam ruang tertutup adalah \\(T\\). \
                    Tiap partikel bergerak secara acak dengan kelajuan \\(100 \\frac{m}{s}\\). \
                    Kelajuan partikel-partikel itu saat suhunya \\(4T\\) adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{0} = T \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{0} = 100 \\frac{m}{s} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{1} = 4T \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v \\propto \\sqrt{T} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{T_{0}}}{\\sqrt{T_{1}}} \\\\ \
                                \\frac{100\\frac{m}{s}}{v} &= \\frac{\\sqrt{T}}{\\sqrt{4T}} \\\\ \
                                \\frac{100\\frac{m}{s}}{v} &= \\frac{1}{2} \\\\ \
                                v &= 200\\frac{m}{s} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics2() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 2'}
                equation={
                    "Sebuah tabung gas dengan volume tertetu berisi \
                    gak ideal dengan tekanan \\(P\\), akar nilai rata- rata \
                    kuadrat laju molekul gas disebut \\(V_{rms}\\). Jika \
                    ke dalam tabung itu dipompakan gas sejenis, \
                    sehingga tekanannya menjadi \\(2P\\) sedangkan \
                    suhunya tetap maka \\(V_{rms}\\) tersebut menjadi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{0} = P \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{0} = V_{rms} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{1} = 2P \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3P}{\\rho}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v \\propto \\sqrt{P} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{P_{0}}}{\\sqrt{P_{1}}} \\\\ \
                                \\frac{V_{rms}}{v} &= \\frac{\\sqrt{P}}{\\sqrt{2P}} \\\\ \
                                \\frac{V_{rms}}{v} &= \\frac{1}{\\sqrt{2}} \\\\ \
                                v &= \\sqrt{2} V_{rms} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics3() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 3'}
                equation={
                    "Sebuah tangki bervolume \\(2,4 \\space m^{3}\\) diisi dengan \
                    \\(2 \\space kg\\) gas. Tekanan dalam tangki \\(1,3 \\space atm\\). \
                    Kecepatan efektif molekul-molekul gas ini adalah...."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V = 2,4 \\space m^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m = 2 \\space kg \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P = 1,3 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3P}{\\rho}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\rho=\\frac{m}{V} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\rho=\\frac{m}{V}&=\\frac{2 \\space kg}{2,4 \\space m^{3}}=\\frac{5}{6} \\space \\frac{kg}{m^{3}} \\\\ \
                                v=\\sqrt{\\frac{3P}{\\rho}}&=\\sqrt{\\frac{3(1,3 \\space atm)}{\\frac{5}{6} \\space \\frac{kg}{m^{3}}}} \\\\ \
                                &=\\sqrt{(3,9 \\space atm) \\biggl(\\frac{6}{5} \\biggl) \\space \\frac{kg}{m^{3}}} \\\\ \
                                &= \\frac{1}{\\sqrt{2}} \\\\ \
                                &= \\sqrt{2} v_{ms} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}
