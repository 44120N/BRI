import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
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
                    Tiap partikel bergerak secara acak dengan kelajuan \\(100 \\space \\frac{m}{s}\\). \
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
                            {"\\( v_{0} = 100 \\space \\frac{m}{s} \\)"}
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
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{T_{0}}}{\\sqrt{T_{1}}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{\\sqrt{T}}{\\sqrt{4T}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{1}{2} \\\\[10pt] \
                                v &= 200 \\space \\frac{m}{s} \
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
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{P_{0}}}{\\sqrt{P_{1}}} \\\\[10pt] \
                                \\frac{V_{rms}}{v} &= \\frac{\\sqrt{P}}{\\sqrt{2P}} \\\\[10pt] \
                                \\frac{V_{rms}}{v} &= \\frac{1}{\\sqrt{2}} \\\\[10pt] \
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
                    Kecepatan efektif molekul-molekul gas ini adalah ..."
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
                                \\rho=\\frac{m}{V}&=\\frac{2 \\space kg}{2,4 \\space m^{3}}=\\frac{5}{6} \\space \\frac{kg}{m^{3}} \\\\[10pt] \
                                v=\\sqrt{\\frac{3P}{\\rho}}&=\\sqrt{\\frac{3(1,3 \\space atm)}{\\frac{5}{6} \\space \\frac{kg}{m^{3}}}} \\\\[10pt] \
                                &=\\sqrt{(3,9 \\cdot 1,01 \\cdot 10^{5} \\space Pa) \\biggl(\\frac{6}{5} \\biggl) \\space \\frac{kg}{m^{3}}} \\\\[10pt] \
                                &= \\sqrt{472680 \\space \\frac{m^{2}}{s^{2}}} \\\\[10pt] \
                                &= 687,5172 \\frac{m}{s} \\\\[10pt] \
                                &\\thickapprox 687,52 \\frac{m}{s}\
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics4() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 4'}
                equation={
                    "Sebuah ban sepeda memiliki volume = \\(100 \\space cm^{3}\\). \
                    Tekanan awal diban sepeda = \\(0,5 \\space atm\\). \
                    Ban tersebut dipompa dengan suatu pompa yang volumenya \
                    = \\(50 \\space cm^{3}\\). Tekanan udara luar \
                    = \\(78 \\space cmHg\\) dan temperatur tidak berubah. \
                    Tekanan ban sepeda setelah dipompa sebanyak \\(4\\) kali adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{b} = 100 \\space cm^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{b} = 0,5 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{p} = 50 \\space cm^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{p} = 78 \\space cmHg \\thickapprox 1 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ PV = \\sum PV \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ P_{n} = \\frac{P_{n-1} V_{b} + P_{p} V_{p}}{V_{b}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack gap={3}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Stack>
                        <Typography>Pompa ke-1</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{1} = \\frac{P_{b}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(0,5)(100)+(1)(50)}{100}\\space atm = 1 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-2</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{2} = \\frac{P_{1}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1)(100)+(1)(50)}{100}\\space atm = 1,5 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-3</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{3} = \\frac{P_{2}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1,5)(100)+(1)(50)}{100}\\space atm = 2 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-4</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{4} = \\frac{P_{3}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1,5)(100)+(1)(50)}{100}\\space atm = 2,5 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics5() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 5'}
                equation={
                    "Sejumlah gas ideal bertekanan \\(\\rho\\) \
                    dipanaskan dari suhu \\(27^{\\circ}C\\) menjadi \\(54^{\\circ}C\\). \
                    Jika volumenya naik menjadi dua kali \
                    volume semula tekanannya akan menjadi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{0} = \\rho \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{0} = 27^{\\circ}C \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{1} = 54^{\\circ}C \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{1} = 2V_{0} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\frac{P_{1}V_{1}}{T_{1}}=\\frac{P_{2}V_{2}}{T_{2}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack gap={3}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{P_{0}V_{0}}{T_{0}}&=\\frac{P_{1}V_{1}}{T_{1}} \\\\[10pt] \
                                \\frac{\\rho V_{0}}{27^{\\circ}C}&=\\frac{P (2V_{0})}{54^{\\circ}C} \\\\[10pt] \
                                P &= \\frac{\\rho V_{0}}{27^{\\circ}C} \\space \\frac{54^{\\circ}C}{2V_{0}} \\\\[10pt] \
                                P &= \\rho \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics6() {
    const item = [
        "Berbanding lurus dengan energi kinetik rata-rata partikel.",
        "Berbanding terbalik dengan volume gas dalam ruang.",
        "Berbanding lurus dengan jumlah partikel gas.",
        "Berbanding terbalik dengan kuadrat kecepatan partikel gas."
    ]
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 6'}
                equation={
                    <>
                        <Typography fontSize={'1em'}>
                            Menurut teori kinetik gas, tekanan gas dalam ruang tertutup:
                        </Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.map((listItem, listIndex) => (
                                <Grid2 xs={3} sm={3} key={listIndex}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Typography sx={{ color: item.color||"primary.main", fontSize: "1em" }}>{listIndex+1}.&nbsp;</Typography>
                                        <Typography 
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {listItem}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>Periksa pernyataan berikut:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P \\propto E_{k} \\dots (1) \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P \\propto \\frac{1}{V} \\dots (2) \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P \\propto n \\dots (3) \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P \\propto \\frac{1}{v^{2}} \\dots (1) \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\frac{E_{k}}=\\frac{3}{2}PV \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack gap={3}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{P_{0}V_{0}}{T_{0}}&=\\frac{P_{1}V_{1}}{T_{1}} \\\\[10pt] \
                                \\frac{\\rho V_{0}}{27^{\\circ}C}&=\\frac{P (2V_{0})}{54^{\\circ}C} \\\\[10pt] \
                                P &= \\frac{\\rho V_{0}}{27^{\\circ}C} \\space \\frac{54^{\\circ}C}{2V_{0}} \\\\[10pt] \
                                P &= \\rho \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}
