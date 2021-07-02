import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { setShowForm, setShowList } from '../../../store/slices/todoSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function AppName(props) {
	const classes = useStyles();
  const dispatch = useDispatch();

  function onAddForm() {
    dispatch(setShowForm(true));
    dispatch(setShowList(false));
  }

  return <div>
    <Button
         type="button"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={onAddForm}
      >
        ADD TASK
      </Button> 
    
          
        </div>   


  {/*<Typography variant="h6" component="h6">
       Todo List
    </Typography>*/}

   

}

export default AppName;