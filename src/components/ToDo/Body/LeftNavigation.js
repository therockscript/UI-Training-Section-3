import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppName from '../Header/AppName';
import MenuJson from './Menu.json';
import { Error, Star, Schedule, Today, Done, Delete } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
}));

function LeftNavigation() {
    const classes = useStyles();
    return <div>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
        <div className={classes.toolbar} />
        <AppName></AppName>
        <Divider />
        <List>
            {MenuJson.map(menu => {
                return <ListItem button key={menu.text}>
                <ListItemIcon>
                    {menu.icon === "Star" && <Star></Star>}
                    {menu.icon === "Error" && <Error></Error>}
                    {menu.icon === "Schedule" && <Schedule></Schedule>}
                    {menu.icon === "Today" && <Today></Today>}
                    {menu.icon === "Done" && <Done></Done>}
                    {menu.icon === "Delete" && <Delete></Delete>}
                </ListItemIcon>
                <ListItemText primary={menu.text} />
              </ListItem>
            })

            }
          {/* {['Starred', 'Priority', 'Scheduled', 'Today', 'Done', 'Deleted'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </div>
}

export default LeftNavigation;