import Link from "next/link";
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from "react"

type NavLinkProps = {
  to: string;
  children: string;
}

function NavLink({ to, children }: NavLinkProps) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

type MobileNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navItems : Props;
}

function MobileNav({ open, setOpen, navItems }: MobileNavProps) {
  return (
    <div className={`z-50 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-32"> {/*logo container*/}
        <div className="text-xl font-semibold cursor-pointer" >
          <Link href="/"><a><div className='bg-local w-16 h-16 mr-5'><Image src='/logo.png' alt='logo-golkar' className="z-40" height={104} width={104} /></div></a></Link>
        </div>
      </div>
      <div className="flex flex-col mx-6">
        {navItems['nav-items'].map((value, i) => <a key={i} className="text-xl font-medium my-4" href={`\\${value.replace(' ','-').toLowerCase()}`} onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>{value}</a>)}
        <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          About
        </a>
        <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Contact
        </a>
      </div>
    </div>
  )
}
type Props = {
  'nav-items': string[];
}

export default function Navbar(navItems: Props) {
  const [open, setOpen] = useState(false)
  return (
    <nav className='flex flex-row py-8 px-6 2xl:bg-opacity-0 bg-yellow-300'>
      <MobileNav open={open} setOpen={setOpen} navItems={navItems}/>
      <div className='basis-1/12 flex justify-end self-center'>
        <span className={`border-r-2 border-black sm:border-white px-2 cursor-pointer`}>
          <Link href='/'><a><div className='bg-local w-14 h-14 sm:mr-5 mr-1'><Image src='/logo.png' alt='logo-golkar' className="z-0" height={54} width={54} /></div></a></Link>
        </span>
      </div>
      <ol className='hidden xl:basis-1/2 md:basis-11/12 md:flex flex-row justify-around uppercase font-sans text-slate-700 self-center'>
        {navItems['nav-items'].map((value, i) => <li key={i}>{value}</li>)}
      </ol>
      <div className='hidden basis-1/2 lg:flex justify-around self-center '>
        <div className="xl:w-96 self-center">
          <div className="flex flex-row w-full rounded">
            <input type="search" className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="basis-11/12 flex justify-between items-center md:hidden px-2">
        <div className="text-3xl text-black">
          Partai Golkar
        </div>
        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center" onClick={() => {
          setOpen(!open)
        }}>
          {/* hamburger button */}
          <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-black ${open ? "rotate-45 translate-y-3.5 " : ""}`} />
          <span className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out bg-black ${open ? "w-0 bg-black" : "w-full "}`} />
          <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-black ${open ? "-rotate-45 -translate-y-3.5 " : ""}`} />
        </div>
      </div>
    </nav>
  )
}