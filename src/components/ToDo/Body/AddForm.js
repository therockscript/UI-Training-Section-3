import TextFields from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../../store/slices/todoSlice";

function AddForm() {

  const dispatch = useDispatch();

  function onSaveTask(e) {
    console.log(e)
    e.stopPropagation();
    e.preventDefault();
    
    const task = {
      description: e.target.description.value
    }
    console.log("task value=>", task)
    dispatch(addTaskAction(task))
  }

  return (
    <Grid container spacing={3}>
      <Grid item>
        <form onSubmit={onSaveTask}>
          <TextFields
            id="outlined-full-width"
            name="description"
            label="Description"
            style={{ marginLeft: 40 }}
            placeholder="Add Task Here"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
export default AddForm;
