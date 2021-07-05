import { createSlice } from '@reduxjs/toolkit';
import  registerUser, { loginUser } from '../../api/registerApi';
import { showMessageAction } from './messageSlice';
import { updateTokenHeader } from '../../api/API';

export const registerTaskAction = (Forminputs) => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    await registerUser(Forminputs);
    dispatch(setIsLoading(false))
    dispatch(setShowList(true))
    //dispatch(setShowRegisterForm(false))
  } catch (error) {
    dispatch(showMessageAction(error.message, "error"));
    dispatch(setIsLoading(false))
  }
}

export const loginAction = (Forminputs, history) => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    const response = await loginUser(Forminputs);
    if (response && response.token) {
      localStorage.setItem("todo_login_token", response.token);
      updateTokenHeader(response.token);
      history.push("/todo");
    }
    dispatch(setIsLoading(false))
    dispatch(setShowList(true))
    debugger;
  } catch (error) {
    dispatch(showMessageAction(error.message, "error"));
    dispatch(setIsLoading(false))
  }
}

export const logoutAction = (Forminputs, history) => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    const response = await loginUser(Forminputs);
    if (response && response.token) {
      localStorage.setItem("todo_login_token", response.token);
      updateTokenHeader(response.token);
      history.push("/login");
    }
    dispatch(setIsLoading(false))
    dispatch(setShowList(true))
    debugger;
  } catch (error) {
    dispatch(showMessageAction(error.message, "error"));
    dispatch(setIsLoading(false))
  }
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      isLoading: false,
      list: [],
      selectedTodoList: {},
      error: "",
      showList: true,
      showForm: false,
      showRegisterForm:false
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

export default AuthSlice.reducer;
export const {  getTaskListError, setIsLoading, setShowList, setShowRegisterForm } = AuthSlice.actions