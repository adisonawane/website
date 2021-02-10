import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
const useStyles = theme => ({

    root: {
    },
    heading: {
        fontSize: theme.typography.pxToRem(12),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        color: '#427ab1'
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
        padding: 0
    },
    column: {
        flexBasis: '25%',
    },
    helper: {
        padding: 0,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },

    },
    chipsRoot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    paper: {
        padding: '20% 10% 10% 10%',
    },
    division: {
        margin: '5% 20%',
        paddingTop:'20%'
    },
    leftButton:{
        
        color:'#fff',
        backgroundColor:'#427ab1'
    },
    rightButton:{
        color:'#427ab1',
        borderColor:'#427ab1'
    },
    gridLeft:{
        textAlign:'right',
    },
    gridRight:{
        textAlign:'left',
    }

});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }

    }

    componentDidMount() {
        axios.get('https://us-central1-aditya-portfolio-6de9f.cloudfunctions.net/api/project').then((data) => {
            //console.log(data)
            this.setState({
                project: data.data
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={0}>
                    {this.state.project ? this.state.project.map(data =>




                        <Grid item xs={6} key={data.project_name} className={classes.root}>
                            <Paper className={classes.paper} elevation={0}>
                                <div >
                                    <Typography className={classes.secondaryHeading} >{data.project_name}</Typography>
                                </div>
                                <div className={classes.helper}>
                                    <Typography variant="caption">
                                        <List >
                                            {data.project_desc.map(descData =>
                                                <ListItem key={descData}>
                                                    <ListItemText secondary={descData} />
                                                </ListItem>)}
                                        </List>
                                    </Typography>
                                </div>
                                <Grid container spacing={1} >
                                    <Grid item xs={12} sm={6} className={classes.gridLeft}>
                                        <Button variant="contained" className={classes.leftButton} disableElevation href="https://www.linkedin.com/in/adityasonawane/">
                                            See Project
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className={classes.gridRight}>
                                        <Button variant="outlined" className={classes.rightButton} disableElevation href="https://www.linkedin.com/in/adityasonawane/">
                                            Learn more
                                        </Button>
                                    </Grid>
                                </Grid>

                                <div className={classes.division}><Divider /></div>
                            </Paper>
                            
                        </Grid>




                    ) : <div>Loading...</div>}
                </Grid>
            </div>
        )
    }
}
export default withStyles(useStyles)(Projects);