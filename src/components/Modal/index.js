import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddFrom from "../AddForm";
import React, { useState } from "react";

import StatsChart from "../StatsChart";
export default function Modal({
    open,
    setOpen,
    title,
    type,
    handleAddCreator,
    usersData,
}) {
    const handleClose = () => {
        setOpen(false);
    };
    const [chartType, setChartType] = useState("gender");

    const handleChange = (event) => {
        setChartType(event.target.value);
    };
    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="form-label">
                    {title}
                    {type !== "ADD" && (
                        <FormControl
                            variant="outlined"
                            sx={{ m: 1, minWidth: 120 }}
                            size="small"
                        >
                            <InputLabel id="demo-simple-select-label">
                                Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={chartType}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={"gender"}>Gender</MenuItem>
                                <MenuItem value={"chat"}>
                                    Availability of chat
                                </MenuItem>
                            </Select>
                        </FormControl>
                    )}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Divider variant="middle" />
                <DialogContent>
                    {type === "ADD" ? (
                        <AddFrom handleAddCreator={handleAddCreator} />
                    ) : (
                        <StatsChart
                            chartType={chartType}
                            usersData={usersData}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
