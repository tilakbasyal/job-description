import React, { Component } from 'react';
import { Card, CardMedia, withStyles, Typography, Button, Chip, Paper, Toolbar, AppBar, IconButton, Grid, CardContent } from "@material-ui/core";
import { Fragment } from 'react';
import image from '../images/image1.jpeg';
import MenuIcon from '@material-ui/icons/Menu';



const styles = theme => ({
  card: {
    position: 'relative', 
    zIndex : 1,
    // display: 'flex',
  },
  paper: {
    width: 90 + `%`,
    marginTop: 0,
    // marginBottom: 2 + `em`,
    marginLeft: `auto`,
    marginRight: `auto`,

  },
  media: {
    height: 250,
  },
  spacebelow: {
    marginBottom : 1+`rem`,
   
  },
  rightPart: {
    paddingLeft: 1.5 + `em`,
    paddingRight: 1 + `em`,
    paddingTop: 2 + `em`, 
  },
  appBar: {
    marginBottom: 2 + `rem`,
  },
  overlay: {
    position: 'absolute',
    top: '200px',
    left: '20px',
    color: '#fff',
    zIndex : 10,
 },
 cardcontentForLeft : {
   paddingTop : 1+`rem`,
   paddingLeft : 1.5+`rem`,
   backgroundColor : `#fafafa`,
   margin: 0,
 },
 cardcontentForRight : {
  paddingTop : 1+`rem`,
  paddingLeft : 1.5+`rem`,
  // backgroundColor : `#fafafa`,
  margin: 0,
},
 gridlists : {
  paddingTop : 3+`rem`,
  paddingBottom : 3+`rem`,
  paddingLeft : 3+`rem`,
  paddingRight : 3+`rem`
 },
 zeropadding : {
   padding : 0 + `!important`,
   margin : 0
 },
 imageOverlay : {
   height : 250,
   backgroundColor : `gray`,
   opacity : 0.4,
   zIndex : 5,

 }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton aria-label="Menu" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" align="right">Home</Typography>
          </Toolbar>

        </AppBar>


        <Paper className={classes.paper}>
          <Card className = {classes.card}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Random Photography"
            >
             <div className = {classes.imageOverlay} >              
            </div>
            <div className={classes.overlay}>
                  <h1>Job Title</h1>
              </div>
           
            </CardMedia>


            <CardContent className = {classes.zeropadding}  >
              <Grid container>
                <Grid item xs={12} md={3} className = {classes.cardcontentForLeft} >
                  <Typography className= {classes.spacebelow} gutterBottom  >Category:  Fulltime</Typography>
                  <Typography className= {classes.spacebelow} gutterBottom  >Location: 
                   <Chip href="#chip" clickable label="Kathmandu" />
                    </Typography>
                  <Typography className= {classes.spacebelow} gutterBottom  >Salary:  10,000-15,000</Typography>
                  <Typography className= {classes.spacebelow} gutterBottom  >Nature: Fulltime</Typography>
                  <Typography className= {classes.spacebelow} gutterBottom  >Deadine:  20 December 2018</Typography>
                </Grid>

                <Grid xs={12} md={9}  className = {classes.cardcontentForRight} >
                  <Typography  variant="body2" gutterBottom>Job Description:</Typography>
                  <Typography  className= {classes.spacebelow}>We are looking for a self-motivated Business Administrator with strong leadership skills and a thorough understanding of business operations to facilitate and optimize our business processes. The Business Administrator’s duties will include overseeing and analyzing financial operations, approving purchases and expenditure, mediating between staff and other executives, appointing heads of departments, marketing and promoting the business, and facilitating training programs. </Typography>
                  <Typography variant="body2" gutterBottom>Apply Instrutions:</Typography>
                  <Typography gutterBottom>Eligible candidates can send their C.V. at: something@whatever.com</Typography> 
                  <Typography >OR</Typography>
                  <Button variant="contained" color="primary" >Apply Now</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>

      </Fragment>
    )
  }
}

export default withStyles(styles)(Header);
