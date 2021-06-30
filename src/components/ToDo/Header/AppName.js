import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import AddForm from '../Body/AddForm';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function AppName(props) {
	const [showAddForm,setShowAddForm]=useState(false);
	const [showAddButton, setShowAddButton] =useState(true)
	const classes = useStyles();
    return  <Button
         type="button"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={onAddForm}
      >
        ADD TASK
      </Button> 
    
  function onAddForm(e){
   setShowAddForm(true);
   setShowAddButton(false);
}    

   {/*<Typography variant="h6" component="h6">
       Todo List
    </Typography>*/}

}

export default AppName;