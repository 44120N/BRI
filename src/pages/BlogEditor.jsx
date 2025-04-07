import React, { useState } from 'react';
import { Stack, Button, Select, MenuItem, Typography, Grid } from '@mui/material';
import CustomInput from '../form/CustomInput';
import ContentEditor from '../components/ContentEditor';
import BlogPreview from '../components/BlogPreview';

const CONTENT_TYPES = {
    stack: "Layout Stack",
    paragraph: "Paragraph",
    math: "Math Expression",
    heading: "Heading",
    image: "Image",
    video: "Video",
    list: "List",
    table: "Table"
};

export default function BlogEditor() {
    const [blog, setBlog] = useState({
        name: '',
        url: '',
        unit: '',
        subunit: '',
        time: '',
        content: []
    });
    const [preview, setPreview] = useState(false);
    const [generatedJson, setGeneratedJson] = useState('');

    const addContent = (type) => {
        setBlog(prev => ({
            ...prev,
            content: [...prev.content, { type }]
        }));
    };

    const addNestedContent = (parentIndex) => {
        setBlog(prev => {
            const newContent = [...prev.content];
            if (!newContent[parentIndex].children) {
                newContent[parentIndex].children = [];
            }
            newContent[parentIndex].children.push({ type: 'paragraph' });
            return { ...prev, content: newContent };
        });
    };

    const removeContent = (index, parentIndex = null) => {
        setBlog(prev => {
            if (parentIndex !== null) {
                const newContent = [...prev.content];
                newContent[parentIndex].children = newContent[parentIndex].children.filter((_, i) => i !== index);
                return { ...prev, content: newContent };
            }
            return {
                ...prev,
                content: prev.content.filter((_, i) => i !== index)
            };
        });
    };

    const updateContent = (updateFn) => {
        setBlog(prev => ({
            ...prev,
            content: updateFn(prev.content)
        }));
    };

    const generateJson = () => {
        setGeneratedJson(JSON.stringify(blog, null, 2));
    };

    return (
        <Stack spacing={3} sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
            <Typography variant="h4">Blog Editor</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                        <CustomInput
                            label="Name"
                            value={blog.name}
                            setValue={(value) => setBlog(prev => ({ ...prev, name: value }))}
                        />
                        <CustomInput
                            label="URL"
                            value={blog.url}
                            setValue={(value) => setBlog(prev => ({ ...prev, url: value }))}
                        />
                        <CustomInput
                            label="Unit"
                            value={blog.unit}
                            setValue={(value) => setBlog(prev => ({ ...prev, unit: value }))}
                        />
                        <CustomInput
                            label="Subunit"
                            value={blog.subunit}
                            setValue={(value) => setBlog(prev => ({ ...prev, subunit: value }))}
                        />
                        <CustomInput
                            label="Time"
                            value={blog.time}
                            setValue={(value) => setBlog(prev => ({ ...prev, time: value }))}
                        />
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="h6">Content</Typography>
                        <Select
                            value=""
                            displayEmpty
                            onChange={(e) => addContent(e.target.value)}
                            sx={{ minWidth: 200 }}
                        >
                            <MenuItem value="" disabled>Add Content</MenuItem>
                            {Object.entries(CONTENT_TYPES).map(([value, label]) => (
                                <MenuItem key={value} value={value}>{label}</MenuItem>
                            ))}
                        </Select>
                    </Stack>

                    <ContentEditor 
                        content={blog.content}
                        updateContent={updateContent}
                        removeContent={removeContent}
                        addNestedContent={addNestedContent}
                    />
                </Grid>
            </Grid>

            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={() => setPreview(!preview)}>
                    {preview ? 'Hide Preview' : 'Show Preview'}
                </Button>
                <Button variant="contained" onClick={generateJson}>
                    Generate JSON
                </Button>
            </Stack>

            {preview && (
                <BlogPreview blog={blog} />
            )}

            {generatedJson && (
                <CustomInput
                    label="Generated JSON"
                    value={generatedJson}
                    setValue={() => {}}
                    multiline
                    rows={10}
                />
            )}
        </Stack>
    );
}