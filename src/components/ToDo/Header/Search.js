import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowList } from "../../../store/slices/todoSlice";
import { logoutAction } from "../../../store/slices/authSlice";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0px solid red",
  },
  textField: {
    width: "90%",
  },
  button: {
    marginLeft: "800px",
  },
}));

function TodoSearch() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutAction(history));
    // history.push("/login");
  };

  return (
    <div className={styles.root}>
      {user && user.name}
      {user && user.email}
      <Button color="Secondary" className={styles.button} onClick={handleLogout}>
        Logout
      </Button>

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
  );
}

export default TodoSearch;
