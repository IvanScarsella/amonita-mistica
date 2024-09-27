import Image from 'next/image'
import logo from '../../../public/logo.png'
import user from '../../../public/user.png'
import cart from '../../../public/cart.png'
import menu from '../../../public/menu.png'

export default function Navbar() {
   return (
      <header className="bg-green3 text-white flex flex-row justify-between pl-[100px] pr-[120px] py-[15px] h-20">
         <div className='flex flex-row gap-4 items-center'>
            <Image src={logo} className='size-[60px]' alt='logo' />
            <p className='text-4xl'>Amonita</p>
         </div>
         <div className='flex flex-row gap-16 items-center'>
            <Image src={user} className='size-12' alt='user' />
            <Image src={cart} className='size-12' alt='cart' />
            <Image src={menu} className='size-[34px]' alt='menu' />
         </div>
      </header>
   )
}