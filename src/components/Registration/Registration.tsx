
import React from 'react';
import styles from "./Registration.module.scss";
import { Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRegistraition } from '../../redux/userReducer';


export const Registration = () => {
  const dispatch = useDispatch();
  const ontab = () => {
    dispatch(fetchRegistraition());
  }
  const { register, handleSubmit,  formState: {errors, isValid} } = useForm({
    defaultValues: {
      fullName: "",
      password: ""
    },
    mode: 'onChange',
  });
  // @ts-ignore
  const onSubmit = async (value) => {

  // @ts-ignore

    const data = await dispatch(fetchRegistraition(value));
    // @ts-ignore
    
    // @ts-ignore
    // if(!data.payload){
    //   alert("не удалось зарегистрироваться")
    // }
    // // @ts-ignore
    // if('token' in data.payload){
    //   // @ts-ignore
    //   window.localStorage.setItem('token', data.payload.token);
    // }else {
    //   alert('не удалось')
    // }
  };
  // if(isAuth) {
  //   return <Navigate to="/"/>
  // }
    return <>
    <button onClick={ontab}>+++</button>
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