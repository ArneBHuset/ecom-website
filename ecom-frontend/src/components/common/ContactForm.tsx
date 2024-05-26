import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Button, Typography, FormControl } from "@mui/material";
import { useState } from "react";
import Icon from "@mui/material/Icon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/**
 * For validating form inputs
 * Defines validation criteria for fullName, subject, email, and message fields.
 */
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Email is not valid"),
  message: yup
    .string()
    .required("Message is required")
    .min(3, "Message must be at least 3 characters"),
});

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission success

  /**
   * If the form is valid, log the values and reset the form.
   * @param data - Object containing form data with structure matching the form's input fields.
   */
  const onSubmit = (data) => {
    console.log("These are the form values", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: 1, sm: 0.7, md: 0.4 },
        mx: "auto",
      }}
    >
      <Typography variant="h5" component="h2" textAlign="center">
        Contact Us
      </Typography>
      {["fullName", "subject", "email", "message"].map((field, index) => (
        <FormControl key={index} margin="normal" fullWidth>
          <Controller
            name={field}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={
                  field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")
                }
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!errors[field]}
                helperText={errors[field]?.message}
                multiline={field === "message"}
                rows={field === "message" ? 4 : 1}
              />
            )}
          />
        </FormControl>
      ))}
      {isSubmitted && (
        <Box
          sx={{ display: "flex", alignItems: "center", color: "green", mt: 2 }}
        >
          <Icon>
            <CheckCircleIcon />
          </Icon>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Thank you for getting in touch!
          </Typography>
        </Box>
      )}
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, display: "block", mx: "auto" }}
      >
        Send Message
      </Button>
    </Box>
  );
}
