import DataTable from './List.js';
import LeftNavigation from './LeftNavigation.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   paddingTop:'20px',
   background:'lightgrey'
  }
}));

function ToDoBody(){
   const classes = useStyles();

    return <div className={classes.root}>

	       <Grid container>
		        <Grid item sm={3}>
		         <LeftNavigation></LeftNavigation>
		        </Grid>
		        <Grid item sm={9}>
		         <DataTable></DataTable>
		        </Grid>
          </Grid>
    </div>

}
export default ToDoBody; 