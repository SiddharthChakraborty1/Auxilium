import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const DisplayProducts = ({title, desc}) => {


    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: '#000000',
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 36,
            color: orange[500]
        },
        pos: {
            marginBottom: 12,
        },
        desc: {
            fontsize: 14,
            color: '#eee'
        },
        ButtonBox: {
            marginTop: '2vh', 
        },
        button:{
            minWidth: '12vw',
            backgroundColor: orange[500],
            color: '#eee'
        },
        button1:{
            minWidth: '12vw',
            backgroundColor: red[500],
            color: '#eee'
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>

                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                            <hr style={{ backgroundColor: 'orange', height: '2px' }} />
                            <Typography className={classes.desc}>
                                {desc}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.ButtonBox}>
                            <Typography className={classes.desc}>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Edit
                                </Button>
                                <br /><br />
                                <Button
                                    variant="contained"
                                    className={classes.button1}
                                >
                                    Delete
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}

export default DisplayProducts
