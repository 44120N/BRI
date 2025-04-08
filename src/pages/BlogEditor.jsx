import React, { useState, useEffect } from 'react';
import { Stack, Typography, IconButton, Select, MenuItem, Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RenderContent from '../course/RenderContent';
import CustomInput from '../form/CustomInput';
import DeleteIcon from '@mui/icons-material/Delete';

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
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        name: '',
        url: '',
        unit: '',
        subunit: '',
        time: '',
        content: []
    });
    const [generatedJson, setGeneratedJson] = useState('');

    useEffect(() => {
        // Validate required parameters
        const required = ['name', 'url', 'unit', 'subunit', 'time'];
        const missing = required.filter(param => !searchParams.get(param));
        
        if (missing.length > 0) {
            navigate('/BRI/editor-form');
            return;
        }

        // Set initial blog state from URL parameters
        setBlog({
            name: searchParams.get('name'),
            url: searchParams.get('url'),
            unit: searchParams.get('unit'),
            subunit: searchParams.get('subunit'),
            time: searchParams.get('time'),
            content: []
        });
    }, [searchParams]);

    const addContent = (type) => {
        setBlog(prev => ({
            ...prev,
            content: [...prev.content, { type, text: '' }]
        }));
    };

    const updateContent = (index, field, value) => {
        setBlog(prev => {
            const newContent = [...prev.content];
            newContent[index] = { ...newContent[index], [field]: value };
            return { ...prev, content: newContent };
        });
    };

    const removeContent = (index) => {
        setBlog(prev => ({
            ...prev,
            content: prev.content.filter((_, i) => i !== index)
        }));
    };

    const generateJson = () => {
        setGeneratedJson(JSON.stringify(blog, null, 4));
    };

    return (
        <Stack spacing={3} sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4">Blog Editor</Typography>
                <Select
                    value=""
                    displayEmpty
                    onChange={(e) => addContent(e.target.value)}
                    sx={{ minWidth: 200 }}
                >
                    <MenuItem value="" disabled>Add Content Block</MenuItem>
                    {Object.entries(CONTENT_TYPES).map(([value, label]) => (
                        <MenuItem key={value} value={value}>{label}</MenuItem>
                    ))}
                </Select>
            </Stack>

            <Stack spacing={2}>
                {blog.content.map((item, index) => (
                    <Stack 
                        key={index}
                        spacing={2}
                        sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 1 }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">{CONTENT_TYPES[item.type]}</Typography>
                            <IconButton onClick={() => removeContent(index)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                        <CustomInput
                            label="Content"
                            value={item.text || ''}
                            setValue={(value) => updateContent(index, 'text', value)}
                            multiline
                            rows={6}
                            useThemeColor
                            palette="primary"
                        />
                    </Stack>
                ))}
            </Stack>

            <Stack spacing={2}>
                <Typography variant="h5">Preview</Typography>
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
            </Stack>

            <Button variant="contained" onClick={generateJson}>
                Generate JSON
            </Button>

            {generatedJson && (
                <CustomInput
                    label="Generated JSON"
                    value={generatedJson}
                    setValue={() => {}}
                    multiline
                    rows={10}
                    readonly
                />
            )}
        </Stack>
    );
}
