import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { useDispatch } from "react-redux";
import { loginAction } from "../../store/slices/AuthSlice";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    "& input": {
      width: "100%",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();


  function onLogin(e) {
    console.log(e);
    e.stopPropagation();
    e.preventDefault();

    const Forminputs = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("input value=>", Forminputs);
    dispatch(loginAction(Forminputs, history));
  }

  return (
    <div>
      <Container maxWidth="lg">
        <form className={classes.root} autoComplete="on" onSubmit={onLogin}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                type="text"
                label="Email"
                name="email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
export default Login;
