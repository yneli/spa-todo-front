import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const ProjectItems = ({title, url}: {title?: string, url?: string}) => {
    return <>
    <Link to={`/todo/${url}`}>
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
            >
              {title}
            </Typography>
            </Link>
    </>;
};