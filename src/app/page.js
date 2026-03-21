import Main from "./components/home/Main";
import Visibility from "./components/home/Visibility";
import InfoSection from "./components/home/InfoSection";
import Presentation from "./components/home/Presentation";
import BenefitSection from "./components/home/BenefitSection";

const benefits = [
  {
    title: 'Diseñamos tu estrategia digital',
    description: <div className="font-medium text-[16px]">
      Como Agencia de Marketing Digital en España, <strong>transformamos tu estrategia</strong> para que consigas tus objetivos, <strong>mejorando los resultados</strong> de tu negocio. Nuestro fuerte es el Paid Media, SEO, Social Media y CRO
    </div>,
    image: 'https://www.marketinhouse.es/wp-content/uploads/2024/07/agencia-marketing-digital-madrid2-768x512.webp',
    color: '#8bc9c1',
    position: 'right'
  },
  {
    title: 'Metodología inhouse',
    description: <div>
      Queremos que nos sientas como parte de tu propio equipo. Somos TU agencia de marketing digital. <strong>Somos TU equipo.</strong> Somos TU departamento. ¿Algo que nos caracterice? La personalización, la proactividad, la adaptación y la disponibilidad como si estuviéramos en la sala de al lado.
    </div>,
    image: 'https://www.marketinhouse.es/wp-content/uploads/2024/07/agencia-marketing-digital-madrid2-768x512.webp',
    color: '#2d2d51',
    position: 'left'
  },
  {
    title: 'Consigue tus objetivos propuestos',
    description: <div>Nos enfocamos en tu rentabilidad y tus metas, con <strong>transparencia y honestidad.</strong></div>,
    image: null,
    color: '#e1d1c4',
    position: null
  },

]

export default function Home() {
  return (
    <div className="">
      <Main/>
      <Presentation/>
      {
        benefits.map((benefit, index) => (
          <BenefitSection
            key={index}
            index={index + 1}
            title={benefit.title}
            description={benefit.description}
            image={benefit.image}
            color={benefit.color}
            position={benefit.position}
          />
        ))
      }
      <Visibility/>
      <InfoSection
        title={'Especialización'}
        text={'En RANKTOP nos especializamos concretamente en el posicionamiento web. Disponemos de un equipo de profesionales en diferentes áreas del marketing digital que trabajan en armonía y con una finalidad concreta, el SEO. La especialización exhaustiva de este departamento nos proporciona una dedicación expresa y unos conocimientos especializados en lo que hacemos, con la única finalidad de multiplicar los ingresos de tu negocio online.'}
        ctaText={'Más información'}
      />
      <InfoSection
        title={'Especialización'}
        text={'En RANKTOP nos especializamos concretamente en el posicionamiento web. Disponemos de un equipo de profesionales en diferentes áreas del marketing digital que trabajan en armonía y con una finalidad concreta, el SEO. La especialización exhaustiva de este departamento nos proporciona una dedicación expresa y unos conocimientos especializados en lo que hacemos, con la única finalidad de multiplicar los ingresos de tu negocio online.'}
        ctaText={'Más información'}
        orientation="right"
      />
    </div>
  );
}
