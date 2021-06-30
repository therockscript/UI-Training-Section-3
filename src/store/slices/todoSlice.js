import { createSlice } from '@reduxjs/toolkit';
import TaskList from '../../data/List.json';
import { getTaskList } from '../../api/API';

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

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      isLoading: false,
      list: [],
      selectedTodoList: {},
      error: ""
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
      }
    }
});

export const { getTaskListSuccess, getTaskListError, setIsLoading } = todoSlice.actions
export default todoSlice.reducer;
