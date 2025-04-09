import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Tooltip, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Dropdown({
    label,
    icon,
    items = [],
    value,
    onChange,
    renderItem,
    sx,
    children,
    arrow=true,
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                {icon?(
                    <Tooltip title={label}>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            {icon}
                            {arrow && (isOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />)}
                        </Stack>
                    </Tooltip>
                ):(
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography>
                            {items.find((i)=>i.value==value).label}
                        </Typography>
                        {arrow && (isOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />)}
                    </Stack>
                )}
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items.length>0?(
                    items.map((item, index) => (
                        <MenuItem
                            key={index}
                            selected={item.value === value}
                            onClick={() => {
                                onChange(item);
                                handleClose();
                            }}
                        >
                            {renderItem ? renderItem(item) : (
                                    <Stack direction="row" spacing={1} alignItems="center" sx={typeof sx?.item === 'function' ? sx.item(item) : sx?.item}>
                                        {item?.icon}
                                        {item?.label}
                                    </Stack>
                                )
                            }
                        </MenuItem>
                    ))
                ):(
                    <Stack px={3} py={2}>
                        {children}
                    </Stack>
                )}
            </Menu>
        </>
    );
}
