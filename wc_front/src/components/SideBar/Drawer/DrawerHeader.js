import Box from "@mui/material/Box";

export function DrawerHeader ({theme, children}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            backgroundColor: "primary.dark",
            ...theme.mixins.toolbar,
        }}>
            {children}
        </Box>
    )
}
