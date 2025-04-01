import React, { useState, useRef, useEffect } from "react";
import { Stack, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Accordion = ({
    question,
    answer,
    bgcolor_title,
    bgcolor_text,
    bdcolor,
    color_title,
    color_text,
    sx,
    nopaddinginline,
    nopadding,
    nohover,
    rawinput,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
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
                backgroundColor: `${bgcolor_title}`,
                ...(nohover
                    ? {}
                    : {
                          "&:hover": {
                              transform: "translate(5px, 5px)",
                              boxShadow: "none",
                          },
                          "&:active": {
                              transform: "translate(2px, 2px)",
                          },
                      }),
                ...sx,
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
                    padding: nopaddinginline || nopadding ? "2% 0" : "2% 3%",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    backgroundColor: `${bgcolor_title}`,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    borderBottom: isOpen ? `2px solid ${bdcolor}` : "0px",
                    borderRadius: isOpen ? "0px" : "8px",
                    color: `${color_title}`,
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
                    <KeyboardArrowDownIcon color={color_title} />
                </Stack>
            </Button>
            <Stack
                ref={contentRef}
                style={{
                    height: isOpen ? `${contentHeight}px` : "0",
                    overflow: "hidden",
                    transition: "height ease-in-out",
                    background: `${bgcolor_text}`,
                    padding: isOpen ? (nopadding ? "2vw 0" : "2vw") : "0 2vw",
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
                                    sx={{
                                        py:
                                            id < answer.length - 1
                                                ? "1vh"
                                                : "0px",
                                    }}
                                >
                                    <Typography
                                        fontSize={"0.9rem"}
                                        margin={0}
                                        color={color_text}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            </Stack>
                        ))
                    ) : (
                        <Typography
                            fontSize={"0.9rem"}
                            margin={0}
                            color={color_text}
                        >
                            {answer}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Accordion;
