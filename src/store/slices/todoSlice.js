import { createSlice } from '@reduxjs/toolkit';
import { getTaskList, addTask, deleteTask, updateTaskStatus } from '../../api/API';

export const getTaskListAction = () => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    const list = await getTaskList();
    dispatch(getTaskListSuccess(list))
    dispatch(setIsLoading(false));
  } catch(error) {
    dispatch(getTaskListError("Error occured while retrieving task list"));
    dispatch(setIsLoading(false));
  }
}

export const updateTaskStatusAction = (taskId, status) => async dispatch => {
  try {
    dispatch(setIsLoading(true));
    await updateTaskStatus(taskId, status);
    dispatch(setIsLoading(false));
    dispatch(getTaskListAction());
  } catch(error) {
    dispatch(setIsLoading(false));
  }
}

export const deleteTaskAction = (taskId) => async dispatch => {
  try {
    dispatch(setIsLoading(true));
    await deleteTask(taskId);
    dispatch(setIsLoading(false));
    dispatch(getTaskListAction());
  } catch (error) {
    dispatch(setIsLoading(false));
  }
}

export const addTaskAction = (task) => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    await addTask(task);
    dispatch(setIsLoading(false))
    dispatch(setShowList(true))
    dispatch(setShowForm(false))
    dispatch(getTaskListAction())
  } catch (error) {
    dispatch(setIsLoading(false))
  }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      isLoading: false,
      list: [],
      selectedTodoList: {},
      error: "",
      showList: true,
      showForm: false,
      showRegisterForm: false
    },
    reducers: {
      getTaskListSuccess: (state, action) => {
        state.list = action.payload;
      },
      getTaskListError: (state, action) => {
        state.error = action.payload;
      },
      setIsLoading: (state, action) => {
        state.isLoading =action.payload;
      },
      setShowList: (state, action) => {
        state.showList = action.payload;
      },
      setShowForm: (state, action) => {
        state.showForm = action.payload;
      },
      setshowRegisterForm: (state, action) => {
        state.showRegisterForm = action.payload;
      }
    }
});

export const { getTaskListSuccess, getTaskListError, setIsLoading, setShowForm, setShowList, setShowRegisterForm } = todoSlice.actions
export default todoSlice.reducer;
