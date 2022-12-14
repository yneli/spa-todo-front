import React from 'react';
import styles from './Todo.module.scss';
import Typography from '@mui/material/Typography';
import { Dropdown } from "../Dropdown/Dropdown";
import { DragAndDrop } from '../DragAndDrop/DragAndDrop';
import Button from '@mui/material/Button';
import { Selector } from '../Select/Selector';
import { Comment } from '../Comment/Comment';
import { useParams } from 'react-router-dom';
import { fetchCreateTask, getAllTask } from '../../redux/reducer/taskReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getProjectTitle } from '../../redux/reducer/projectReducer';

export const Todo = () => {
  let id = useParams();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getProjectTitle({id:id.id}));
    dispatch(getAllTask({id:id.id}));
  },[id.id]);
  const projTitle = useAppSelector(state => state.projectReducer.title);
  const itemsProj = useAppSelector(state => state.taskReducer.task);
  
    return <div className={styles.todo}>
       <div className={styles.left}>
       <div className={styles.maintext}>
           <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >{projTitle?.title}</Typography>
           <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 300,
                color: 'inherit',
                textDecoration: 'none',
              }}
        >{`- ${projTitle?.description
        } `}</Typography>
       </div>
       <div className={styles.button}>
       <Dropdown id={id.id} btnClick={fetchCreateTask} btnName={'create task'}/>
          </div>
       <DragAndDrop id={id.id}/>
       </div>
       <div className={styles.right}>
       <div className={styles.maintext}>
       <Typography
              variant="h6"
              noWrap
              component="div"
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
              component="div"
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
              component="div"
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
         <Comment></Comment>
       </div>
    </div>
};