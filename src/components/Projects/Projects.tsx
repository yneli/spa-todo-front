import styles from "./Projects.module.scss";
import Typography from '@mui/material/Typography';
import { ProjectItems } from "../ProjectItems/ProjectItems";
import { Dropdown } from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import React from "react";
import { getAllProject } from "../../redux/projectReducer";

export const Projects = () => {
  const btnClick =  async ({title,description}:{title?:string, description?:string}) => {
      const obj = {title: title, description:description,};
      const data = await axios.post("/create/project", obj);
    return data;
  };
  const dispatch = useAppDispatch();
  React.useEffect(()=> {
    dispatch(getAllProject());
  },[]);
  const projItems = useAppSelector(state => state.projectReducer.projects);
  console.log(projItems);
  
  

    return <div className={styles.container}>
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
            >
              PROJECTS:
            </Typography>
            <div className={styles.items}>
            <Link to="/mytodo">
            
            {projItems?.map
            // @ts-ignore
            (item => <ProjectItems url={item._id} key={item._id} title={item.title}/>)}
            </Link>
            <div className={styles.button}>
                <Dropdown btnClick={btnClick} btnName={"Create project"}></Dropdown>            
            </div>
        </div>
    </div>;
};