import Typography from '@mui/material/Typography';

export const ProjectItems = ({title}: {title?: string, }) => {
    return <>
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
            >
              {title}
            </Typography>
    </>;
};