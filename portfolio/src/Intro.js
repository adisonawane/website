import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import a from './Aditya.jpg';
import Avatar from '@material-ui/core/Avatar';
const useStyles = theme => ({
    intro: {
        backgroundColor: '#152336',
        padding: "10% 5% 5% 5%",
        borderRadius: 0,
    }
});
class Intro extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className="about" elevation={0} className={classes.intro} square>
                    <div>
                        <Avatar variant="rounded" alt="" src={a} className="avatar" ></Avatar>
                    </div>
                    <div className="intro"><b> I am Aditya!</b></div>


                </Paper>
                

            </div>
        )
    }
}

export default withStyles(useStyles)(Intro);