import AppName from './AppName';
import TodoSearch from './Search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'white',
      marginTop: '15px',
      paddingBottom: '15px',
      borderBottom: "1px solid grey"
    }
}));

function ToDoHeader() {
    const style = useStyles();

    return <div className={style.root}>
        <Grid container>
            <Grid item sm={2}>
                <AppName />
            </Grid>
            <Grid item sm={10}>
                <TodoSearch />
            </Grid>
        </Grid>
    </div>
}

export default ToDoHeader;