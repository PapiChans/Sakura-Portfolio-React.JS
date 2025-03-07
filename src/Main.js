import './Main.css';
import logo from './images/sakura-logo.png';

export function Navbar() {
  return (
    <>
      <nav className="w-full bg-slate-100 h-16 p-3 item-center md:flex sm:block cursor-pointer shadow-md z-10">
        <div className="h-full md:w-1/12 sm:w-1/4 flex md:justify-center sm:justify-start items-center">
            <img src={logo} className='h-14 w-auto' alt="logo"></img>
        </div>
        <div className="h-full md:w-11/12 sm:w-3/4 flex md:justify-end sm:justify-start items-center">
        </div>
      </nav>
    </>
  );
}
