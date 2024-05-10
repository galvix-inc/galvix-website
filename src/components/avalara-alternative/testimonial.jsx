import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      image: "/public/images/avalara-alternative/layer1.svg",
      text: "With Avalara, the discrepancies were in many thousands of dollars. The amount paid to the state was different than what was on the draft calculation, and it was different than what was deducted from the bank. And none matched the exact tax liability! With Galvix, everything is accurate and matches to the last dollar.",
      avatar: "/public/images/avalara-alternative/kshama.svg",
      name: "Kshama Patel",
      title: "Sr. Accountant, Poster Compliance"
    },
    {
      image: "/public/images/avalara-alternative/Layer_3.svg",
      text: "100% on a different spectrum. Avalara was just a frustration to deal with, it was like ‘I don't want to get out of bed in the morning because I know I have to work with these people’. With Galvix I can make a phone call and know that I can have a pleasant conversation that is going to resolve a problem very easily.",
      avatar: "/public/images/avalara-alternative/masdefenceavatar.svg",
      name: "Placeholder Name",
      title: "< >, MAS Defence"
    },
    
  ];

  return (
    <div className="flex md:gap-5 sm:gap-4 justify-between max-md:flex-wrap">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col px-5 text-base max-md:max-w-full mt-8">
          <img
            loading="lazy"
            src={testimonial.image}
            className="aspect-[1.2] w-[58px]"
          />
          <div className="mt-8 leading-6 text-gray-900 max-md:max-w-full">
            {testimonial.text}
          </div>
          <div className="flex gap-3.5 mt-8 leading-[150%] max-md:flex-wrap">
            <img
              loading="lazy"
              src={testimonial.avatar}
              className="shrink-0 aspect-square "
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="font-semibold text-gray-900 max-md:max-w-full">
                {testimonial.name}
              </div>
              <div className="mt-1 text-gray-700 max-md:max-w-full">
                {testimonial.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
