import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Box,
    Stack,
    Grid2,
    Typography,
    Divider,
    useMediaQuery,
    Drawer,
    IconButton,
    Chip
} from "@mui/material";
import CourseCard from "../components/Card";
import CustomInput from "../form/CustomInput";
import CustomCheck from "../form/CustomCheck";
import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import exercises_data from "../data/exercise.json";

const exercises = exercises_data;

export default function ExerciseList() {
    const [search, setSearch] = useState("");
    const [query] = useSearchParams();
    const isMobile = useMediaQuery("(max-width:900px)");
    const [openDrawer, setOpenDrawer] = useState(false);

    if (query.size) {
        useEffect(() => {
            setSearch(query.get("search"));
        }, []);
    }

    const [subject, setSubject] = useState([]);
    const [level, setLevel] = useState([]);
    const [paid, setPaid] = useState([]);
    const [exercise_len, setExercise_len] = useState(0);

    const filterOptions = [
        {
            title: "Harga",
            state: paid,
            setState: setPaid,
            options: [
                { value: "FREE", label: "Gratis" },
                { value: "PAID", label: "Bayar" },
            ],
        },
        {
            title: "Level",
            state: level,
            setState: setLevel,
            options: [
                { value: "Beginner", label: "Pemula" },
                { value: "Intermediate", label: "Menengah" },
                { value: "Advanced", label: "Lanjutan" },
            ],
        },
        {
            title: "Subjek",
            state: subject,
            setState: setSubject,
            options: [
                { value: "MTK", label: "Matematika" },
                { value: "FIS", label: "Fisika" },
                { value: "KIM", label: "Kimia" },
                { value: "INF", label: "Informatika" },
                { value: "EKO", label: "Ekonomi" },
                { value: "AKUN", label: "Akuntansi" },
            ],
        },
    ];

    const filteredexercises = exercises.filter(
        (exercise) =>
            exercise.title.toLowerCase().includes(search.toLowerCase()) &&
            (subject.length === 0 || subject.includes(exercise.subject)) &&
            (paid.length === 0 ||
                (paid.includes("FREE") && exercise.Free) ||
                (paid.includes("PAID") && !exercise.Free)) &&
            (level.length === 0 || level.includes(exercise.level))
    );

    useEffect(()=>{
        setExercise_len(filteredexercises.length);
    }, [filteredexercises]);

    return (
        <>
            <Stack direction={'column'}>
                <Stack px={4} py={2} direction={'row'} gap={3} alignItems={'center'}>
                    <Typography fontSize={'2.5em'} color="primary" fontWeight={700}>
                        Exercise List
                    </Typography>
                    <Chip label={ <Typography fontSize="1.2em" fontFamily={"monospace"}>{exercise_len} results</Typography> } size="small" sx={{color:"#fff", backgroundColor: "#000", px:1, py:2}} />
                </Stack>
                <Grid2 container columns={4} border={'1px solid #000'} borderRight={'none'} mb={5}>
                    {!isMobile && (
                        <Grid2 size={1}
                            sx={{
                                height: "100%",
                                overflowY: "auto",
                                position:"sticky",
                                top:'15vh',
                            }}
                        >
                            <Stack
                                sx={{
                                    backgroundColor:"#fff",
                                    borderRight:"1px solid #000",
                                    borderBottom:'1px solid #000',
                                    zIndex:1000,
                                    maxHeight:"calc(100vh - 94px)",
                                    overflowY:'auto'
                                }}
                                px={4}
                                py={4}
                                gap={2}
                                id="filter"
                            >
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={0.6}
                                >
                                    <FilterListIcon />
                                    <Typography
                                        textAlign={{ xs: "center", sm: "justify" }}
                                        fontSize={{ xs: "1em", sm: "1.8em" }}
                                        color="secondary"
                                        fontWeight={600}
                                    >
                                        Filter
                                    </Typography>
                                </Stack>
                                <Divider
                                    sx={{ border: "1.5px solid #aaa", margin: 0 }}
                                />

                                {filterOptions.map((filter, index) => (
                                    <React.Fragment key={filter.title}>
                                        <Stack
                                            direction="column"
                                            justifyContent="center"
                                            px={2}
                                        >
                                            <Typography
                                                fontSize="1.2em"
                                                fontWeight={800}
                                            >
                                                {filter.title}
                                            </Typography>
                                            {filter.options.map((option) => (
                                                <CustomCheck
                                                    key={option.value}
                                                    val={filter.state}
                                                    setVal={filter.setState}
                                                    other_val={option.value}
                                                    label={option.label}
                                                />
                                            ))}
                                        </Stack>
                                        {index !== filterOptions.length - 1 && (
                                            <Divider
                                                sx={{
                                                    border: "1.5px solid #aaa",
                                                    margin: 0,
                                                }}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </Stack>
                        </Grid2>
                    )}

                    <Grid2 size={{xs:4,md:3}}>
                        <Box
                            sx={{
                                px:3,
                                py:4,
                            }}
                            id="exercise"
                        >
                            <Stack mb={4} direction="row" alignItems="center" gap={2}>
                                {/* Search Input */}
                                <Stack flexGrow={1}>
                                    <CustomInput
                                        type="text"
                                        required={true}
                                        name="search"
                                        value={search}
                                        color="#000"
                                        setValue={setSearch}
                                        startIcon={<SearchIcon />}
                                        placeholder="Cari Kursus Online"
                                    />
                                </Stack>

                                {/* Filter Button on Mobile */}
                                {isMobile && (
                                    <Button
                                        bgcolor="secondary.main"
                                        bdcolor={"#000"}
                                        startIcon={<FilterListIcon />}
                                        onClick={() => setOpenDrawer(true)}
                                        sx={{ px: 2, py: 1 }}
                                    >
                                        Filter
                                    </Button>
                                )}
                            </Stack>

                            {/* exercise Grid2 */}
                            <Grid2 container spacing={6} justifyContent="center">
                                {filteredexercises.map((exercise) => (
                                    <Grid2 key={exercise.id} maxWidth={300}>
                                        <CourseCard {...exercise} />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Stack>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                slotProps={{
                    backdrop:{
                        sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.618)",
                        }
                    }
                }}
            >
                <Stack
                    sx={{
                        width: {xs:"75vw", sm:"45vw"},
                        height: "100vh",
                        overflowY: "auto",
                        px: 2,
                        pt: 3,
                        backgroundColor: "white",
                        borderRight: "2px solid #000",
                    }}
                    gap={2}
                    id="drawer-filter"
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Typography
                            fontSize="1.8em"
                            color="secondary"
                            fontWeight={600}
                        >
                            Filter
                        </Typography>
                        <IconButton
                            sx={{ alignSelf: "flex-end" }}
                            onClick={() => setOpenDrawer(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Divider
                        sx={{ border: "1.5px solid #aaa", margin: 0 }}
                    />

                    {filterOptions.map((filter, index) => (
                        <React.Fragment key={filter.title}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                px={2}
                            >
                                <Typography
                                    fontSize="1.2em"
                                    fontWeight={800}
                                >
                                    {filter.title}
                                </Typography>
                                {filter.options.map((option) => (
                                    <CustomCheck
                                        key={option.value}
                                        val={filter.state}
                                        setVal={filter.setState}
                                        other_val={option.value}
                                        label={option.label}
                                    />
                                ))}
                            </Stack>
                            {index !== filterOptions.length - 1 && (
                                <Divider
                                    sx={{
                                        border: "1.5px solid #aaa",
                                        margin: 0,
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Stack>
            </Drawer>
        </>
    );
}
