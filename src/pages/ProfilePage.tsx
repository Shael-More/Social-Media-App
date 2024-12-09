import Feeds from '../components/Feeds';
import Navbar from '../components/Navbar';
import RightSideInfo from '../components/RightSideInfo';
import Sidebar from '../components/Sidebar';
import cover from '../assets/cover.jpg'
import profileImg from '../assets/person/1.jpg'

const ProfilePage = () => {
  return (
    <div className='font-roboto'>
      <Navbar />
      <div className='flex justify-between'>
        <Sidebar />
        <div className='w-[80%] flex flex-col'>
          <div>
            <div className='relative'>
              <div className='w-full h-96'>
                <img
                  src={cover}
                  alt='cover image'
                  className='object-cover  w-full h-full'
                />
              </div>
              <div className='w-48 h-48 absolute top-72 left-0 right-0 bottom-0 m-auto'>
                <img
                  src={profileImg}
                  alt='profile image'
                  className='w-full h-full object-cover border-4 rounded-full'
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-14'>
              <h4 className='text-3xl'>Rita Roy</h4>
              <span className='text-lg text-gray-500'>Hello my friends!</span>
            </div>
          </div>
          <div className='flex'>
            <Feeds />
            <RightSideInfo profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
