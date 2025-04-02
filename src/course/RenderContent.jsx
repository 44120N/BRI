import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../components/Problem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Function to render JSON content dynamically
const RenderContent = ({ data }) => {
    if (!data) return null;

    return data.map((item, index) => {
        switch (item.type) {
            case "paragraph":
                return (
                    <Typography key={index} {...(item.props || {})}>
                        {item.text}
                        {item.children &&
                            item.children.map((child, childIndex) => (
                                <Typography
                                    key={childIndex}
                                    component={"span"}
                                    fontSize="inherit"
                                    {...(child.props || {})}
                                >
                                    <MathJax inline>{child.text}</MathJax>
                                </Typography>
                            ))}
                    </Typography>
                );

            case "math":
                return (
                    <Typography key={index} {...(item.props || {})}>
                        <MathJax>{item.text}</MathJax>
                    </Typography>
                );

            case "heading":
                return (
                    <Typography key={index} fontWeight={600} fontSize={'1.2em'} {...(item.props || {})}>
                        {item.text}
                    </Typography>
                );

            case "stack":
                return (
                    <Stack key={index} gap={item.gap||0} direction={item.direction||'column'} justifyContent={item.justify||'normal'} alignItems={item.align||'normal'} {...(item.props || {})}>
                        {item.children && <RenderContent data={item.children} />}
                    </Stack>
                );

            case "image":
                return (
                    <Stack key={index} direction="row" justifyContent="center" my={3}>
                        <img src={item.src} alt={item.alt} style={{maxWidth:'80vw'}} {...(item.props || {})} />
                    </Stack>
                );

            case "formula":
                return (
                    <Stack
                        key={index}
                        gap={3}
                        px={item.props.paddingX || 2}
                        py={item.props.paddingY || 1}
                        sx={{
                            backgroundColor: item.props.backgroundColor || "#e0f0ff",
                            border: item.props.border || "1px solid #000",
                        }}
                    >
                        {item.children && <RenderContent data={item.children} />}
                    </Stack>
                );

            case "list":
                return (
                    <Stack>
                        <Typography fontSize={'1em'} fontWeight={600}>{item.title}</Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.items.map((item, index) => (
                                <Grid2 xs={3} sm={3} key={index}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.2em" }} />
                                        <Typography 
                                            variant="body1"
                                            fontSize={{xs: ".8em",sm:"1em"}}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {item}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Stack>
                );

            case "example":
                return(
                    <Problem
                        key={index}
                        title={item.title}
                        equation={item.equation}
                        instruction={item.instruction}
                        note={item.note}
                        accordion_text={item.accordion_text}
                        {...(item.props || {})}
                    >
                        <RenderContent data={item.children} />
                    </Problem>
                )
            
            default:
                return null;
        }
    });
};

export default RenderContent;
