import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Stack, IconButton, Tooltip, Menu, MenuItem, Divider } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CustomInput from '../form/CustomInput';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(0.5),
        '&.Mui-disabled': {
            border: 0,
        },
    },
}));

const COLORS = [
    '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#808080', '#800000', '#008000', '#000080', '#808000', '#800080', '#008080'
];

const FONTS = [
    'Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 
    'Helvetica', 'Tahoma', 'Trebuchet MS', 'Impact', 'Comic Sans MS'
];

export default function Editor({ onFormatChange }) {
    const [formats, setFormats] = useState([]);
    const [align, setAlign] = useState('left');
    const [textStyle, setTextStyle] = useState('normal');
    const [linkDialogOpen, setLinkDialogOpen] = useState(false);
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [codeDialogOpen, setCodeDialogOpen] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [code, setCode] = useState('');
    const [videoDialogOpen, setVideoDialogOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [colorAnchor, setColorAnchor] = useState(null);
    const [highlightAnchor, setHighlightAnchor] = useState(null);
    const [fontAnchor, setFontAnchor] = useState(null);
    const [fontFamilyAnchor, setFontFamilyAnchor] = useState(null); // Added state for font family
    const [textStyleAnchor, setTextStyleAnchor] = useState(null);
    const [listAnchor, setListAnchor] = useState(null);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        if (onFormatChange) {
            onFormatChange(newFormats);
        }
    };

    const handleLinkSubmit = () => {
        if (linkUrl) {
            setLinkDialogOpen(false);
            setLinkUrl('');
        }
    };

    const handleImageSubmit = () => {
        if (imageUrl) {
            setImageDialogOpen(false);
            setImageUrl('');
        }
    };

    const handleCodeSubmit = () => {
        if (code) {
            setCodeDialogOpen(false);
            setCode('');
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                flexWrap: 'wrap',
                width: '100%',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                backgroundColor: 'white',
            }}
        >
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                <IconButton onClick={(e) => setColorAnchor(e.currentTarget)}>
                <Tooltip title="Text Color">
                    <FormatColorTextIcon />
                </Tooltip>
                </IconButton>
                <IconButton onClick={(e) => setHighlightAnchor(e.currentTarget)}>
                <Tooltip title="Highlight Color">
                    <DriveFileRenameOutlineIcon />
                </Tooltip>
                </IconButton>
                <IconButton onClick={(e) => setFontAnchor(e.currentTarget)}>
                <Tooltip title="Font Size">
                    <TextFieldsIcon />
                </Tooltip>
                </IconButton>
                <IconButton onClick={(e) => setFontFamilyAnchor(e.currentTarget)}>
                <Tooltip title="Font Family">
                    <TextFormatIcon />
                </Tooltip>
                </IconButton>
            </Stack>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, borderColor: "#555" }} />

            <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="bold" aria-label="bold">
                    <Tooltip title="Bold"><FormatBoldIcon /></Tooltip>
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <Tooltip title="Italic"><FormatItalicIcon /></Tooltip>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <Tooltip title="Underline"><FormatUnderlinedIcon /></Tooltip>
                </ToggleButton>
                <ToggleButton value="strikethrough" aria-label="strikethrough">
                    <Tooltip title="Strikethrough"><StrikethroughSIcon /></Tooltip>
                </ToggleButton>
            </StyledToggleButtonGroup>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, borderColor: "#555" }} />

            <IconButton onClick={(e) => setTextStyleAnchor(e.currentTarget)}>
                <Tooltip title="Text Style">
                    <TextFormatIcon />
                </Tooltip>
            </IconButton>
            <IconButton onClick={(e) => setAlignAnchor(e.currentTarget)}>
                <Tooltip title="Alignment">
                    {align === 'left' && <FormatAlignLeftIcon />}
                    {align === 'center' && <FormatAlignCenterIcon />}
                    {align === 'right' && <FormatAlignRightIcon />}
                    {align === 'justify' && <FormatAlignJustifyIcon />}
                </Tooltip>
            </IconButton>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, borderColor: "#555" }} />

            <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                aria-label="text indentation"
            >
                <ToggleButton value="indent" aria-label="increase indent">
                    <Tooltip title="Increase Indent"><FormatIndentIncreaseIcon /></Tooltip>
                </ToggleButton>
                <ToggleButton value="outdent" aria-label="decrease indent">
                    <Tooltip title="Decrease Indent"><FormatIndentDecreaseIcon /></Tooltip>
                </ToggleButton>
            </StyledToggleButtonGroup>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, borderColor: "#555" }} />

            <Stack>
                <IconButton onClick={() => handleFormat(null, { divider: true })}>
                    <Tooltip title="Add Divider">
                        <HorizontalRuleIcon />
                    </Tooltip>
                </IconButton>
                <IconButton onClick={(e) => setListAnchor(e.currentTarget)}>
                    <Tooltip title="List Type">
                        <FormatListBulletedIcon />
                    </Tooltip>
                </IconButton>
            </Stack>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, borderColor: "#555" }} />

            <Stack>
                <IconButton onClick={() => setLinkDialogOpen(true)}>
                    <Tooltip title="Insert Link"><LinkIcon /></Tooltip>
                </IconButton>
                <IconButton onClick={() => setImageDialogOpen(true)}>
                    <Tooltip title="Insert Image"><ImageIcon /></Tooltip>
                </IconButton>
                <IconButton onClick={() => setCodeDialogOpen(true)}>
                    <Tooltip title="Insert Code"><CodeIcon /></Tooltip>
                </IconButton>
                <IconButton onClick={() => setVideoDialogOpen(true)}>
                    <Tooltip title="Insert Video"><VideocamIcon /></Tooltip>
                </IconButton>
            </Stack>

            <Menu
                anchorEl={colorAnchor}
                open={Boolean(colorAnchor)}
                onClose={() => setColorAnchor(null)}
            >
                <Stack direction="row" flexWrap="wrap" sx={{ width: 200, p: 1 }}>
                {COLORS.map((color) => (
                    <div
                    key={color}
                    onClick={() => {
                        handleFormat(null, { color });
                        setColorAnchor(null);
                    }}
                    style={{
                        width: 24,
                        height: 24,
                        backgroundColor: color,
                        margin: 4,
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                    }}
                    />
                ))}
                </Stack>
            </Menu>

            <Menu
                anchorEl={highlightAnchor}
                open={Boolean(highlightAnchor)}
                onClose={() => setHighlightAnchor(null)}
            >
                <Stack direction="row" flexWrap="wrap" sx={{ width: 200, p: 1 }}>
                {COLORS.map((color) => (
                    <div
                    key={color}
                    onClick={() => {
                        handleFormat(null, { backgroundColor: color });
                        setHighlightAnchor(null);
                    }}
                    style={{
                        width: 24,
                        height: 24,
                        backgroundColor: color,
                        margin: 4,
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                    }}
                    />
                ))}
                </Stack>
            </Menu>

            <Menu
                anchorEl={fontAnchor}
                open={Boolean(fontAnchor)}
                onClose={() => setFontAnchor(null)}
            >
                <MenuItem onClick={() => { handleFormat(null, { size: '10px' }); setFontAnchor(null); }}>10px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '12px' }); setFontAnchor(null); }}>12px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '14px' }); setFontAnchor(null); }}>14px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '16px' }); setFontAnchor(null); }}>16px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '18px' }); setFontAnchor(null); }}>18px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '20px' }); setFontAnchor(null); }}>20px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '24px' }); setFontAnchor(null); }}>24px</MenuItem>
                <MenuItem onClick={() => { handleFormat(null, { size: '32px' }); setFontAnchor(null); }}>32px</MenuItem>
            </Menu>


            <Menu
                anchorEl={fontFamilyAnchor}
                open={Boolean(fontFamilyAnchor)}
                onClose={() => setFontFamilyAnchor(null)}
            >
                {FONTS.map((font) => (
                <MenuItem
                    key={font}
                    onClick={() => {
                    handleFormat(null, { fontFamily: font });
                    setFontFamilyAnchor(null);
                    }}
                    style={{ fontFamily: font }}
                >
                    {font}
                </MenuItem>
                ))}
            </Menu>

            <Menu
                anchorEl={listAnchor}
                open={Boolean(listAnchor)}
                onClose={() => setListAnchor(null)}
            >
                <MenuItem onClick={() => {
                handleFormat(null, { list: '•' });
                setListAnchor(null);
                }}>•</MenuItem>
                <MenuItem onClick={() => {
                handleFormat(null, { list: '○' });
                setListAnchor(null);
                }}>○</MenuItem>
                <MenuItem onClick={() => {
                handleFormat(null, { list: '▪' });
                setListAnchor(null);
                }}>▪</MenuItem>
                <MenuItem onClick={() => {
                handleFormat(null, { list: '▸' });
                setListAnchor(null);
                }}>▸</MenuItem>
                <MenuItem onClick={() => {
                handleFormat(null, { list: '1' });
                setListAnchor(null);
                }}>1.</MenuItem>
                <MenuItem onClick={() => {
                handleFormat(null, { list: 'a' });
                setListAnchor(null);
                }}>a.</MenuItem>
            </Menu>

            <Menu
                anchorEl={textStyleAnchor}
                open={Boolean(textStyleAnchor)}
                onClose={() => setTextStyleAnchor(null)}
            >
                {[
                    { label: 'Normal', value: 'normal', style: { size: '16px', weight: 400, marginBottom: '0' } },
                    { label: 'Header', value: 'header', style: { size: '32px', weight: 700 } },
                    { label: 'Title 1', value: 'title1', style: { size: '28px', weight: 600 } },
                    { label: 'Title 2', value: 'title2', style: { size: '24px', weight: 600 } },
                    { label: 'Title 3', value: 'title3', style: { size: '20px', weight: 500 } },
                    { label: 'Title 4', value: 'title4', style: { size: '18px', weight: 500 } },
                    { label: 'Title 5', value: 'title5', style: { size: '16px', weight: 500 } },
                    { label: 'Subtitle', value: 'subtitle', style: { size: '14px', weight: 400, color: '#666' } },
                    { label: 'Paragraph', value: 'paragraph', style: { size: '16px', weight: 400, marginBottom: '16px' } },
                ].map(({ label, value, style }) => (
                    <MenuItem
                        key={value}
                        selected={textStyle === value}
                        onClick={() => {
                            setTextStyle(value);
                            handleFormat(null, { typography: value, ...style });
                            setTextStyleAnchor(null);
                        }}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Menu>

            <Menu
                anchorEl={alignAnchor}
                open={Boolean(alignAnchor)}
                onClose={() => setAlignAnchor(null)}
            >
                {[
                    { label: 'Left', value: 'left', icon: <FormatAlignLeftIcon /> },
                    { label: 'Center', value: 'center', icon: <FormatAlignCenterIcon /> },
                    { label: 'Right', value: 'right', icon: <FormatAlignRightIcon /> },
                    { label: 'Justify', value: 'justify', icon: <FormatAlignJustifyIcon /> },
                ].map(({ label, value, icon }) => (
                    <MenuItem
                        key={value}
                        selected={align === value}
                        onClick={() => {
                            setAlign(value);
                            handleFormat(null, { align: value });
                            setAlignAnchor(null);
                        }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            {icon}
                            {label}
                        </Stack>
                    </MenuItem>
                ))}
            </Menu>

            <Dialog open={linkDialogOpen} onClose={() => setLinkDialogOpen(false)}>
                <DialogTitle>Insert Link</DialogTitle>
                <DialogContent>
                <CustomInput
                    placeholder="URL"
                    value={linkUrl}
                    setValue={setLinkUrl}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setLinkDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleLinkSubmit}>Insert</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={imageDialogOpen} onClose={() => setImageDialogOpen(false)}>
                <DialogTitle>Insert Image</DialogTitle>
                <DialogContent>
                <CustomInput
                    placeholder="Image URL"
                    value={imageUrl}
                    setValue={setImageUrl}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setImageDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleImageSubmit}>Insert</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={codeDialogOpen} onClose={() => setCodeDialogOpen(false)}>
                <DialogTitle>Insert Code</DialogTitle>
                <DialogContent>
                <CustomInput
                    placeholder="Code"
                    value={code}
                    setValue={setCode}
                    multiline
                    rows={4}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setCodeDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleCodeSubmit}>Insert</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={videoDialogOpen} onClose={() => setVideoDialogOpen(false)}>
                <DialogTitle>Insert Video</DialogTitle>
                <DialogContent>
                <CustomInput
                    placeholder="Video URL (.mp4)"
                    value={videoUrl}
                    setValue={setVideoUrl}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setVideoDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => {
                    if (videoUrl) {
                    setVideoDialogOpen(false);
                    setVideoUrl('');
                    }
                }}>Insert</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}