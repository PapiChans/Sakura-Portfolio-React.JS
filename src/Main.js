import './Main.css';
import logo from './images/sakura-logo.png';

export function Navbar() {
  return (
    <>
      <div className='mt-4 flex z-10 fixed w-full px-4 md:px-10 sm:px-6'>
          <nav className='bg-stone-50 w-full h-12 border-2 border-pink-200 rounded-2xl flex items-center px-4 bg-opacity-50'>
            <div className='h-full flex items-center w-2/12'>
              <img src={logo} className='h-8 w-8 cursor-pointer' alt='Logo'></img>
            </div>
            <div className='h-full flex items-center justify-end w-10/12'>
                <div className='flex md:hidden sm:flex'>
                    <ion-icon name="menu" className='text-gray-500 transition hover:text-pink-300 hover:ease-in-out text-2xl cursor-pointer'></ion-icon>
                </div>
                <div className='hidden md:flex sm:hidden'>
                    <ul className='flex cursor-pointer ff-open-sans font-semibold text-gray-500'>
                      <a href='#home'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Home</li></a>
                      <a href='#about'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>About</li></a>
                      <li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Skills</li>
                      <li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Experiences</li>
                      <li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Projects</li>
                      <li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Contact</li>
                    </ul>
                </div>
            </div>
          </nav>
      </div>
    </>
  );
}

export function Home() {
  return (
    <>
      <div id="home" className="bg-white h-screen w-full bg-gradient-to-b from-pink-200 to-pink-300 pt-24 px-12">
      </div>
    </>
  )
}

export function About() {
  return (
    <>
      <div id="about" className="h-screen w-full bg-slate-50 p-12">
      </div>
    </>
  )
}