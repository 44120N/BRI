import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";

export default function CustomInput({
    type = "text",
    required = false,
    name = "",
    label = "",
    value,
    setValue,
    multiline = false,
    rows = 1,
    helperText = "",
    fullWidth = false,
    color = "primary",
    startIcon = null,
    placeholder="",
    onKeyDown,
}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                border: `2px solid black`,
                borderRadius: "8px",
                boxShadow: `4px 4px 0px black`,
                backgroundColor: "white",
                transition: "all 0.2s ease",
                "&:hover": {
                    transform: "translate(2px, 2px)",
                    boxShadow: "2px 2px 0px black",
                },
            }}
        >
            <TextField
                type={type}
                required={required}
                name={name}
                label={label}
                placeholder={placeholder}
                variant="standard"
                value={value}
                onChange={handleChange}
                onKeyDown={onKeyDown}
                multiline={multiline}
                maxRows={rows}
                helperText={helperText}
                fullWidth={fullWidth}
                color={color}
                slotProps={{
                    input: {
                        startAdornment: startIcon && (
                            <InputAdornment position="start">{startIcon}</InputAdornment>
                        ),
                    },
                }}
                sx={{
                    input: {
                        fontSize: {xs:".8rem", md:"1rem"},
                        fontWeight: "bold",
                        color: "black",
                        padding: "10px",
                    },
                    label: {
                        fontSize: {xs:".8rem", md:"1rem"},
                        fontWeight: "bold",
                        color: "black",
                    },
                    "& .MuiInput-underline:before": {
                        borderBottom: "2px solid black",
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "2px solid black",
                    },
                    "& .MuiInput-underline:after": {
                        borderBottom: "3px solid black",
                    },
                    "& .MuiFormHelperText-root": {
                        fontSize: "0.8rem",
                        color: "black",
                        fontWeight: "bold",
                    },
                    backgroundColor: "white",
                }}
            />
        </Box>
    );
}
