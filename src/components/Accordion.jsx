import React, { useState, useRef, useEffect } from "react";
import { Stack, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Accordion = ({
    question,
    answer,
    bgcolor_title = "#f0f0f0",
    bgcolor_text = "#fff",
    bdcolor = "#000",
    color_title = "#000",
    color_text = "#000",
    sx = {},
    nopaddinginline = false,
    nohover = false,
    rawinput = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                maxWidth: 600,
                border: `2px solid ${bdcolor}`,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: `5px 5px 0px ${bdcolor}`,
                mb: 2,
                backgroundColor: bgcolor_title,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                ...(nohover
                    ? {}
                    : {
                            "&:hover": { transform: "translate(5px, 5px)", boxShadow: "none" },
                            "&:active": { transform: "translate(2px, 2px)" },
                    }),
                ...sx, // Merged global sx styles
            }}
        >
            <Button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: nopaddinginline ? "2% 0" : "2% 3%",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    backgroundColor: bgcolor_title,
                    // borderBottom: isOpen ? `2px solid ${bdcolor}` : "0px",
                    // borderRadius: isOpen ? "0px" : "8px",
                    color: color_title,
                    cursor: "pointer",
                    outline: "none",
                    ...sx?.title, // Overrides title styles via sx prop
                }}
            >
                {rawinput ? (
                    question
                ) : (
                    <Typography color={color_title}>{question}</Typography>
                )}
                <Stack
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <Typography color={color_title}>
                        <KeyboardArrowDownIcon />
                    </Typography>
                </Stack>
            </Button>

            <Stack
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out, padding 0.2s ease",
                    background: bgcolor_text,
                    padding: isOpen ? "2vw" : "0 2vw",
                    ...sx?.text, // Overrides text styles via sx prop
                }}
            >
                <Stack gap={2}>
                    {rawinput ? (
                        answer
                    ) : Array.isArray(answer) ? (
                        answer.map((item, id) => (
                            <Stack key={id}>
                                <Link
                                    to={item.href || "#"}
                                    style={{ textDecoration: "none" }}
                                    sx={{ py: id < answer.length - 1 ? "1vh" : "0px" }}
                                >
                                    <Typography fontSize={"0.9rem"} margin={0} color={color_text}>
                                        {item.label}
                                    </Typography>
                                </Link>
                            </Stack>
                        ))
                    ) : (
                        <Typography fontSize={"0.9rem"} margin={0} color={color_text}>
                            {answer}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Accordion;
