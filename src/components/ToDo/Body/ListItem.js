import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import { Star, Error } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';



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

     
    function handleRadioChange() {

    }


    return <div>         
    <Paper className={classes.root} variant="outlined" elevation={3}  >

        <Grid container>
            <Grid item sm={1}>
                <Radio
                    checked={true}
                    onChange={handleRadioChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </Grid>
            <Grid item sm={9} className={classes.taskDetails}>
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
            </Grid>
        </Grid>
        </Paper>
        
        </div>
}

export default ListItem;