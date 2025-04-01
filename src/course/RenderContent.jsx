import React from "react";
import { Stack, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";

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
                                    {...(child.props || {})}
                                >
                                    {child.text}
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
                    <Typography key={index} variant="h5" {...(item.props || {})}>
                        {item.text}
                    </Typography>
                );

            case "stack":
                return (
                    <Stack key={index} {...(item.props || {})}>
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
                        {item.content.map((formulaItem, i) => (
                            <Typography key={i}>
                                <MathJax>{formulaItem.text}</MathJax>
                            </Typography>
                        ))}
                    </Stack>
                );

            default:
                return null;
        }
    });
};

export default RenderContent;
