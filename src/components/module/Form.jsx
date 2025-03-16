import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Alert, styled } from "@mui/material";
import { snackBarAction } from "../../redux/slice";
import { useDispatch } from "react-redux";

const StyledTextField = styled(TextField)({
  background: "#fff",
  borderRadius: "8px",
  textAlign: "left",
});
const Container = styled(Box)({
  textAlign: "left",
  p: { marginBottom: -18 },
});
export default function ContactForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    code: "",
    phone: "",
    category: "",
    projectInfo: "",
  });

  const categories = [
    "3D Character Animation and VFX",
    "Architectural Animation",
    "AV EDITING",
    "E - Learning Animation",
    "Explainer Animation",
    "Video Marketing",
    "Medical Animation",
    "Product Design Animation",
    "Promotional Animation",
    "Safety Animation",
    "3D Graphic Design",
    "3D Modelling",
    "Youtube Videos",
    "2D Animation",
    "AD_Social Networking",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("First Name", formData.firstName);
    formDataToSend.append("Last Name", formData.lastName);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("Phone", formData.code + " " + formData.phone);
    formDataToSend.append("Category", formData.category);
    formDataToSend.append("Project Information", formData.projectInfo);
    formDataToSend.append("_subject", "New Contact Form Submission");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table"); // This ensures structured email

    const response = await fetch(
      "https://formsubmit.co/ajax/saran@trilandstudios.in",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    if (response.ok) {
      dispatch(
        snackBarAction({
          severity: "success",
          message: "Message sent successfully!",
        })
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        category: "",
        projectInfo: "",
      });
    }
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto" }}
    >
      <p>{"First Name"}</p>
      <StyledTextField
        name="firstName"
        placeholder="First Name*"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <p>{"Last Name"}</p>
      <StyledTextField
        name="lastName"
        placeholder="Last name*"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <p>{"Email"}</p>
      <StyledTextField
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <p style={{ marginBottom: 0 }}>{"Phone"}</p>
      <StyledTextField
        name="phone"
        placeholder="Phone*"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        required
      />
      <p style={{ marginTop: 10 }}> {"Category"}</p>
      <StyledTextField
        select
        placeholder="Select Category*"
        name="category"
        value={formData.category}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledTextField>
      <p>Information of your project</p>
      <StyledTextField
        placeholder="Information of your project"
        name="projectInfo"
        value={formData.projectInfo}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Send
      </Button>
    </Container>
  );
}
