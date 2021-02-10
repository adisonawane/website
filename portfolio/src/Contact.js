import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = theme => ({
    root: {
        padding:'10% 0%',
        backgroundColor: '#152336',
        maxWidth: '100%',
        marginTop: '10%'    
    },
    tabsBar: {
        color: '#f50057',
        backgroundColor: '#fff',
        boxShadow: 'none',
    },
    container: {
        margin: 0,
        padding: 0
    },
    tabRoot: {
        color: '#fff',
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 15
    },
    gridText: {
        textAlign: "center",
        margin: 10
    },
    containerSpacing: {
        margin: 500
    },
    skillsLabel:{
        textAlign: 'center',
          color:'#fff',
          fontWeight:600
      },
      containerTabs:{
          margin:20
      },
      contactSection:{
        color:'#fff',
        fontSize:12,
        textAlign:'center',
        fontWeight:400,
        marginBottom:21
    },



});
export default withStyles(useStyles)(class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Container className={classes.root}>
                <div className={classes.containerTabs}>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        
                        <Grid item xs={4} className={classes.skillsLabel}>
                            <Link href="https://github.com/adisonawane" >

                                <div><GitHubIcon fontSize="large" className={classes.tabRoot}/></div>
                                <div className={classes.contactSection}>Checkout my projects on Github</div>
                            </Link>
                        </Grid>
                        <Grid item xs={4} className={classes.skillsLabel}>
                            <Link href="https://www.linkedin.com/in/adityasonawane/" >

                                <div><LinkedInIcon fontSize="large" className={classes.tabRoot} /></div>
                                <div className={classes.contactSection}>Connect on LinkedIn!</div>

                            </Link>
                        </Grid>
                        <Grid item xs={4} className={classes.skillsLabel}>
                            <Link href="mailto:adityasonawane0194@gmail.com?" >

                                <div><MailIcon fontSize="large" className={classes.tabRoot}/></div>
                                <div className={classes.contactSection}>Have  queries? Feel free to mail!</div>
                            </Link>
                        </Grid>

                    </Grid>



                </div>
            </Container>
        )
    }
})
