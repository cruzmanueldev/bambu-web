import React from 'react'

const BenefitSection = ({index, title, description, image, color, position}) => {

  const direction =
  position === 'right'
    ? 'md:flex-row'
    : 'md:flex-row-reverse'

  return (
    <div 
      // style={{ display: 'flex', flexDirection: position == 'right' ? 'row' : 'row-reverse'}}
      className={`w-[90%] xl:w-[50%] mx-auto py-14 flex flex-col ${direction} xl:justify-between gap-10 md:gap-2 xl:gap-16`}
    >
      <div className='flex'>
        <div className='mr-3'>
          <div style={{color: color}} className='text-9xl font-extrabold leading-[98px]'>{index}</div>
        </div>

        <div>
          <div style={{color: color}} className='text-5xl font-extrabold mb-3'>{title}</div>
          <div>{description}</div>
        </div>
      </div>
      {
        image && (
          <img src={image} className='w-full md:w-[50%]' alt={title} />
        )
      }
    </div>
  )
}

export default BenefitSection