import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Intro from "./Intro"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Carousel from "./Carousel"
import About from "./About"
import nyc from "./14.jpg"
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = theme => ({

    tabsBar: {
        color: '#427ab1',
        boxShadow: 'none',
        padding: 3,
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        boxShadow: '#ccc -6px -1px 6px 2px',
    },
    tabRoot: {
        minWidth: 10,
        fontSize: '0.6rem',
        fontWeight: 700,
        padding: 40,
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
    secondaryText: {
        color: '#fff'
    },
    container:{
        padding:0
    }



});
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            project: null
        }
        this.intro = React.createRef();
        this.skills = React.createRef();
        this.projects = React.createRef();
        this.contact = React.createRef();
        this.about = React.createRef();

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    nav = React.createRef();

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop / 3 - 60);
        console.log("gvvv")
        this.setState({
            transform: itemTranslate
        });
    };

    render() {
        const { classes } = this.props;


        const handleChange = (event, newValue) => {
            //console.log(newValue)
            this.setState({
                value: newValue
            }, () => {
                //console.log("out");
                if (this.state.value === 0) {
                    //console.log("dgd");
                    this.intro.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 1) {
                    //console.log("dgd");
                    this.projects.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 2) {
                    //console.log("dgd");
                    this.skills.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 3) {
                    //console.log("dgd");
                    this.contact.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 4) {
                    console.log("dgd");
                    this.about.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            })

        };
        return (

            <div className={classes.root}>
                
                <AppBar position="fixed" className={classes.tabsBar} >
                    <Tabs
                        value={this.state.value}
                        onChange={handleChange}
                        scrollButtons="on"
                        indicatorColor="secondaryText"
                        textColor="primaryText"
                        centered
                    >
                        <Tab label="About" icon={<InfoIcon />} classes={{ root: classes.tabRoot }} />
                        <Tab label="Projects" icon={<DescriptionIcon/>} classes={{ root: classes.tabRoot }} />
                        <Tab label="Skills" icon={<SchoolIcon/>} classes={{ root: classes.tabRoot }} />

                        <Tab label="Contact" icon={<PhoneIcon/>} classes={{ root: classes.tabRoot }} />


                    </Tabs>
                </AppBar>
                <Container className={classes.container} maxWidth="false">
                    <div ref={this.intro}><Intro /><Carousel/></div>
                    <div ref={this.projects}><Projects /></div>
                    <div ref={this.skills}><Skills /></div>
                    <div ref={this.contact}><Contact /></div>
                </Container>


            </div>
        );
    }
}


export default withStyles(useStyles)(Main);