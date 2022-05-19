import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Button,
    Grid,
    InputAdornment,
    TextField,
    Box
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 32,
        marginLeft: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
        margin: 6,
    },
    TextInfo: {
        display: 'block',
        marginTop: theme.spacing(5),
        fontFamily: 'Arial',
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <img src="/images/logo-netflix.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <Button className={classes.button}
                        variant="outlined"
                        href="https://www.netflix.com/br/"
                        color='primary'>
                        Get started!
                    </Button>
                    <Button className={classes.button}
                        variant="contained"
                        color='primary'>
                        Sign in
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Grid container style={{ minHeight: '100vh' }}>
                    <Grid item xs={12} sm={6}>
                        <img src="/images/wallpaper-netflix.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="brand" />
                    </Grid>
                    <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: 10 }}>
                        <div />
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300, }}>
                            <Grid container justify="center">
                                <img
                                    src="/images/logo-netflix.png"
                                    width={200}
                                    alt="logo" />
                            </Grid>
                            <TextField
                                label="Username"
                                margin="normal"
                                InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
                            <div style={{ height: 20 }} />
                            <Button color="primary" variant="contained">
                                Sign in
                            </Button>
                            <div style={{ height: 20 }} />
                            <Button href="https://www.netflix.com/br/">Interested in joining?</Button>
                            <div className={classes.TextInfo}>
                                <h1>Filmes, séries e muito mais. Sem limites.</h1>
                                <Box>
                                    Assista onde quiser. Cancele quando quiser. Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.
                                </Box>
                            </div>
                        </div>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                <Button color="primary" href="https://www.netflix.com/br/">Go to community page</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">Forgot password?</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Home;