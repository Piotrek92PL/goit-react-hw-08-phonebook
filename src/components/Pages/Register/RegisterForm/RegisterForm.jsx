import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Box, Stack, TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;

    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Register</h2>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <Stack direction="column" spacing={2}>
          <TextField
            fullWidth
            required
            label="Username"
            name="name"
            variant="filled"
            color="primary"
          />
          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            variant="filled"
            color="primary"
          />
          <TextField
            fullWidth
            required
            label="Password"
            name="password"
            variant="filled"
            color="primary"
            type="password"
          />
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
