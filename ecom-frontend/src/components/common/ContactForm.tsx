import { useState } from "react";
import { TextField, Button, Box, Typography, FormControl } from "@mui/material";

export default function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  /**
   * Handles input changes forom the form inputs
   * @param prop - The property of the form to update.
   * @returns A function that updates the state for `prop` based on the event's input value.
   */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  /**
   * Handles form submission and prevents defualt form submit behavior
   * validates the form before proceeding.
   * @param event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("These are the form values", values);
      formSuccess();
    }
  };

  const formSuccess = () =>
    `Thank you for your message. We will get back to you soon.`;

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName =
      values.fullName.length > 2
        ? ""
        : "Full name must be at least 3 characters.";
    tempErrors.subject =
      values.subject.length > 2 ? "" : "Subject must be at least 3 characters.";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
      ? ""
      : "Email is not valid.";
    tempErrors.message =
      values.message.length > 2 ? "" : "Message must be at least 3 characters.";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      width={{ xs: 1, sm: 0.7, md: 0.4 }}
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop={10}
      sx={{}}
    >
      <Typography variant="h5" component="h2" textAlign={"center"}>
        Contact Us
      </Typography>
      <FormControl margin="normal" fullWidth>
        <TextField
          label="Full Name"
          variant="outlined"
          value={values.fullName}
          onChange={handleChange("fullName")}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          label="Subject"
          variant="outlined"
          value={values.subject}
          onChange={handleChange("subject")}
          error={!!errors.subject}
          helperText={errors.subject}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={!!errors.email}
          helperText={errors.email}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          error={!!errors.message}
          helperText={errors.message}
        />
      </FormControl>
      <Typography>{formSuccess}</Typography>
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}
