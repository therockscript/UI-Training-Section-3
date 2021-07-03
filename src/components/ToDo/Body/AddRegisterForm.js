import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { registerTaskAction } from "../../../store/slices/AuthSlice";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch'
    },
  },
}));




function AddRegister(){
	  const classes = useStyles();
	  const dispatch = useDispatch();

	  function onSaveRegisterForm(e) {
			console.log(e)
		    e.stopPropagation();
		    e.preventDefault();
    
		    const Forminputs = {
		      Name: e.target.name.value,
		      Email: e.target.email.value,
		      Password: e.target.password.value,
		      Age: e.target.age.value
		    }
		    console.log("input value=>", Forminputs)
               dispatch(registerTaskAction(Forminputs))
  }

	return <div>
			<form className={classes.root} noValidate autoComplete="off" onSubmit={onSaveRegisterForm}>
		       <TextField id="outlined-basic" label="Name" name="name" variant="outlined" />
		       <TextField id="outlined-basic" label="Email" name="email" variant="outlined" />
		       <TextField id="outlined-basic" label="Password" name="password" variant="outlined" />
		       <TextField id="outlined-basic" label="Age" name="age" variant="outlined" />
		       <Button variant="contained" color="primary">
				  Register
			  </Button>

		    </form>
	      </div>
}
export default AddRegister