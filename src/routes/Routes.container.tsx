import Routes from './Routes.component';
import { connect } from 'react-redux';

import { getUserLoggedIn } from '../redux/selectors';

type Props = {
    loggedIn?: boolean
}

const mapStateToProps = (state: any, ownProps: Props) => {
    console.log(state)
    return{
        loggedIn: getUserLoggedIn(state),    
    }
} 

export default connect(mapStateToProps, null)(Routes);