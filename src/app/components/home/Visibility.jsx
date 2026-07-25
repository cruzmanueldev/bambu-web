import Image from 'next/image';

// import Design from '@/assets/images/design.jpg'

export default function Visibility() {
  return (
    <div className='w-[90%] xl:w-[60%] mx-auto py-24 flex flex-col xl:flex-row xl:justify-between gap-1 md:gap-2 xl:gap-16'>

      <div className='w-[95%] xl:w-[50%] mx-auto'>
        {/* <Image
          src={Design}
          className='rounded-xl'
        /> */}
      </div>

      <div className='w-[95%] xl:w-[50%] mx-2 flex justify-between flex-col py-6'>
        <div className='text-5xl font-semibold'>
          Diseño de branding e identidad visual en Madrid
        </div>
        <div className='text-3xl font-semibold'>
          Hacemos que reconozcan y recuerden tu navío
        </div>
        <div className='text-xl'>
          Construir tu marca y crear una identidad visual sólida implica conocer y definir quién eres como empresa, cómo te presentarás a tus clientes potenciales a través de elementos visuales y de comunicación, y cómo utilizarás estos aspectos para alcanzar tus objetivos.
        </div>
      </div>
    </div>
  )
}
