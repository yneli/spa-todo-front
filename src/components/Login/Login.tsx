import styles from "./Login.module.scss";
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth, setUsers } from '../../redux/reducer/userReducer';
import axios from "./../../axios";
import { useDispatch } from 'react-redux';

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, formState: {errors, isValid} } = useForm({
    defaultValues: {
      fullName: "",
      password: ''
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