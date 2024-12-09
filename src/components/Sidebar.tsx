import { Users, SidebarMenu } from '../Constant';
const Sidebar = () => {
  return (
    <div className='h-screen w-1/5 overflow-y-scroll px-2 sticky top-0'>
      <div className='p-5 '>
        <ul className='space-y-5 mb-5'>
          {SidebarMenu.map((menu) => (
            <li
              className='space-x-4 flex justify-start items-center'
              key={menu.name}
            >
              {menu.component} <span>{menu.name}</span>
            </li>
          ))}
        </ul>
        <button className='bg-gray-300 px-2 py-1 rounded-md font-normal font-roboto '>Show More</button>
        <hr className='my-3 border-b-2' />

        <ul>
          {Users.map((person) => (
            <div className='flex space-x-3 items-center my-3 py-1'>
              <div className='w-9 h-9 '>
                <img
                  src={person.img}
                  alt={person.name}
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <p>{person.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
