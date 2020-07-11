import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorPickerForm.css";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";
import { v4 as uuid } from "uuid";

const ColorPickerForm = ({ addColor }) => {
  const INITIAL_STATE = {
    name: "",
    value: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = formData;

    addColor({ name, value, id: uuid() });

    setFormData(INITIAL_STATE);
    history.push("/colors");
  };

  return (
    <div className="ColorPickerForm">
      <form onSubmit={handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="colorName">Color Name</InputLabel>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Color Name"
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="colorValue"></InputLabel>
          <Input
            onChange={handleChange}
            type="color"
            name="value"
            value={formData.value}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ColorPickerForm;
