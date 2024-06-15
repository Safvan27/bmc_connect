import DeleteIcon from "@mui/icons-material/Delete";
import {
    Chip,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import "./table.css";

const DataTable = ({ data, onDelete, onEdit }) => {
    const getChatTextStyle = (chat) => {
        return {
            fontWeight: "bold",
            color: chat ? "#4C9A2A" : "#FF0000",
        };
    };
    return (
        <TableContainer
            component={Paper}
            sx={{ maxHeight: 500, minHeight: 500 }}
        >
            <Table
                className="user-table"
                stickyHeader
                aria-label="sticky table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell className="user-table-header">
                            Name
                        </TableCell>
                        <TableCell className="user-table-header">
                            Email
                        </TableCell>
                        <TableCell className="user-table-header">
                            Gender
                        </TableCell>
                        <TableCell className="user-table-header">
                            Available for chat
                        </TableCell>
                        <TableCell className="user-table-header">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>
                                <Typography style={getChatTextStyle(row.chat)}>
                                    {row.chat ? "Active" : "Inactive"}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label="Edit"
                                    className="chip-text"
                                    onClick={() => onEdit(row.id)}
                                />

                                <IconButton onClick={() => onDelete(row.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
