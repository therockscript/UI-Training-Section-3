import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useDispatch } from "react-redux";
import { registerTaskAction } from "../store/slices/AuthSlice";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
	flexGrow: 1,
	marginTop: "20px",
	 border: "2px solid lightblue",
	 marginTop: "20px",
	 paddingTop : "25px",
     paddingBottom : "25px",
     marginLeft :"380px",
     marginRight :"380px",
	'& input': {
		width: '100%'
	}
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: '15ch'
    // },
  },
}));




function AddRegister(){
	  const classes = useStyles();
	  const dispatch = useDispatch();
	  const history = useHistory();

	  function onSaveRegisterForm(e) {
			console.log(e)
		    e.stopPropagation();
		    e.preventDefault();
    
		    const Forminputs = {
		      name: e.target.name.value,
		      email: e.target.email.value,
		      password: e.target.password.value,
		      age: e.target.age.value
		    }
		    console.log("input value=>", Forminputs)
               dispatch(registerTaskAction(Forminputs))
  }

  const handleRoute = () =>{ 
    history.push("/login");
  }
  

	return <div>
		<Container maxWidth="lg">
			<form className={classes.root} autoComplete="on" onSubmit={onSaveRegisterForm}>
				<Grid container spacing={3}>
  					<Grid item xs={12}>
		       			<TextField id="outlined-basic" type="text" label="Name" name="name" variant="outlined" required/>
					</Grid>
					<Grid item xs={12}>
		       			<TextField id="outlined-basic" type="text" label="Email" name="email" variant="outlined" required/>
					</Grid>
					<Grid item xs={12}>
		       			<TextField id="outlined-basic" type="password" label="Password" name="password" variant="outlined" required/>
					</Grid>
					<Grid item xs={12}>
		       			<TextField id="outlined-basic" type="number" label="Age" name="age" variant="outlined" required/>
					</Grid>
					<Grid item xs={12}>
		       			<Button type="submit" variant="contained" color="primary">
				  			Register
			  			</Button>&nbsp;

			  			<Button type="submit" variant="contained" color="primary" onClick={handleRoute}>
				  			Login
			  			</Button>
					</Grid>
			  </Grid>

		    </form>
		</Container>
	</div>
}
export default AddRegister