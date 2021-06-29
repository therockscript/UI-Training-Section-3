import AppName from './AppName';
import TodoSearch from './Search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'white',
      marginTop: '15px',
      paddingBottom: '15px',
      borderBottom: "0px solid grey"
    }
}));

function ToDoHeader() {
    const style = useStyles();

    return <div className={style.root}>
        <Grid container spacing={3}> 
            <Grid item sm={3} >

            </Grid>
            <Grid item sm={6} >
                <TodoSearch />
            </Grid>
            <Grid item sm={3} >

            </Grid>
        </Grid>
    </div>
}

export default ToDoHeader;