
import React, { useState } from 'react';
import { 
    Stack, 
    IconButton, 
    Tooltip, 
    Divider,
    Typography
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import RemoveIcon from '@mui/icons-material/Remove';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Dropdown from '../form/Dropdown';

export default function Editor() {
    const [formats, setFormats] = useState([]);
    const [align, setAlign] = useState('left');
    const [textStyle, setTextStyle] = useState('normal');
    const [fontSize, setFontSize] = useState('normal');

    const alignItems = [
        { label: 'Left', value: 'left', icon: <FormatAlignLeftIcon /> },
        { label: 'Center', value: 'center', icon: <FormatAlignCenterIcon /> },
        { label: 'Right', value: 'right', icon: <FormatAlignRightIcon /> },
        { label: 'Justify', value: 'justify', icon: <FormatAlignJustifyIcon /> }
    ];

    const textStyles = [
        { label: 'Normal', value: 'normal' },
        { label: 'Title 1', value: 'h1' },
        { label: 'Title 2', value: 'h2' },
        { label: 'Title 3', value: 'h3' },
        { label: 'Title 4', value: 'h4' },
        { label: 'Title 5', value: 'h5' },
        { label: 'Subtitle', value: 'subtitle' },
        { label: 'Paragraph', value: 'paragraph' }
    ];

    const fontSizes = [
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' },
        { label: 'Huge', value: 'huge' }
    ];

    return (
        <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
                p: 1, 
                backgroundColor: '#f5f5f5',
                borderRadius: 1,
                flexWrap: 'wrap'
            }}
        >
            <Dropdown
                label="Text Style"
                icon={<TextFieldsIcon />}
                items={textStyles}
                value={textStyle}
                onChange={(item) => setTextStyle(item.value)}
            />
            <Dropdown
                label="Font Size"
                icon={<TextFieldsIcon />}
                items={fontSizes}
                value={fontSize}
                onChange={(item) => setFontSize(item.value)}
            />
            <Divider orientation="vertical" flexItem />
            
            <IconButton>
                <Tooltip title="Bold">
                    <FormatBoldIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Italic">
                    <FormatItalicIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Underline">
                    <FormatUnderlinedIcon />
                </Tooltip>
            </IconButton>
            
            <Divider orientation="vertical" flexItem />
            
            <Dropdown
                label="Alignment"
                icon={align === 'left' ? <FormatAlignLeftIcon /> : 
                      align === 'center' ? <FormatAlignCenterIcon /> :
                      align === 'right' ? <FormatAlignRightIcon /> :
                      <FormatAlignJustifyIcon />}
                items={alignItems}
                value={align}
                onChange={(item) => setAlign(item.value)}
            />
            
            <Divider orientation="vertical" flexItem />
            
            <IconButton>
                <Tooltip title="Bullet List">
                    <FormatListBulletedIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Numbered List">
                    <FormatListNumberedIcon />
                </Tooltip>
            </IconButton>
            
            <Divider orientation="vertical" flexItem />
            
            <IconButton>
                <Tooltip title="Quote">
                    <FormatQuoteIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Link">
                    <LinkIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Image">
                    <ImageIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Horizontal Line">
                    <RemoveIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Emoji">
                    <InsertEmoticonIcon />
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="More">
                    <MoreHorizIcon />
                </Tooltip>
            </IconButton>
        </Stack>
    );
}
