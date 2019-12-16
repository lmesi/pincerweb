import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../firebase'

//Style
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Registraion = (props) => {
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
   // const [repeatPasswordText, setRepeatPasswordText] = useState('');
    const [emailText, setEmailText] = useState('');
    const classes = useStyles();

    const handleRegistration = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailText, passwordText)
        .then(user => {
            user.user.updateProfile({displayName: usernameText}).then(()=> {
                props.setUser(user.user)
                props.history.push('/orders')
            })
            console.log(user)})
        .catch(function(error) {
            // Handle Errors here.
            console.log(error)
      });
    }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    variant="outlined"
                    required
                    fullWidth
                    id="RestaurantName"
                    label="Restaurant name"
                    autoFocus
                    onChange={e => setUsernameText(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="emailreg"
                    label="Email address"
                    autoComplete="email"
                    onChange={e => setEmailText(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="passwordreg"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password again"
                    type="password"
                    id="passwordregagain"
                    autoComplete="current-password"
                    onChange={e => setPasswordText(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleRegistration} >
                Sign Up
              </Button>
            </form>
          </div>
        </Container>
    )
}

export default withRouter(Registraion)
