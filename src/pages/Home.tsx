import Feeds from '../components/Feeds';
import Navbar from '../components/Navbar';
import Right from '../components/RightSideInfo';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-between'>
        <Sidebar />
        <Feeds />
        <Right />
      </div>
    </>
  );
};

export default Home;
