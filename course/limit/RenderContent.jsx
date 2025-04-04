import React, { useEffect } from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../components/Problem";
import { CustomRawTable } from "../components/Tabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Function to render JSON content dynamically
const RenderContent = ({ data }) => {
    if (!data) return null;

    return data.map((item, index) => {
        switch (item.type) {
            case "paragraph":
                return (
                    <Typography key={index} textAlign={`${item?.align} !important`} fontSize={item?.size} {...(item.props || {})}>
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
                    <Stack direction={item.direction||"row"} justifyContent={item.justify||"normal"} alignItems={item.align||"normal"} gap={item.gap||0} key={index}>
                        <Typography key={index} variant="body1" {...(item.props || {})}>
                            <MathJax>{item.text}</MathJax>
                        </Typography>
                    </Stack>
                );

            case "heading":
                return (
                    <Typography key={index} fontWeight={600} fontSize={'1.2em'} {...(item.props || {})}>
                        {item.text}
                    </Typography>
                );

            case "stack":
                return (
                    <Stack key={index} gap={item.gap||0} direction={item.direction||'column'} justifyContent={item.justify||'normal'} alignItems={item.align||'normal'} flexWrap={item.wrap||'wrap'} {...(item.props || {})}>
                        {item.children && <RenderContent data={item.children} />}
                    </Stack>
                );

            case "image":
                return (
                    <Stack key={index} direction="row" justifyContent="center" my={3}>
                        <img src={item.src} alt={item.alt} style={{maxWidth:'80vw'}} {...(item.props || {})} />
                    </Stack>
                );
            
            case "video":
                return (
                    <Stack key={index} direction="row" justifyContent="center" my={3}>
                        <video controls style={{maxWidth:'80vw'}} {...(item.props || {})}>
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Stack>
                );

            case "formula":
                return (
                    <Stack
                        key={index}
                        gap={item.gap||3}
                        px={item.props&&item.props.paddingX || {xs:1, sm:2, md:3}}
                        py={item.props&&item.props.paddingY || 2}
                        maxWidth={'80vw'}
                        sx={{
                            backgroundColor: item.props&&item.props.backgroundColor || "#e0f0ff",
                            border: item.props&&item.props.border || "1px solid #000",
                        }}
                    >
                        <Stack sx={{overflowX:"auto", overflowY:"hidden"}}>
                            {item.children && <RenderContent data={item.children} />}
                        </Stack>
                    </Stack>
                );

                case "list":
                    return (
                        <Stack key={index} gap={item.gap || 0} direction={item.direction || 'column'} justifyContent={item.justify || 'normal'} {...(item.props || {})}>
                            <Typography fontSize={'1em'} fontWeight={600}>{item.title}</Typography>
                            <Grid2 container spacing={.5} direction={'column'}>
                                {item.items.map((listItem, listIndex) => (
                                    <Grid2 xs={3} sm={3} key={listIndex}>
                                        <Stack direction="row" alignItems="center" gap={1}>
                                            {item.bullet === "1" ? (
                                                <Typography color={item.color||"primary.main"} fontWeight={600}>{listIndex + 1}.</Typography>
                                            ) : item.bullet === "a" ? (
                                                <Typography color={item.color||"primary.main"} fontWeight={600}>{String.fromCharCode(97 + listIndex)}.</Typography>
                                            ) : item.bullet === "A" ? (
                                                <Typography color={item.color||"primary.main"} fontWeight={600}>{String.fromCharCode(65 + listIndex)}.</Typography>
                                            ) : (
                                                <CheckCircleIcon sx={{ color: item.color||"primary.main", fontSize: "1.2em" }} />
                                            )}
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

            case "table":
                return (
                    <CustomRawTable 
                        content={item.data.map((row, i) =>
                            row.map((col, j) => (
                                <RenderContent key={`${i}-${j}`} data={[col]} />
                            ))
                        )}
                        key={index}
                        // content={item.data}
                        {...(item.props || {})}
                    />
                )
            
            default:
                console.warn("Unhandled content type:", item);
                return <Typography key={index}>Unknown content</Typography>;
        }
    });
};

export default RenderContent;
