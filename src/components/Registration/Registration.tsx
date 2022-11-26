
import React from 'react';
import styles from "./Registration.module.scss";
import { Paper, Typography, TextField, Button,Avatar } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';

export const Registration = () => {

  const { register, handleSubmit,  formState: {errors, isValid} } = useForm({
    defaultValues: {
      fullName: "",
      password: ""
    },
    mode: 'onChange',
  });

  const onSubmit = async  () => {
//     const data = await dispatch(fetchRegister(value));

//     if(!data.payload){
//       alert("не удалось зарегистрироваться")

//     }
//     if('token' in data.payload){
//       window.localStorage.setItem('token', data.payload.token);
//     }else {
//       alert('не удалось')
//     }
//   };
//   if(isAuth) {
//     return <Navigate to="/"/>
  }
    return <>
    
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
      Create account
      </Typography>
      <div className={styles.avatar}>
      </div>
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
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Укажите пароль' })}
          className={styles.field}
          label="Password"
          fullWidth
        />
        <Button disabled={!isValid}  type="submit" size="large" variant="contained" fullWidth>
        Registration
        </Button>
      </form>
    </Paper>
  </>;
};