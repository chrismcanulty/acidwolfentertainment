import { Box, useMediaQuery, TextField } from '@mui/material';
import { getIn } from 'formik';

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  // for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    // formatted error can exist (be true) if field is touched/highlighted and error occurred
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  // actually format the error with this helper function
  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      // split into four fractions with min space of 0 and max of one fractional or 0 - 25%
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      // no impact on styles if non mobile, if mobile give it a span of 4 -> take up entire width
      sx={{
        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName('firstName')}
        error={formattedError('firstName')}
        helperText={formattedHelper('firstName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName('lastName')}
        error={formattedError('lastName')}
        helperText={formattedHelper('lastName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName('country')}
        error={formattedError('country')}
        helperText={formattedHelper('country')}
        sx={{ gridColumn: 'span 4' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName('street1')}
        error={formattedError('street1')}
        helperText={formattedHelper('street1')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName('street2')}
        error={formattedError('street2')}
        helperText={formattedHelper('street2')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName('city')}
        error={formattedError('city')}
        helperText={formattedHelper('city')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Province"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.province}
        name={formattedName('province')}
        error={formattedError('province')}
        helperText={formattedHelper('province')}
        sx={{ gridColumn: '1fr' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Postal code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.postalCode}
        name={formattedName('postalCode')}
        error={formattedError('postalCode')}
        helperText={formattedHelper('postalCode')}
        sx={{ gridColumn: '1fr' }}
      />
    </Box>
  );
};

export default AddressForm;
