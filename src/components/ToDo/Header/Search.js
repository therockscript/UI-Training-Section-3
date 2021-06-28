import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      border: '0px solid red'
    },
    textField: {
        width: "90%"
    }
}));

function TodoSearch() {
    const styles = useStyles();

    return <div className={styles.root}>
       <TextField
          id="outlined-password-input"
          label=""
          type="text"
          placeholder="Search..."
          variant="outlined"
          className={styles.textField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
    </div>
}

export default TodoSearch;