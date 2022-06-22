import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ReactMarkdown from 'react-markdown'

import "./style.css"


export default function AnnouncementItem({announcement}) {
    const create_time = new Date(announcement.create_time);

    return (
        <Box className={"announcement-item"}>
            <h2>{announcement.title}</h2>
            <ReactMarkdown>{announcement.content}</ReactMarkdown>
            <strong>{announcement.project.name}</strong><span> · </span><span>{create_time.toLocaleDateString()}</span>
        </Box>
    )
}
