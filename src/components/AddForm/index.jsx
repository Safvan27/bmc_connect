import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";

import "./Form.css";

const AddForm = ({ handleAddCreator }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "Male",
        status: "active",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "This field is required.";
        if (!formData.email) {
            tempErrors.email = "This field is required.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            tempErrors.email = emailRegex.test(formData.email)
                ? ""
                : "Email is not valid.";
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const userData = {
                name: formData.name,
                email: formData.email,
                gender: formData.gender,
                status: formData.status,
            };
            handleAddCreator(userData);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <div className="form-label">Creator Name</div>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="outlined-basic"
                                name="name"
                                label="Creator Name"
                                onChange={handleChange}
                                value={formData.name}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <div className="form-label">Email</div>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="outlined-basic"
                                name="email"
                                label="Creator Mail"
                                onChange={handleChange}
                                value={formData.email}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <div className="form-label">Gender</div>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    required
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    label="Gender"
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="form-label">Available for chat</div>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="active"
                                        control={
                                            <Radio
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#9B62E0",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Active"
                                    />
                                    <FormControlLabel
                                        value="inactive"
                                        control={
                                            <Radio
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#9B62E0",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Inactive"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                        <Button>
                            <AddIcon /> Add creator
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default AddForm;
