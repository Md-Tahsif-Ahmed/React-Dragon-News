import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className=''>
             <img src={logo} alt="" />
             <p className='font-poppins text-gray-500'>Journalism Without Fear or Favour</p>
             <p className='font-poppins text-gray-700 font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;