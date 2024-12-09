import { MoreVert } from '@mui/icons-material';
import Heart from '../assets/like.png';
import Like from '../assets/thumbs-up.png';
import { useState } from 'react';

// interface PostProps {
//   id: number,
//   img: string,
//   postImg: string,
//   name: string,
//   time: number,
//   likes: number,
//   comments: number
// }

const Posts = ({ post } ) => {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false)

  function handleLikeClick() {
    setLike(isLiked ? like- 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
    <div>
      <div
        key={post.name}
        className='w-full rounded-lg shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] px-2 py-4 space-y-2 mb-3'
      >
        <div className='flex justify-between items-center '>
          <div className='flex space-x-2  items-center'>
            <div className='w-8 h-8'>
              <img
                src={post.img}
                alt='Users image'
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            <span className='text-sm font-medium'>{post.name}</span>
            <span className='text-[12px] font-medium'>
              {post.time} mins ago
            </span>
          </div>
          {/* <div></div> */}
          <MoreVert />
        </div>

        <div className='space-y-4'>
          <span>{post.post}</span>
          <img src={post.postImg} alt='post image' />
        </div>
        <div className='flex items-center justify-between px-2 py-2'>
          <div className='flex space-x-2 grow items-center'>
            <img
              src={Heart}
              alt='heart png'
              className='cursor-pointer w-5 h-5'
              onClick={handleLikeClick}
            />
            <img
              src={Like}
              alt='like png'
              className='cursor-pointer w-6 h-6'
            />
            <span className='text-sm'>{like} people like it</span>
          </div>
          <div className='comment'>
            <span className='cursor-pointer text-gray-700 text-sm font-medium'>
              {post.comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
