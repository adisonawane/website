import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = skill => ({
    skills: {
        textAlign: "center",
        color: "#0095cf",
    },
    skillsLabel: {
        textAlign: "center",
        color: "#0095cf",
        fontWeight: 600,
        paddingBottom:'10%',
        fontSize:'1rem',
        wordBreak:'break-word'
    },
    containerTabs: {
        margin: 20
    },
    skillsSection: {
        color: "#3f51b5",
        fontSize: 12,
        textAlign: "center",
        marginTop: 21,
        marginBottom: 21
    },
    skillName:{
        fontSize:'1.2rem',
        fontWeight:'700',
        color:'#427ab1',
        padding:'60% 0% 20% 0%'
    }
})

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progLang: null
        }
    }
    componentDidMount() {
        axios.get('https://us-central1-aditya-portfolio-6de9f.cloudfunctions.net/api/getskills').then((data) => {
            console.log(data.data[0].skillname)
            this.setState({
                skills: data.data[0].skillname.skills
            })
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.containerTabs}>
                <Grid container direction="row"
                    justify="center"
                    alignItems="flex-start" spacing={0}  >
                    {this.state.skills ? this.state.skills.map((data_row, j) =>
                            <Grid item xs={6} sm={3} className={classes.skillsSection} key={j}>
                                <div className={classes.skillName}>{data_row.skill}</div>
                                
                                {data_row.value.map((data, j) =>
                                    <Grid container key={j} direction="row"
                                        justify="center"
                                        alignItems="center" spacing={3} >
                                        <Grid item xs={12} className={classes.skillsLabel}>
                                            {data.name}
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
               
            )
                    : <div>None</div>
                }
                </Grid>
            </div >
        )
    }
}
export default withStyles(useStyles)(Skills)