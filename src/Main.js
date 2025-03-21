import './Main.css';
import logo from './images/sakura-logo.png';
import shikimori from './images/figure/Shikimori_cropped.png';
import sitri from './images/figure/Sitri-Smart.jpg';
import { useState, useEffect, useRef } from 'react';

export function TypedComponent() {
  const typedElement = useRef(null); // Create a ref for the element

  useEffect(() => {
    if (window.Typed) {
      const options = {
        strings: ["Web Developer", "Quality Assurance Tester", "Web Designer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        cursorChar: ""
      };

      // Initialize Typed.js on the referenced element
      const typed = new window.Typed(typedElement.current, options);

      // Cleanup Typed.js when the component is unmounted
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedElement} className='text-pink-400' id="autotype">Web Developer</span>;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu on larger screens
      }
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div className='mt-4 flex z-10 fixed w-full px-4 md:px-10 sm:px-6'>
          <nav id='navbar' className='bg-stone-50 w-full h-12 border-2 border-pink-200 rounded-2xl flex items-center px-4 bg-opacity-50'>
            <div className='h-full flex items-center w-2/12'>
              <img src={logo} className='h-8 w-8 cursor-pointer' alt='Logo'></img>
            </div>
            <div className='h-full flex items-center justify-end w-10/12'>
                <div className='flex md:hidden sm:flex'>
                    <ion-icon onClick={toggleMenu} id="open-button" name="menu" className='text-gray-500 transition hover:text-pink-500 hover:ease-in-out text-2xl cursor-pointer'></ion-icon>
                </div>
                <div className='hidden md:flex sm:hidden'>
                    <ul className='flex cursor-pointer ff-rowdies font-medium text-stone-500'>
                      <a href='#home'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>Home</li></a>
                      <a href='#about'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>About</li></a>
                      <a href='#skills'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>Skills</li></a>
                      <a href='#experiences'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>Experiences</li></a>
                      <a href='#projects'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>Projects</li></a>
                      <a href='#contact'><li className='tracking-wider mx-2 hover:text-pink-500 transition hover:ease-in-out'>Contact</li></a>
                    </ul>
                </div>
            </div>
          </nav>
      </div>
      {isMenuOpen && <NavbarMenu toggleMenu={toggleMenu} />}
    </>
  );
}

export function NavbarMenu({ toggleMenu }) {
  return (
    <>
      <div className={`bg-zinc-950 filter blur h-screen w-full fixed z-20 transition-all ease-in-out ${toggleMenu ? 'bg-opacity-30' : 'bg-opacity-0 pointer-events-none'}`}></div>
      <div className={`bg-gradient-to-b from-pink-100 to-pink-50 w-64 sm:w-72 md:w-72 h-full z-30 fixed py-6 drop-shadow-lg transition-all ease-in-out ${toggleMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='w-full h-10 flex justify-end items-center px-4 mb-8'>
          <div className='w-1/2 flex justify-start items-center'>
            <img src={logo} className='h-8 w-8 cursor-pointer' alt='Logo'></img>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
            <ion-icon
              id="close-button"
              name="close"
              className='text-gray-500 transition hover:text-pink-300 hover:ease-in-out text-3xl cursor-pointer'
              onClick={toggleMenu}
            ></ion-icon>
          </div>
        </div>

        <div className='w-full h-auto'>
          <ul className='cursor-pointer ff-rowdies font-medium text-stone-500 block'>
            <a href="#home" onClick={toggleMenu}>
              <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                <div className='w-1/6'>
                  <ion-icon name="home-outline" className='text-2xl flex items-center'></ion-icon>
                </div>
                <div className='w-5/6 flex items-center'>
                  Home
                </div>
              </li>
            </a>
            <a href="#about" onClick={toggleMenu}>
              <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                <div className='w-1/6'>
                  <ion-icon name="person-outline" className='text-2xl flex items-center'></ion-icon>
                </div>
                <div className='w-5/6 flex items-center'>
                  About
                </div>
              </li>
            </a>
            <a href="#skills" onClick={toggleMenu}>
              <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                <div className='w-1/6'>
                  <ion-icon name="construct-outline" className='text-2xl flex items-center'></ion-icon>
                </div>
                <div className='w-5/6 flex items-center'>
                  Skills
                </div>
              </li>
            </a>
            <a href="#experiences" onClick={toggleMenu}>
              <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                <div className='w-1/6'>
                  <ion-icon name="briefcase-outline" className='text-2xl flex items-center'></ion-icon>
                </div>
                <div className='w-5/6 flex items-center'>
                  Experiences
                </div>
              </li>
            </a>
            <a href="#projects" onClick={toggleMenu}>
              <li className='w-full h-12 flex items-center justify-start px-8 transition ease-in-out hover:bg-pink-200 hover:text-slate-50'>
                <div className='w-1/6'>
                  <ion-icon name="albums-outline" className='text-2xl flex items-center'></ion-icon>
                </div>
                <div className='w-5/6 flex items-center'>
                  Projects
                </div>
              </li>
            </a>
            <a href="#contact" onClick={toggleMenu}>
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
  );
}

export function Home() {
  return (
    <>
      <div id="home" className="h-screen w-full pt-16 px-8 bg-gradient-to-b from-pink-300 to-pink-100">
        <div className='w-full h-full block md:flex sm:block'>
          <div className="h-1/2 w-full md:w-1/2 md:h-full sm:h-1/2 sm:w-full p-4">
            <div className='h-full w-full bg-pink-50 bg-opacity-30 rounded-xl flex justify-center'>
              <img src={ shikimori } className='shikimori h-full w-auto cursor-pointer transition-all ease-in-out hover:translate-x-1 hover:brightness-105 saturate-150' alt="Shikomori"></img>
            </div>
          </div>
          <div className="h-1/2 w-full md:w-1/2 md:h-full sm:h-1/2 sm:w-full p-4 flex items-start md:items-center justify-center lg:justify-start md:justify-start">
            <div className='block mt-0 md:-mt-20'>
              <h1 className='text-animation text-animation-1 my-0 md:my-4 ff-rowdies font-bold text-2xl md:text-4xl sm:text-3xl text-slate-50 text-center md:text-start'>Hi, im <span className='text-pink-400'>PapiChans</span></h1>
              <p className='text-animation text-animation-2 my-0 md:my-4 ff-rowdies font-light text-lg md:text-xl text-slate-50 text-center md:text-start'>I'm a <TypedComponent /></p>
              <p className='text-animation text-animation-3 my-0 md:my-4 ff-poppins font-light text-md text-slate-50 md:text-start text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, itaque tenetur quaerat sunt voluptatem praesentium suscipit quidem veniam repellat soluta.</p>
              <div className='text-animation text-animation-4 my-0 md:my-4 flex w-full h-16 items-center justify-center md:justify-start px-1'>
                <div className='cursor-pointer w-12 h-12 rounded-full border-pink-500 border-2 bg-slate-50 transition-all ease-in-out hover:bg-pink-400 flex justify-center items-center mr-5'><ion-icon name="logo-discord" size="large" className="text-pink-400 hover:text-slate-50"></ion-icon></div>
                <div className='cursor-pointer w-12 h-12 rounded-full border-pink-500 border-2 bg-slate-50 transition-all ease-in-out hover:bg-pink-400 flex justify-center items-center mr-5'><ion-icon name="logo-facebook" size="large" className="text-pink-400 hover:text-slate-50"></ion-icon></div>
                <div className='cursor-pointer w-12 h-12 rounded-full border-pink-500 border-2 bg-slate-50 transition-all ease-in-out hover:bg-pink-400 flex justify-center items-center mr-5'><ion-icon name="logo-tiktok" size="large" className="text-pink-400 hover:text-slate-50"></ion-icon></div>
                <div className='cursor-pointer w-12 h-12 rounded-full border-pink-500 border-2 bg-slate-50 transition-all ease-in-out hover:bg-pink-400 flex justify-center items-center mr-5'><ion-icon name="logo-linkedin" size="large" className="text-pink-400 hover:text-slate-50"></ion-icon></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function About() {
  return (
    <>
      <div id="about" className="h-auto w-full bg-slate-50 px-4 pt-20">
        <h1 className='text-center ff-rowdies text-4xl font-light text-slate-500'>About</h1>
        <div className='h-full w-full block md:flex'>
          <div className='h-1/2 md:h-full w-full md:w-1/2 flex justify-center items-center md:items-start p-4'>
            <div className='h-56 md:h-80 sm:h-72 w-56 md:w-80 sm:w-72 bg-pink-200 rounded-xl cursor-pointer mt-0 md:mt-8 border-pink-400 border-4'>
              <img src={ sitri } alt="Sitri-smart" className='h-full w-full rounded-xl saturate-150'></img>
            </div>
          </div>
          <div className='h-1/2 md:h-full w-full md:w-1/2 flex justify-center md:justify-start items-start p-4'>
            <div className='w-full h-auto block justify-center md:justify-start mt-4 md:mt-12'>
              <h1 className='mb-4 ff-rowdies font-medium text-pink-400 text-3xl text-center md:text-start'>PapiChans</h1>
              <p className='mb-4 ff-poppins text-slate-900 text-md font-light text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat fuga mollitia modi vitae voluptatibus doloremque error consequuntur aut! Dolorum fuga nobis temporibus ducimus hic eius odit sit laboriosam eaque enim.</p>
              <div className='w-full flex justify-center md:justify-start'>
                <div className='cursor-pointer flex w-56 h-10 bg-pink-400 rounded-md transition-all ease-out hover:bg-pink-500 justify-center items-center'>
                  <h1 className='text-slate-50 ff-rowdies font-medium'>Download CV</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Skills() {
  return (
    <>
      <div id="skills" className="h-auto w-full bg-slate-50 px-4 pt-20">
        <h1 className='text-center ff-rowdies text-4xl font-light text-slate-500'>What I do?</h1>
        <p className='text-center ff-poppins text-md font-light text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus fugit.</p>
        <div className='h-auto w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center p-4 mt-4'>
          <div className='h-56 w-56 flex justify-center items-center border-4 border-pink-300 bg-slate-100 text-pink-500 rounded-lg cursor-pointer hover:bg-pink-400 hover:text-slate-50 transition-all ease-in-out'>
            <div className='block'>
              <div className='flex justify-center'>
                <ion-icon className='text-6xl text-center' name="desktop-outline"></ion-icon>
              </div>
              <div className='block'>
                <p className='text-lg font-light ff-rowdies text-center'>Web Developer</p>
              </div>
            </div>
          </div>
          <div className='h-56 w-56 flex justify-center items-center border-4 border-pink-300 bg-slate-100 text-pink-500 rounded-lg cursor-pointer hover:bg-pink-400 hover:text-slate-50 transition-all ease-in-out'>
            <div className='block'>
              <div className='flex justify-center'>
                <ion-icon className='text-6xl text-center' name="reader-outline"></ion-icon>
              </div>
              <div className='block'>
                <p className='text-lg font-light ff-rowdies text-center'>Quality Assurance Tester</p>
              </div>
            </div>
          </div>
          <div className='h-56 w-56 flex justify-center items-center border-4 border-pink-300 bg-slate-100 text-pink-500 rounded-lg cursor-pointer hover:bg-pink-400 hover:text-slate-50 transition-all ease-in-out'>
            <div className='block'>
              <div className='flex justify-center'>
                <ion-icon className='text-6xl text-center' name="color-palette-outline"></ion-icon>
              </div>
              <div className='block'>
                <p className='text-lg font-light ff-rowdies text-center'>Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return (
  <>
    <div className='h-6 w-full bg-slate-800 flex justify-center items-center ff-poppins cursor-pointer'>
      <p className='text-slate-50 font-light text-sm'>Created by <a href="https://github.com/papichans" target="_blank" rel="noreferrer"><span className='text-pink-200'>PapiChans</span></a></p>
    </div>
  </>
  )
}