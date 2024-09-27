import { Inknut_Antiqua } from "next/font/google";
import { Heebo } from "next/font/google";
import instagram from '../../../public/instagram.png'
import Image from "next/image";

const inter = Inknut_Antiqua({
   weight: ["300", "400", "500", "600", "700", "800", "900"],
   subsets: ["latin"],
});

const inter2 = Heebo({
   weight: ["300", "400", "500", "600", "700", "800", "900"],
   subsets: ["latin"],
});

export default function Footer() {
   return (
      <footer className="bg-green3 text-white flex flex-row items-center h-[200px] font-custom px-[132px] justify-between">
         <div className="flex flex-col text-2xl gap-4">
            <p >Productos</p>
            <p>Sesiones</p>
            <p>Contacto</p>
         </div>
         <div className="flex flex-row gap-6">
            <Image src={instagram} alt='instagram' className='size-12' />
            <p className="text-[32px]">@amonitamistica</p>
         </div>
      </footer>
   );
}
