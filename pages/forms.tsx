export default function About() {

    return (
        <div className="">
      <form className='flex'>
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
        <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
          Sign Up
        </button>
      </form>
        </div>
    );

}
