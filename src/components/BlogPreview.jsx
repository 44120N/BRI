
import React from 'react';
import { Stack, Typography } from "@mui/material";
import RenderContent from "../course/RenderContent";

export default function BlogPreview({ blog }) {
    if (!blog) return null;

    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <Stack gap={1} direction="column">
                <Typography
                    textTransform="uppercase"
                    variant="body2"
                    letterSpacing={-0.5}
                    color="#555"
                >
                    {blog.unit}
                </Typography>
                <Typography
                    textTransform="capitalize"
                    fontWeight={700}
                    variant="h5"
                >
                    {blog.subunit}
                </Typography>
            </Stack>
            <Typography color="#555">{blog.time}</Typography>
            <RenderContent data={blog.content} />
        </Stack>
    );
}
