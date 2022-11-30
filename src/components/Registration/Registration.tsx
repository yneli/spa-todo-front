
import React from 'react';
import styles from "./Registration.module.scss";
import { Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRegistraition, selectIsAuth, setUsers } from '../../redux/userReducer';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/hook';
import axios from "./../../axios";


export const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
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
  const onSubmit = async (value:object) => {
    const data = await axios.post("/auth/register", value);
    if(!data.data){
      alert("не удалось зарегистрироваться")
    }
    if('token' in data.data){
      dispatch(setUsers(data.data))
      window.localStorage.setItem('token', data.data.token);
    }else {
      alert('не удалось')
    }
  };
   if(isAuth) {
    return <Navigate to="/projects"/>
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