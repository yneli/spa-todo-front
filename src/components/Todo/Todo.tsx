import styles from './Todo.module.scss';
import Typography from '@mui/material/Typography';
import { Dropdown } from "../Dropdown/Dropdown";

export const Todo = () => {
    return <div className={styles.todo}>
       <div className={styles.maintext}>
           <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >{"Title"}</Typography>
           <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 300,
                color: 'inherit',
                textDecoration: 'none',
              }}
        >{"- description"}</Typography>
       </div>
       <div className={styles.button}>
           <Dropdown/></div>
    </div>
};