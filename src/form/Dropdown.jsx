
import React from 'react';
import { Menu, MenuItem, IconButton, Tooltip, Stack } from '@mui/material';

export default function Dropdown({
    label,
    icon,
    items = [],
    anchorEl,
    setAnchorEl,
    onItemClick,
    renderItem,
}) {
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Tooltip title={label}>
                    {icon}
                </Tooltip>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            onItemClick(item);
                            handleClose();
                        }}
                    >
                        {renderItem ? renderItem(item) : (
                            <Stack direction="row" spacing={1} alignItems="center">
                                {item.icon}
                                {item.label}
                            </Stack>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
