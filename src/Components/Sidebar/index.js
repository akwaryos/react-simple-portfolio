import './index.scss';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/bitmap.png';
const Sidebar =  () => {
    return(
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img width="100%" src = {Logo}  alt = "logo" />

    </Link>


</div>)
}

export default Sidebar