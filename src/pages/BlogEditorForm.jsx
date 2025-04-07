
import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../form/CustomInput';

export default function BlogEditorForm() {
    const navigate = useNavigate();
    const [formData, useState] = useState({
        name: '',
        url: '',
        unit: '',
        subunit: '',
        time: ''
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(formData);
        navigate(`/BRI/editor?${params.toString()}`);
    };

    return (
        <Stack spacing={3} sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
            <Typography variant="h4">Create New Blog Post</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <CustomInput
                        label="Blog Name"
                        value={formData.name}
                        setValue={(value) => handleChange('name', value)}
                        required
                    />
                    <CustomInput
                        label="URL Path"
                        value={formData.url}
                        setValue={(value) => handleChange('url', value)}
                        required
                    />
                    <CustomInput
                        label="Unit"
                        value={formData.unit}
                        setValue={(value) => handleChange('unit', value)}
                        required
                    />
                    <CustomInput
                        label="Subunit"
                        value={formData.subunit}
                        setValue={(value) => handleChange('subunit', value)}
                        required
                    />
                    <CustomInput
                        label="Time"
                        value={formData.time}
                        setValue={(value) => handleChange('time', value)}
                        required
                    />
                    <Button 
                        variant="contained" 
                        type="submit"
                        sx={{ mt: 2 }}
                    >
                        Continue to Editor
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
}
