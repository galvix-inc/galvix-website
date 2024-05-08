import React from 'react'
import Testimonial from './testimonial.jsx'

function Comparison() {
  const contentData = [
    {
      title: "Put an end to filing errors, penalties, and notices from the states.",
      description: "Stay on top of your sales tax liability and file accurate returns.",
      images: ["/images/avalara-vs-galvix/comparison1a.svg", "/images/avalara-vs-galvix/comparison1b.svg"]
    },
    {
      title: "Stop chasing 20 people and reading 20 articles in vain.",
      description: "Have a tax compliance expert & troubleshooter on standby.",
      images: ["/images/avalara-vs-galvix/comparison2a.svg", "/images/avalara-vs-galvix/comparison2b.svg"]
    },
    {
      title: "Stop paying for services you never get.",
      description: "Predict and control monthly sales filing costs",
      images: ["/images/avalara-vs-galvix/comparison3a.svg", "/images/avalara-vs-galvix/comparison3b.svg"]
    }
  ];

  return (
    <div><div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          No more high blood pressure
          </h2>
          <p className="mt-4 text-md leading-8 text-gray-600">
          Only high sales tax compliance
          </p>
        </div>
        <div>
      {contentData.map((item, index) => (
        <div key={index} className="flex gap-5 max-md:flex-col max-md:gap-0 mb-10 ">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch px-5 my-auto max-md:mt-10">
              <div className="text-xl font-bold leading-7 text-gray-900">
                {item.title}
              </div>
              <div className="mt-3 text-base leading-6 text-gray-600">
                {item.description}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-1 max-md:flex-col sm:gap-1" >
                {item.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Comparison ${index}-${idx}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Testimonial/>
      </div>
    </div>
  </div></div>
  )
}

export default Comparison