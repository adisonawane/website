import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import x from "./try.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Born and brought up in India. I pursued my bachelor\'s degree in Computer Engineering from the University of Mumbai. After graduation, I worked at Capgemini as an Associate Consultant. I have accumulated expertise in SAP Business Warehousing, where I performed daily Data loading and Data migration.',
    imgPath:x,
  },
  {
    label: 'I decided to pursue my master\'s in Information Systems at Stevens Institute of Technology here in New Jersey and have grown immense interest in Python and its Application. I acquired expertise in programming foundations in Python and developed projects in Machine Learning and Artificial Intelligence.  I freshly began learning ReactJS, Firebase, and Flask for developing Full Stack Web Applications together with Data Analytics and Visualization.',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Aloof from academics, I have a piercing interest in Dance, Cooking, and Football. I performed in several dance competitions. I represented my college football team in my bachelor\'s.',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'There is always an opportunity in adversity.The most crucial aspect of succeeding in a career is to add value to the people with who you work.The road to success and feeling satisfied is not in achieving the goal always but to enjoy the process.Expressing gratitude and appreciation for what we have in present will provide us better in future.',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    fontSize:'1.5 rem',
  },
  img: {
    height: 655,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  label: {
      fontSize:'1rem',
  }
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.label}>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="progress"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            
          </Button>
        }
      />
    </div>
  );
}

export default Carousel;
