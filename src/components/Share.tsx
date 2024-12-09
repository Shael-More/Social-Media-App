import Person from '../assets/person/1.jpg';
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
const Share = () => {
  return (
    <div className='w-full h-40 rounded-md shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]'>
      <div className='p-2'>
        <div className='flex items-center space-x-2'>
          <div className='w-12 h-12 '>
            <img
              src={Person}
              alt='image'
              className=' w-full h-full object-cover rounded-full'
            />
          </div>
          <input type='text' placeholder="What's in your mind?" className='border-none grow outline-none' />
        </div>
        <hr className='my-5'/>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2 ml-2'>
            <div className='flex space-x-2'>
              <PermMedia htmlColor='tomato'   />
              <span>Photos or Videos</span>
            </div>
            <div className='flex space-x-2'>
              <Label htmlColor='blue'  />
              <span>Tag</span>
            </div>
            <div className='flex space-x-2'>
              <Room htmlColor='green'  />
              <span>Location</span>
            </div>
            <div className='flex space-x-2'>
              <EmojiEmotions htmlColor='goldenrod'  />
              <span>Feelings</span>
            </div>
          </div>
          <button className='bg-green-600 outline-none font-medium px-3 py-1 cursor-pointer text-white rounded-md mr-5'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
