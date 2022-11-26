import React from 'react';
import styles from "./Login.module.scss";
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit, setError, formState: {errors, isValid} } = useForm({
    defaultValues: {
      fullName: "",
      password: ''
    },
    mode: 'onChange',
  });
  const onSubmit = async () => {
//     const data = await dispatch(fetchLogin(values));

    
//     if (!data.payload) {
//       return alert('Не удалось авторизоваться!');
//     }

//     if ('token' in data.payload) {
//       window.localStorage.setItem('token', data.payload.token);
//     }
//   };

//   if (isAuth) {
//     return <Navigate to="/" />;
  }
  
    return <>
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        SIGN IN
      </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'full name' })}
          className={styles.field}
          label="Name"
          fullWidth
        />
      <TextField 
       type="password"
       className={styles.field}
       label="Password" 
       helperText={errors.password?.message}
      {...register('password', { required: 'Password'})}
      fullWidth />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        LogIn
      </Button>
    </form>
    </Paper>
    </>;
};