import React, { useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../form/CustomInput';
import CustomInputNumber from '../form/CustomInputNumber';
import SelectField from '../form/SelectField';
import Button from '../components/Button';

export default function BlogEditorForm() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [unit, setUnit] = useState('');
    const [subunit, setSubunit] = useState('');
    const [time, setTime] = useState('');
    const [timeUnit, setTimeUnit] = useState('min');

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams({
            name: name,
            url: url,
            unit: unit,
            subunit: subunit,
            time: time+' '+timeUnit
        });
        navigate(`/editor?${params.toString()}`);
    };

    return (
        <Stack gap={5} my={3}>
            <Typography variant="h4" color='primary' textAlign={{xs:'center', sm:"center", md:'center', lg:"center"}}>Create New Blog Post</Typography>
            <form onSubmit={handleSubmit}>
                <Stack gap={4} width={'100%'} alignItems={'center'}>
                    <Stack width={'80%'}>
                        <Typography>Blog Name</Typography>
                        <CustomInput
                            type='text'
                            palette='primary'
                            useThemeColor={true}
                            required
                            name='blog_name'
                            value={name}
                            setValue={setName}
                        />
                    </Stack>
                    <Stack width={'80%'}>
                        <Typography>URL Path</Typography>
                        <CustomInput
                            type='text'
                            palette='secondary'
                            useThemeColor={true}
                            required
                            name='url_path'
                            value={url}
                            setValue={setUrl}
                        />
                    </Stack>
                    <Stack width={'80%'}>
                        <Typography>Bab</Typography>
                        <CustomInput
                            type='text'
                            palette='tertiary'
                            useThemeColor={true}
                            required
                            name='unit'
                            value={unit}
                            setValue={setUnit}
                        />
                    </Stack>
                    <Stack width={'80%'}>
                        <Typography>Sub-bab</Typography>
                        <CustomInput
                            type='text'
                            palette='quaternary'
                            useThemeColor={true}
                            required
                            name='subunit'
                            value={subunit}
                            setValue={setSubunit}
                        />
                    </Stack>
                    <Stack width={'80%'}>
                        <Typography>Time</Typography>
                        <Stack direction={'row'} flexWrap={'nowrap'} gap={2}>
                            <Stack width={'100%'}>
                                <CustomInputNumber
                                    palette='kurai_ao'
                                    useThemeColor={true}
                                    required
                                    name='time'
                                    value={time}
                                    setValue={setTime}
                                    fullWidth
                                    decimal
                                />
                            </Stack>
                            <SelectField
                                name="timeUnit"
                                value={timeUnit}
                                setValue={setTimeUnit}
                                choices={[
                                    ["min", "Menit"],
                                    ["hour", "Jam"],
                                    ["day", "Hari"]
                                ]}
                                fullWidth={false}
                            />
                        </Stack>
                    </Stack>
                    <Button 
                        color={'#fff'}
                        bgcolor={'primary'}
                        bdcolor={'#000'}
                        type="submit"
                    >
                        Continue to Editor
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
}
