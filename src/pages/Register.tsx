
const Register = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[70%] bg-yellow-200 h-[70%] flex justify-center items-center p-5'>
        <div className='w-2/4 flex flex-col justify-center p-5'>
          <h4 className='text-5xl font-bold text-blue-600'>Lamasocial</h4>
          <span className='text-2xl'>
            Connect with friends and the world around you on Lamasocial
          </span>
        </div>
        <div className='w-2/4 p-5 h-full flex justify-center items-center'>
          <div className='flex flex-col justify-between items-start space-y-2 h-full w-full p-5 rounded-lg bg-white'>
            <input
              type='text'
              placeholder='Name'
              className='h-10 rounded-lg border-2 w-full border-gray-300 text-lg px-4 focus:outline-none'
            />
            <input
              type='text'
              placeholder='Email'
              className='h-10 rounded-lg border-2 w-full border-gray-300 text-lg px-4 focus:outline-none'
            />
            <input
              type='text'
              placeholder='Password'
              className='h-10 w-full rounded-lg border-2 border-gray-300 text-lg px-4 focus:outline-none'
            />
            <input
              type='text'
              placeholder='Confirm Password'
              className='h-10 w-full rounded-lg border-2 border-gray-300 text-lg px-4 focus:outline-none'
            />
            <button className='h-10 border-none rounded-lg text-lg font-medium cursor-pointer bg-blue-600 text-white w-full outline-none hover:bg-blue-500'>
              Sign Up
            </button>
            <span className='text-blue-500 cursor-pointer hover:underline self-center text-center'>
              Already have a Account?
            </span>
            <button className=' h-10 border-none rounded-lg text-lg font-medium cursor-pointer bg-green-600 hover:bg-green-500 text-white self-center outline-none  px-5'>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register