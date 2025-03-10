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
                    <ion-icon id="open-button" name="menu" className='text-gray-500 transition hover:text-pink-300 hover:ease-in-out text-2xl cursor-pointer'></ion-icon>
                </div>
                <div className='hidden md:flex sm:hidden'>
                    <ul className='flex cursor-pointer ff-poppins font-semibold text-stone-700'>
                      <a href='#home'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Home</li></a>
                      <a href='#about'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>About</li></a>
                      <a href='#skills'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Skills</li></a>
                      <a href='#experiences'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Experiences</li></a>
                      <a href='#projects'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Projects</li></a>
                      <a href='#contact'><li className='tracking-wider mx-2 hover:text-pink-300 transition hover:ease-in-out'>Contact</li></a>
                    </ul>
                </div>
            </div>
          </nav>
      </div>
    </>
  );
}

export function NavbarMenu() {
  return (
    <>
      <div className='bg-zinc-950 filter blur h-screen w-full bg-opacity-30 fixed z-20 transition ease-in-out'></div>
      <div className='bg-gradient-to-b from-slate-100 to-pink-200 w-64 sm:w-72 md:w-72 h-full z-30 fixed transition ease-in-out py-6 drop-shadow-lg left-0'>
        <div className='w-full h-10 flex justify-end items-center px-4 mb-8'>
          <div className='w-1/2 flex justify-start items-center'>
            <img src={logo} className='h-8 w-8 cursor-pointer' alt='Logo'></img>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
            <ion-icon id="close-button" name="close" className='text-gray-500 transition hover:text-pink-300 hover:ease-in-out text-3xl cursor-pointer'></ion-icon>
          </div>
        </div>
          <div className='w-full h-auto'>
            <ul className='cursor-pointer ff-poppins font-semibold text-stone-700 block'>
              <a href="#home">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="home-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    Home
                  </div>
                </li>
              </a>
              <a href="#about">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="person-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    About
                  </div>
                </li>
              </a>
              <a href="#skills">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="construct-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    Skills
                  </div>
                </li>
              </a>
              <a href="#experiences">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="briefcase-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    Experiences
                  </div>
                </li>
              </a>
              <a href="#projects">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="albums-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    Projects
                  </div>
                </li>
              </a>
              <a href="#contact">
                <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                  <div className='w-1/6'>
                    <ion-icon name="mail-outline" className='text-2xl flex items-center'></ion-icon>
                  </div>
                  <div className='w-5/6 flex items-center'>
                    Contact
                  </div>
                </li>
              </a>
            </ul>
          </div>
      </div>
    </>
  )
}

export function Home() {
  return (
    <>
      <div id="home" className="h-screen w-full pt-24 px-8 bg-gradient-to-b from-pink-200 to-pink-300">
        <div className='w-full h-full'>
          <div className='w-1/2 h-5/6 bg-slate-50'></div>
        </div>
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