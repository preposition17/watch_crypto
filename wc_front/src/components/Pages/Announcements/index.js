import {useEffect, useState} from "react";
import Box from "@mui/material/Box"

import api from "services/api"

import AnnouncementItem from "./AnnouncementItem";

export default function Announcements() {

    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        api.announcements()
            .then(response => setAnnouncements(response.data));
    }, []);

    return (
        <Box>
            <h1>Watch Crypto</h1>
            {
                announcements.map((announcement, index) => {
                    return (<AnnouncementItem key={index} announcement={announcement}/>)
                })
            }
        </Box>
    )

}
