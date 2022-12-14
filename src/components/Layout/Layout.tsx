import { ReactNode } from "react";
import Container from '@mui/material/Container';
import style from './Layout.module.scss';
import {useDispatch, useSelector} from "react-redux"; 
import React from "react";
import { fetchUsers } from "../../redux/reducer/userReducer";

export const Layout = ({ children, header }: { header?: ReactNode, children?: ReactNode, }) => {
    const dispatch = useDispatch();
    React.useEffect(()=> {
        dispatch(fetchUsers());
    },[]);
    return <>
    {header}
    <Container maxWidth="xl">
    <div className={style.container}>
        {children}
    </div>
    </Container>
    </>
};