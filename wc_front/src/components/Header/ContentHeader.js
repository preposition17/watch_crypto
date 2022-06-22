import Box from "@mui/material/Box";


export function ContentHeader ({theme, children}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        }}>
            {children}
        </Box>
    )
}
