
import React from 'react';
import { Stack, Typography, IconButton, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CustomInput from '../form/CustomInput';

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

export default function ContentEditor({ content, updateContent, removeContent, addNestedContent }) {
    const renderEditor = (item, index, parentIndex = null) => {
        const updateField = (field, value) => {
            const update = parentIndex !== null ? 
                (prev) => {
                    const newContent = [...prev];
                    newContent[parentIndex].children[index] = {
                        ...newContent[parentIndex].children[index],
                        [field]: value
                    };
                    return newContent;
                } :
                (prev) => {
                    const newContent = [...prev];
                    newContent[index] = { ...newContent[index], [field]: value };
                    return newContent;
                };
            updateContent(update);
        };

        return (
            <Stack 
                key={`${parentIndex}-${index}`}
                spacing={2} 
                sx={{ 
                    border: '1px solid #ccc',
                    padding: 2,
                    borderRadius: 1,
                    marginY: 2 
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{CONTENT_TYPES[item.type]}</Typography>
                    <Stack direction="row" spacing={1}>
                        {item.type === 'stack' && (
                            <IconButton onClick={() => addNestedContent(index)} color="primary">
                                <AddIcon />
                            </IconButton>
                        )}
                        <IconButton onClick={() => removeContent(index, parentIndex)} color="error">
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </Stack>

                {item.type === 'stack' && (
                    <>
                        <CustomInput
                            label="Gap"
                            value={item.gap || ''}
                            setValue={(value) => updateField('gap', value)}
                        />
                        <CustomInput
                            label="Direction"
                            value={item.direction || ''}
                            setValue={(value) => updateField('direction', value)}
                        />
                        {item.children && item.children.map((child, childIndex) => 
                            renderEditor(child, childIndex, index)
                        )}
                    </>
                )}

                {(item.type === 'paragraph' || item.type === 'heading' || item.type === 'math') && (
                    <CustomInput
                        label="Text"
                        value={item.text || ''}
                        setValue={(value) => updateField('text', value)}
                        multiline
                        rows={3}
                    />
                )}

                {(item.type === 'image' || item.type === 'video') && (
                    <>
                        <CustomInput
                            label="Source URL"
                            value={item.src || ''}
                            setValue={(value) => updateField('src', value)}
                        />
                        <CustomInput
                            label="Alt Text"
                            value={item.alt || ''}
                            setValue={(value) => updateField('alt', value)}
                        />
                    </>
                )}
            </Stack>
        );
    };

    return (
        <Stack spacing={2}>
            {content.map((item, index) => renderEditor(item, index))}
        </Stack>
    );
}
