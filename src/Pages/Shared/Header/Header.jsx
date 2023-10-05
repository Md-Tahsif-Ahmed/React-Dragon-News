import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className=''>
             <img className='mx-auto mt-10 mb-4' src={logo} alt="" />
             <p className='font-poppins text-gray-500 mb-4'>Journalism Without Fear or Favour</p>
             <p className='font-poppins text-gray-700 font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;