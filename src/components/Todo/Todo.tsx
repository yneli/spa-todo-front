import styles from './Todo.module.scss';
import Typography from '@mui/material/Typography';
import { Dropdown } from "../Dropdown/Dropdown";
import { DragAndDrop } from '../DragAndDrop/DragAndDrop';
import Button from '@mui/material/Button';
import { Selector } from '../Select/Selector';

export const Todo = () => {
    return <div className={styles.todo}>
       <div className={styles.left}>
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
        <Dropdown/>
          </div>
          <DragAndDrop></DragAndDrop>
       </div>
       <div className={styles.right}>
       <div className={styles.maintext}>
       <Typography
              variant="h6"
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
          <Button variant="contained">Subtask</Button>
         <div className={styles.subtask}>
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
        <Selector></Selector>
         </div>
       </div>
    </div>
};