import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import {
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    e.currentTarget.reset();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Login</h2>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction={'column'} spacing={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Email"
            name="email"
            color="primary"
          />
          <FormControl required fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              name="password"
              type="password"
              label="Password"
              color="primary"
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
