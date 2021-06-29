import LeftNavigation from './LeftNavigation';
import List from './List';
import Grid from '@material-ui/core/Grid';

function ToDoBody() {

    return <div>
        <Grid container>
            <Grid item sm={2}>
                <LeftNavigation></LeftNavigation>
            </Grid>
            <Grid item sm={10}>
                <List></List>
            </Grid>
        </Grid>
       
      
    </div>
}

export default ToDoBody;