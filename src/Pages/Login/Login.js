import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../firebase'

//Style
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
      height: '100%'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = (props) => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const classes = useStyles();

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                props.setUser(user.user)
                props.history.push('/orders')
            })
            .catch(function(error) {
                console.log(error.message)
            });
    }

    return (
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                onChange={e => setEmailText(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                onChange={e => setPasswordText(e.target.value)}
              />
              {/*<FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />*/}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              {/*<Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>*/}
            </form>
          </div>
        </Container>
    )
}

export default withRouter(Login)
