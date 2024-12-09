import gift from '../assets/gift-box.png';
import ad from '../assets/ad.png';
import { Users } from '../Constant';

const Right = ({ profile }) => {
  function ShowInHome() {
    return (
      <>
        <div className='flex items-center space-x-2'>
          <img src={gift} alt='gift image' width={32} height={32} />
          <span className='text-sm '>
            <b>Nina </b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <div className='relative'>
          <img
            src={ad}
            alt='add img'
            className='rounded-xl opacity-75 w-full h-full'
          />
          <span className='bg-white absolute right-0 bottom-0 p-1 rounded-l-lg'>
            ad
          </span>
        </div>
        <ul>
          <h4 className='my-5 text-xl font-medium'>Online Friends</h4>
          {Users.map((person) => (
            <li key={person.name} className='flex items-center space-x-3 mb-3'>
              <div className='w-8 h-8 flex items-center relative'>
                <img
                  src={person.img}
                  className='w-full h-full rounded-full'
                  alt='Users image'
                />
                <span className='absolute w-3 h-3 rounded-full bg-green-500 -top-1 right-0 border-2 border-white'></span>
              </div>
              <span className='font-medium text-sm'>{person.name}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function ShowInProfile() {
    return (
      <>
        <h4>User Information</h4>
        <div>
          <div className='space-x-2'>
            <span className='font-bold'>City: </span>
            <span>New York</span>
          </div>
          <div className='space-x-2'>
            <span className='font-bold'>From: </span>
            <span>Madrid</span>
          </div>
          <div className='space-x-2'>
            <span className='font-bold'>Relationship: </span>
            <span>Single</span>
          </div>
        </div>
        <h2 className='text-lg font-medium'>User Friends</h2>
        <div className=' flex flex-wrap gap-3'>
          {Users.map((user) => (
            <div>
              <div key={user.name} className='w-24 h-24 '>
                <img
                  src={user.img}
                  alt=''
                  className='w-full h-full rounded-md object-cover'
                />
              </div>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className='w-1/3 p-4 mr-2 space-y-4 bg-yellow-100'>
        {profile ? <ShowInProfile /> : <ShowInHome />}
      </div>
    </>
  );
};

export default Right;
