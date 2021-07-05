
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Message(props) {
    
    const show = useSelector(state => state.message.show);
    const message = useSelector(state => state.message.message);
    const severity = useSelector(state => state.message.severity);

    return <Snackbar open={show} autoHideDuration={6000}>
        <Alert severity={severity}>
            {message}
        </Alert>
    </Snackbar>
}

export default Message;