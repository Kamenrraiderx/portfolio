'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
const relevantData = [
  {
    number: 1,
    data1: 'Años de',
    data2: 'experiencia'
  },
  {
    number: 5,
    data1: 'Proyectos',
    data2: 'completados'
  },
  {
    number: 8,
    data1: 'Tecnologias',
    data2: 'conocidas',
  },
  {
    number: 200,
    data1: 'Commits',
  },


]

export default function Home() {
  const delayIncrement = 0.2;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-6 w-[100vw] h-[100vh] bg-white">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ height: "0vh" }}
            animate={{ height: "100vh" }}
            transition={{ duration: 1, delay: (5 - index) * delayIncrement }}
            className="bg-stone-900"
          />
        ))}
      </div>

      <div className="text-white bg-transparent absolute top-0 w-[75vw] h-[100vh] flex flex-col  justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 flex flex-col  justify-start  ">
            <div>
              <span className="font-bold">Frontend Developer</span>
              <h3 className="text-7xl font-bold mb-4">
                <p className="mb-4">Hola, soy </p><p className="text-green-400">Aníbal Reyes</p>
              </h3>
              <div className="text-lg text-stone-300">
                <p>
                  Me destaco en la creación de experiencias digitales elegantes y
                </p>

                <p>
                  Soy competente en varios lenguajes y tecnologías de programación.
                </p>
              </div>
            </div>
            <div className="flex gap-4  items-center w-full mt-10">
              <div className="w-1/2">
                <button className="rounded-full cursor-pointer w-11/12 p-4 border border-green-400 text-green-400 flex justify-center items-center"><span className="mr-2">Descargar CV</span> <FiDownload className="h-5 w-5 "/></button>
              </div>
              <div className="flex justify-start items-center w-1/2">
                <ul className="flex gap-5">
                  <li className="border border-green-400 cursor-pointer text-green-400 rounded-full p-2"><FaGithub className="w-8 h-8 "/></li>
                  <li className="border border-green-400 cursor-pointer text-green-400 rounded-full p-2"><FaLinkedin className="w-8 h-8"/></li>
                </ul>
              </div>

            </div>
          </div>
          <div className="w-1/2 flex justify-center">
              <div className="border-[5px] border-dashed border-green-400 h-96 w-96 rounded-full overflow-hidden">
                <Image width={380} className="filter grayscale contrast-125" alt="" src='/profile.png' height={380}/> 

              </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <ul className="flex mt-40 justify-between  w-full ">
            {relevantData.map((data,key)=><RelevantField {...data} key={key}/>)}
          </ul>
        </div>

      </div>


    </div>
  );
}


function RelevantField(props:{number:number,data1:string,data2?:string}) {
  return (
    <li className="flex items-center mr-5">
      <div className="mr-3">
        <span className="text-6xl font-bold">{props.number}</span>
      </div>
      <div>
        <p>{props.data1}</p>
        <p>{props.data2}</p>
      </div>
    </li>

  )
}