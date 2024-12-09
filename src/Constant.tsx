import {
  Bookmarks,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircle,
  RssFeed,
  School,
  Work,
} from '@mui/icons-material';

import Rita from './assets/person/1.jpg';
import Sara from './assets/person/2.jpg';
import Harry from './assets/person/3.jpg';
import Mini from './assets/person/4.jpg';
import Jack from './assets/person/5.jpg';
import David from './assets/person/6.jpg';
import Nina from './assets/person/7.jpg';
import Sima from './assets/person/8.jpg';

import RitaPost from './assets/posts/1.jpg';
import SaraPost from './assets/posts/2.jpg';
import HarryPost from './assets/posts/3.jpg';
import MiniPost from './assets/posts/4.jpg';
import JackPost from './assets/posts/5.jpg';
import DavidPost from './assets/posts/6.jpg';
import NinaPost from './assets/posts/7.jpg';
import SimaPost from './assets/posts/8.jpg';

export const SidebarMenu = [
  {
    name: 'Feed',
    component: <RssFeed />,
  },
  {
    name: 'Chats',
    component: <Chat />,
  },
  {
    name: 'Videos',
    component: <PlayCircle />,
  },
  {
    name: 'Groups',
    component: <Group />,
  },
  {
    name: 'Bookmarks',
    component: <Bookmarks />,
  },
  {
    name: 'Questions',
    component: <HelpOutline />,
  },
  {
    name: 'Jobs',
    component: <Work />,
  },
  {
    name: 'Events',
    component: <Event />,
  },
  {
    name: 'Courses',
    component: <School />,
  },
];

export const Users = [
  {
    name: 'Sara Williams',
    img: Sara,
  },
  {
    name: 'Rita Potter',
    img: Harry,
  },
  {
    name: 'Sima Nair',
    img: Sima,
  },
  {
    name: 'David',
    img: David,
  },
  {
    name: 'Nina ',
    img: Nina,
  },
  {
    name: 'Jack Demon',
    img: Jack,
  },
  {
    name: 'Mini Doe',
    img: Mini,
  },
];

export const PostData = [
  {
    id: 1,
    img: Rita,
    name: 'Rita Roy',
    postImg: RitaPost,
    time: 12,
    likes: 32,
    comments: 9,
    post: 'Life isn’t meant to be lived caged within walls and mindsets. The only way to break free from the shackles of monotony is to travel.',
  },
  {
    id: 2,
    img: Sara,
    name: 'Sara Williams',
    postImg: SaraPost,
    post: 'Wherever you go becomes a part of you somehow.',
    likes: 35,
    comments: 32,
    time: 22,
  },
  {
    id: 3,
    name: 'Rita Potter',
    img: Harry,
    postImg: HarryPost,
    post: 'Travel and change of place impart new vigor to the mind',
    likes: 567,
    comments: 322,
    time: 432,
  },
  {
    id: 4,
    img: Sima,
    name: 'Sima Nair',
    postImg: SimaPost,
    post: 'The journey not the arrival matters.',
    likes: 323,
    comments: 344,
    time: 52,
  },
  {
    id: 5,
    img: David,
    name: 'David Jackson',
    postImg: DavidPost,
    post: 'Travel brings power and love back into your life.',
    likes: 76,
    comments: 84,
    time: 19,
  },
  {
    id: 6,
    name: 'Nina ',
    img: Nina,
    postImg: NinaPost,
    post: 'Life is a journey, not a destination',
    likes: 945,
    comments: 44,
    time: 43,
  },
  {
    id: 7,
    img: Jack,
    name: 'Jack Demon',
    postImg: JackPost,
    post: 'As soon as I saw you, I knew a grand adventure was about to happen.',
    likes: 564,
    comments: 54,
    time: 23,
  },
  {
    id: 8,
    img: Mini,
    name: 'Mini Doe',
    postImg: MiniPost,
    post: 'Travel makes one modest. You see what a tiny place you occupy in the world',
    likes: 56,
    comments: 65,
    time: 8,
  },
];
