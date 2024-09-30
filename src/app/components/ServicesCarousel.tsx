"use client";

import Image from "next/image";
import serviceImage from "../../../public/serviceImage.png";
import serviceImage2 from "../../../public/serviceImage2.png";

export default function ServicesCarousel() {
   const services = [
      { title: "Servicio 1" },
      { title: "Servicio 2" },
      { title: "Servicio 3" },
   ];

   return (
      <div className="flex flex-row gap-4 mt-40">
         {services.map((service, index) => (
            <div key={index} className="relative w-[400px] h-[400px] group ">
               {/* Imagen inicial */}
               <Image
                  src={serviceImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300 rounded-xl"
               />
               {/* Imagen al pasar el mouse */}
               <Image
                  src={serviceImage2}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
               />
               {/* Texto en el medio */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-5xl text-center">{service.title}</p>
               </div>
            </div>
         ))}
      </div>
   );
}
