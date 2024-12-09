import { Message, Notifications, Person, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import UsersImg from '../assets/person/1.jpg';

const Navbar = () => {
  return (
    <header className='w-full py-4 bg-blue-800 flex justify-between px-3 items-center sticky top-0 z-20'>
      <Link to={"/"}>
      <span className='text-lg font-bold bg-gradient-to-r from-pink-400 to-white text-transparent bg-clip-text'>
        LAMA SOCIAL
      </span>
      </Link>
      <div className=' w-96 h-6 rounded-full flex justify-normal items-center space-x-2 p-2 bg-white'>
        <Search />
        <input
          type='text'
          placeholder='Search Friends, Post or Videos'
          className='outline-none border-none w-full rounded-full'
        />
      </div>

      <div className='flex justify-between items-center space-x-10 text-white'>
        <div className='space-x-2'>
          <span className='cursor-pointer'>Home</span>
          <span className='cursor-pointer'>Timeline</span>
        </div>
        <div className='flex justify-between items-center space-x-5'>
          <div className='relative cursor-pointer'>
            <Person />
            <span className='w-4 h-4 bg-red-500 absolute flex justify-center items-center rounded-full -top-1 -right-1'>
              1
            </span>
          </div>
          <div className='relative cursor-pointer'>
            <Message />
            <span className='w-4 h-4 bg-red-500 absolute flex justify-center items-center rounded-full -top-1 -right-1'>
              2
            </span>
          </div>
          <div className='relative cursor-pointer'>
            <Notifications />
            <span className='w-4 h-4 bg-red-500 absolute flex justify-center items-center rounded-full -top-1 -right-1'>
              1
            </span>
          </div>
        </div>
        <div className='w-8 h-8 cursor-pointer'>
          <img
            src={UsersImg}
            alt='Users image '
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
