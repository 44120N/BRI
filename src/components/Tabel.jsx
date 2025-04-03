import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

// IM AURAMAXXING Data Structure AT 11PM RN 🤫🧏‍♂️
/*
* Here's the array structure for JSON:
* array -> array -> objects

* Here's the array structure for "arrays inside an array":
* array -> array -> string/jsx element
*/
export function CustomRawTable({ content, sx }) {
    React.useEffect(()=>{console.log(content)})
    return (
        <>
            {Array.isArray(content) &&
            content.every((row) => Array.isArray(row)) ? (
                content.every((row) =>
                    row.every(
                        (col) =>
                            typeof col === "object" &&
                            !React.isValidElement(col) &&
                            col !== null &&
                            !Array.isArray(col)
                    )
                ) ? (
                    <TableContainer component={Paper} sx={{ ...sx?.table }}>
                        <Table
                            sx={{ minWidth: 700 }}
                            aria-label="customized table"
                        >
                            <TableHead>
                                <TableRow>
                                    {/* Mapping table head (index 0) */}
                                    {content[0].map((col, index) => (
                                        <StyledTableCell
                                            key={index}
                                            align="center"
                                            colSpan={col.colspan || 1}
                                            rowSpan={col.rowspan || 1}
                                        >
                                            {col.content}
                                        </StyledTableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Mapping table body (index 1 and beyond) */}
                                {content.slice(1).map((row, rowIndex) => (
                                    <StyledTableRow key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <StyledTableCell
                                                key={cellIndex}
                                                align="center"
                                                colSpan={cell.colspan || 1}
                                                rowSpan={cell.rowspan || 1}
                                            >
                                                {cell.content}
                                            </StyledTableCell>
                                        ))}
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : content.every((row) =>
                      row.every(
                          (col) =>
                              typeof col === "string" ||
                              React.isValidElement(col)
                      )
                  ) ? (
                    <>
                        <Typography>
                            This is an array of arrays containing strings or JSX
                            elements
                        </Typography>
                        <TableContainer
                            component={Paper}
                            sx={{ ...sx?.table }}
                        >
                            <Table
                                sx={{ minWidth: 700 }}
                                aria-label="customized table"
                            >
                                <TableHead>
                                    <TableRow>
                                        {/* Mapping table head (index 0) */}
                                        {content[0].map((cell, index) => (
                                            <StyledTableCell
                                                key={index}
                                                align="center"
                                            >
                                                {cell}
                                            </StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Mapping table body (index 1 and beyond) */}
                                    {content.slice(1).map((row, rowIndex) => (
                                        <StyledTableRow key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <StyledTableCell
                                                    key={cellIndex}
                                                    align="center"
                                                >
                                                    {cell}
                                                </StyledTableCell>
                                            ))}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                ) : (
                    <Typography>This is a mixed array structure</Typography>
                )
            ) : (
                <Typography>This is not a valid table structure</Typography>
            )}
        </>
    );
}
