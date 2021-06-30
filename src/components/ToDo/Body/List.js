import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import { getTaskListAction }  from '../../../store/slices/todoSlice';
import CircularProgress from '@material-ui/core/CircularProgress';

function List() {
    const dispatch = useDispatch();

    const TaskList =  useSelector(state => state.todo.list);
    const TaskListError = useSelector( state => state.todo.error);
    const isTaskLoading = useSelector(state => state.todo.isLoading);

    useEffect(function() {
        console.log("List component use effect");
        dispatch(getTaskListAction());
    }, [])

    return <div>
        {TaskListError && 
            <h1>{TaskListError}</h1>
        }
        {isTaskLoading &&
            <CircularProgress />
        }
        {TaskList &&
           TaskList.map((task) => {
               return <ListItem task={task} key={task.title}></ListItem>
           })
       }
    </div>
}

export default List;