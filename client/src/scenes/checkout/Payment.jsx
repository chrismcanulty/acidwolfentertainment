import { Box, Typography, TextField } from '@mui/material';

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: '15px' }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          // convert to boolean forcibly. Formatting per Address Form not needed
          // since fields are not nested within an object in this step
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: 'span 4', marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          // convert to boolean forcibly. Formatting per Address Form not needed
          // since fields are not nested within an object in this step
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: 'span 4', marginBottom: '15px' }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
