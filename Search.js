import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    textField: {
        width: "80%",
        paddingBottom :"10px"
    }
}));

function Search(){
	const styles = useStyles();
    return  <TextField id="outlined-basic"
             label=""
             variant="outlined" 
             className={styles.textField}
             placeholder="Search.."/>
}
export default Search;