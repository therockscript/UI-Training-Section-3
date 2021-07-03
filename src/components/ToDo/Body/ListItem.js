import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Star, Error } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, updateTaskStatusAction } from '../../../store/slices/todoSlice';
import '../../../App.css'
const useStyles = makeStyles((theme) => ({
    root: {
      padding: "20px",
      marginBottom: "20px"
    },
    taskDetails: {
        textAlign: "left"
    },
    chip: {
        backgroundColor: "lightgreen",
        marginTop:"0.4rem",
        marginRight: "4px"
    }
   
  }));

function ListItem(props) {
 
    const classes = useStyles();
    const dispatch = useDispatch();
     
    function handleRadioChange() {

    }

    function onDeleteTask() {
        dispatch(deleteTaskAction(props.task._id));
    }

    function onCheckboxClick(event) {
        const value = event.target.checked;
        dispatch(updateTaskStatusAction(props.task._id, value));
    }


    return <div>         
    <Paper className={classes.root} variant="outlined" elevation={3}  >

        <Grid container>
            <Grid item sm={1} className="checkbox">
                <Checkbox
                    type="Checkbox"
                    checked={props.task.completed}
                    onClick={onCheckboxClick}
                    onChange={handleRadioChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </Grid>
            <Grid item sm={9} className={classes.taskDetails}>
                {/* <div>{props.task._id}</div> */}
                <div>{props.task.title}</div>
                <div>{props.task.description}</div> 
                <div>
                       {
                           props?.task?.labels?.map((label) => {
                               return <Chip label={label} className={classes.chip}/> 
                           })
                       }
               </div>



            </Grid>
            <Grid item sm={2}>
                <Error></Error>
                <Star></Star>
                <IconButton aria-label="delete" color="secondary" onClick={onDeleteTask}>
                    <DeleteIcon />
                </IconButton>  
            </Grid>
        </Grid>
        </Paper>
        
        </div>
}

export default ListItem;