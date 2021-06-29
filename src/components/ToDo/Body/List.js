import TaskList from './List.json';
import ListItem from './ListItem';

function List() {

    return <div>
       {
           TaskList.map((task) => {
               return <ListItem task={task} key={task.title}></ListItem>
           })
       }
    </div>
}

export default List;