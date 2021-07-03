import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setShowList } from '../../../store/slices/todoSlice';
import {setShowRegisterForm} from '../../../store/slices/AuthSlice';

const useStyles = makeStyles((theme) => ({
    root: {
      border: '0px solid red'
    },
    textField: {
        width: "90%"
    },
    button: {
        marginLeft: "800px"
    }
}));

function TodoSearch() {
    const styles = useStyles();
    const dispatch = useDispatch();

    function RegisterForm(){
      dispatch(setShowRegisterForm(true));
      dispatch(setShowList(false));
    }

    return <div className={styles.root}>

    <Button color="Secondary" className={styles.button} onClick={RegisterForm}>Register</Button>

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