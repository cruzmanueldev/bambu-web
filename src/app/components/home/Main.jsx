import {
  ArrowDownOutlined
} from '@ant-design/icons';


export default function HomePage() {
  return (
    <main className="relative flex h-screen items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/images/mainOffice.jpg')` }}
      />

      <div className="absolute inset-0 bg-blue-900/70" />

      <div className="relative z-10 text-center">
        <div className="mb-5 xl:mb-10 text-5xl xl:text-7xl font-bold text-white mx-auto w-[90%] xl:w-[70%]">
          Redes Sociales y Community Management
        </div>

        <div className="mx-auto mb-5 xl:mb-10 w-[90%] xl:w-[70%]">
          <div className="flex flex-col gap-6 text-start text-xl text-white md:flex-row md:gap-10 xl:text-2xl">
            
            <div className="w-full md:w-1/2">
              El 67% de los usuarios busca información sobre las empresas a través de las redes sociales. ¿No es motivo suficiente para empezar a tener presencia de marca en Social Media?
            </div>

            <div className="w-full md:w-1/2">
              Si tu negocio no está en las redes, ¡tu negocio no existe! En Dualthink contamos con un equipo de cracks especializado en dirección y gestión de redes sociales.
            </div>

          </div>
        </div>

        <button className="cursor-pointer rounded-lg bg-black px-3 py-2 text-xl text-white">
          Me interesa
          <ArrowDownOutlined className="ml-2 animate-bounce text-lg" />
        </button>
      </div>


    </main>
  )
}
