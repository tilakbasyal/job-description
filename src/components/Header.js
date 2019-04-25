import React, { Component } from 'react';
import { Card, CardMedia, withStyles, Typography, Button, Chip, Paper, Toolbar, AppBar, IconButton, Grid } from "@material-ui/core";
import { Fragment } from 'react';
import image from '../images/image1.jpeg';
import MenuIcon from '@material-ui/icons/Menu';



const styles = theme => ({
  card: {
    display: 'flex',
    // maxWidth: 100+`%`,
  },
  paper: {
    width: 90 + `%`,
    marginTop: 0,
    marginBottom: 2 + `em`,
    marginLeft: `auto`,
    marginRight: `auto`,

  },
  media: {
    height: 150,
  },
  leftPart: {
    // minWidth: 25 + `%`,
    // display: 'flex',
    // flexDirection: 'column',
    paddingLeft: 1.5 + `em`,
    paddingTop: 2 + `em`,
    // paddingBottom : 2+`em`,
    // justifyContent : 'center',
    // alignItems : 'center',
  },
  rightPart: {
    // minWidth: 70 + `%`,
    paddingLeft: 1.5 + `em`,
    paddingRight: 1 + `em`,
    paddingTop: 2 + `em`,
    // paddingBottom : 2+`em`,
  },
  button: {
    marginBottom: .5 + `rem`,
  },
  appBar: {
    marginBottom: 2 + `rem`,
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
          <Card>
            <CardMedia
              className={classes.media}
              image={image}
              title="Random Photography"
            ><Typography variant="display3" align="center" color="inherit">Job Title</Typography></CardMedia>
          </Card>

          <Grid container>

          <Grid item xs={12} md={3} className={classes.leftPart}  >            
            <Typography variant="headline" gutterBottom>Location:  <Chip href="#chip"
              clickable label="Kathmandu" /></Typography>
            <Typography variant="headline" gutterBottom>Salary:  10,000-15,000</Typography>
            <Typography variant="headline" gutterBottom>Category:  <Chip label="Fulltime" /></Typography>
            <Typography variant="headline" gutterBottom>Nature: Fulltime</Typography>
            <Typography variant="headline" gutterBottom>Deadine:  20 December 2018</Typography>         
          </Grid>

          <Grid xs={12} md={9} className={classes.rightPart}>
            {/* <Card className={classes.rightPart}> */}
              <Typography variant="headline" gutterBottom>Job Description:</Typography>
              <Typography variant="subheading" gutterBottom>We are looking for a self-motivated Business Administrator with strong leadership skills and a thorough understanding of business operations to facilitate and optimize our business processes. The Business Administrator’s duties will include overseeing and analyzing financial operations, approving purchases and expenditure, mediating between staff and other executives, appointing heads of departments, marketing and promoting the business, and facilitating training programs. </Typography>
              <Typography variant="headline" gutterBottom>Apply Instrutions:</Typography>
              <Typography variant="subheading" gutterBottom>Eligible candidates can send their C.V. at something@whatever.com</Typography>
              <Typography variant="headline" >OR</Typography>
              <Button variant="contained" color="primary" className={classes.button} >Apply Now</Button>
            {/* </Card> */}
          </Grid>
          </Grid>          
        </Paper>

        <Paper className={classes.paper}>
          <Card>
            <CardMedia
              className={classes.media}
              image={image}
              title="Random Photography"
            ><Typography variant="display3" align="center" color="inherit">Job Title</Typography></CardMedia>
          </Card>

          <Grid container>

          <Grid item xs={12} md={3} className={classes.leftPart}  >            
            <Typography variant="headline" gutterBottom>Location:  <Chip href="#chip"
              clickable label="Kathmandu" /></Typography>
            <Typography variant="headline" gutterBottom>Salary:  10,000-15,000</Typography>
            <Typography variant="headline" gutterBottom>Category:  <Chip label="Fulltime" /></Typography>
            <Typography variant="headline" gutterBottom>Nature: Fulltime</Typography>
            <Typography variant="headline" gutterBottom>Deadine:  20 December 2018</Typography>         
          </Grid>

          <Grid item xs={12} md={9} className={classes.rightPart}>
            {/* <Card className={classes.rightPart}> */}
              <Typography variant="headline" gutterBottom>Job Description:</Typography>
              <Typography variant="subheading" gutterBottom>We are looking for a self-motivated Business Administrator with strong leadership skills and a thorough understanding of business operations to facilitate and optimize our business processes. The Business Administrator’s duties will include overseeing and analyzing financial operations, approving purchases and expenditure, mediating between staff and other executives, appointing heads of departments, marketing and promoting the business, and facilitating training programs. </Typography>
              <Typography variant="headline" gutterBottom>Apply Instrutions:</Typography>
              <Typography variant="subheading" gutterBottom>Eligible candidates can send their C.V. at something@whatever.com</Typography>
              <Typography variant="headline" >OR</Typography>
              <Button variant="contained" color="primary" className={classes.button} >Apply Now</Button>
            {/* </Card> */}
          </Grid>
          </Grid>          
        </Paper>

        {/* <Paper className={classes.paper}>
          <Card>
            <CardMedia
              className={classes.media}
              image={image}
              title="Random Photography"
            ><Typography variant="display3" align="center" color="inherit">Job Title</Typography></CardMedia>
          </Card>

          <div className={classes.card}>
            <Card className={classes.leftPart}>
              <Typography variant="headline" gutterBottom>Location:<Chip href="#chip"
                clickable label="Kathmandu" /></Typography>
              <Typography variant="headline" gutterBottom>Salary:10,000-15,000</Typography>
              <Typography variant="headline" gutterBottom>Category:<Chip label="Fulltime" /></Typography>
              <Typography variant="headline" gutterBottom>Nature: Fulltime</Typography>
              <Typography variant="headline" gutterBottom>Deadine:20 December 2018</Typography>
            </Card>

            <Card className={classes.rightPart}>
              <Typography variant="headline" gutterBottom>Job Description:</Typography>
              <Typography variant="subheading">We are looking for a self-motivated Business Administrator with strong leadership skills and a thorough understanding of business operations to facilitate and optimize our business processes. The Business Administrator’s duties will include overseeing and analyzing financial operations, approving purchases and expenditure, mediating between staff and other executives, appointing heads of departments, marketing and promoting the business, and facilitating training programs. </Typography>
              <Typography variant="headline" gutterBottom>Apply Instrutions:</Typography>
              <Typography variant="subheading">Eligible candidates can send their C.V. at something@whatever.com</Typography>
              <Typography variant="headline" >OR</Typography>
              <Button variant="contained" color="primary" className={classes.button} >Apply Now</Button>
            </Card>
          </div>
        </Paper> */}

      </Fragment>
    )
  }
}

export default withStyles(styles)(Header);
