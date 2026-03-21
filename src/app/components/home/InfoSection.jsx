
export default function InfoSection({ 
  title, 
  text, 
  ctaText, 
  onCtaClick,
  orientation='left'
}) {

  const isLeft = orientation === 'left'

  return (
    <section className="">
      
      <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div 
          className={`
            relative z-10 inline-block bg-black px-22 py-8 -mb-6
            ${isLeft ? 'rounded-r-full' : 'rounded-l-full'}
          `}
        >
          <h2 className="text-center text-4xl font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
      
      <div className={`${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
        <div className={`
            mb-8 w-[80%] text-lg leading-relaxed text-black border border-gray-500
            ${isLeft
              ? 'pl-8 md:pl-16 pr-8 rounded-l-4xl border-r-0'
              : 'pr-8 md:pr-16 pl-8 rounded-r-4xl border-l-0'
            }
          `}>
          <p className="py-8">
            {text}
          </p>
          <div className="pb-8">
            {ctaText && (
              <button
                onClick={onCtaClick}
                className="rounded-full cursor-pointer bg-black px-6 py-3 text-white transition hover:bg-gray-900"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
