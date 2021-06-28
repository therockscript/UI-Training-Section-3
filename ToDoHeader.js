import AppName from './AppName';
import Search from './Search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'lightblue',
    paddingTop:'10px',
    Width:'100%'
  }
}));



function ToDoHeader(){
	 const classes = useStyles();

    return <div className={classes.root}>

	       <Grid container>
		        <Grid item sm={2}>
		         <AppName></AppName>
		        </Grid>
		        <Grid item sm={10}>
		          <Search></Search>
		        </Grid>
          </Grid>
    </div>
}
export default ToDoHeader;