import logo from '../assets/svg/logo.svg'

const Navbar = () => {
    return (
        <div className='flex flex-row w-full h-24 bg-black pl-5 items-center'>
            <img src={logo} alt="logo" className='w-48 md:ml-5 object-contain'/>
            <p className='text-white text-4xl ml-8'>Web Wallet</p>
        </div>
    )
}

export default Navbar