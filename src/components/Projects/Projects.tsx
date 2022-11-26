import styles from "./Projects.module.scss";
import Typography from '@mui/material/Typography';
import { ProjectItems } from "../ProjectItems/ProjectItems";
import { Dropdown } from "../Dropdown/Dropdown";

export const Projects = () => {
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
            <ProjectItems title={'Кушать кари'}/>
            <div className={styles.button}>
                <Dropdown></Dropdown>            
            </div>
        </div>
    </div>
    
};