import { ReactNode } from "react";
import Container from '@mui/material/Container';
import style from './Layout.module.scss';
export const Layout = ({ children, header }: { header?: ReactNode, children?: ReactNode, }) => {
    return <>
    {header}
    <Container maxWidth="xl">
    <div className={style.container}>
        {children}
    </div>
    </Container>
    </>
};