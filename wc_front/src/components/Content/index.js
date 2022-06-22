import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import {Route, Routes} from "react-router-dom";

import pages from "components/Pages"
import LoginForm from "components/auth/LoginForm";


export default function Content() {
    return (
        <Container maxWidth="md">

            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Routes>
                        { pages.map((page, index) => (
                            <Route key={page.title} path={page.endpoint} element={<page.element/>}/>
                        )) }
                    </Routes>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h1>Menu</h1>
                    <LoginForm/>
                    <nav>
                        <ul>
                            {
                                pages.map((page, index) => (
                                    <li key={page.title}>
                                        <Button component={Link} to={page.endpoint}>{page.title}</Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </Grid>
            </Grid>
        </Container>
    )
}
