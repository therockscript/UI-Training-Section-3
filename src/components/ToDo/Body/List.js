import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import { getTaskListAction }  from '../../../store/slices/todoSlice';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddForm from './AddForm';
import {useState} from 'react';
import AddRegister from './AddRegisterForm'

function List() {
    const dispatch = useDispatch();

    const TaskList =  useSelector(state => state.todo.list);
    const TaskListError = useSelector( state => state.todo.error);
    const isTaskLoading = useSelector(state => state.todo.isLoading);
    const showList = useSelector(state => state.todo.showList);
    const showForm = useSelector(state => state.todo.showForm);
    const showRegisterForm = useSelector(state => state.Auth.showRegisterForm);

    // const [showAddForm,setShowAddForm]=useState(false);
    // const [showAddButton, setShowAddButton] =useState(true);
    // const [showList, setShowList] = useState(true);

    useEffect(function() {
        console.log("List component use effect");
        dispatch(getTaskListAction());
    }, [])

    function onAddForm(e){
    //    setShowAddForm(true);
    //    setShowAddButton(false);
    //    setShowList(false);
     }   


    return <div>
        {showForm && <AddForm onAddForm={onAddForm}></AddForm>}

          {showRegisterForm && <AddRegister></AddRegister>}

        {TaskListError && 
            <h1>{TaskListError}</h1>
        }
        {isTaskLoading &&
            <CircularProgress />
        }
        {showList && TaskList &&
           TaskList.map((task) => {
               return <ListItem task={task} key={task.title}></ListItem>
           })
       }
    </div>
}

export default List;