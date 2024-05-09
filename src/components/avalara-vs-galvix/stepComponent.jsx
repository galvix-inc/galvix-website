import React from 'react';
import { BuildingStorefrontIcon, CubeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

function StepsComponent({ stepsData }) {
  
  const getIcon = (iconName) => {
    const icons = {
      CubeIcon: <CubeIcon className="w-full aspect-square text-white" />,
      BuildingStorefrontIcon: <BuildingStorefrontIcon className="w-full aspect-square text-white" />,
      CheckCircleIcon: <CheckCircleIcon className="w-full aspect-square text-white" />
    };
    return icons[iconName] || <span>Icon Not Found</span>;
  };

  return (
    <dl className="mt-16 grid">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {stepsData.steps.map((step) => (  
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" key={step.step}>
            <div className="flex flex-col grow px-5 pb-3 max-md:mt-6">
              <div className="flex justify-center items-center px-2.5 w-10 h-10 bg-indigo-500 rounded-lg">
                {getIcon(step.icon)}
              </div>
              <div className="mt-5 text-base font-medium leading-6 text-indigo-600">
                Step {step.step}
              </div>
              <div className="mt-1.5 text-xl font-semibold leading-7 text-gray-900">
                {step.heading}
              </div>
              <img loading="lazy" src={step.imgSrc} alt={`Step ${step.step} Image`} className="mt-5 w-full aspect-[2.78]" />
              <ul className="mt-4 ml-2 list-disc list-inside">
                {step.descriptions.map((description, index) => (
                  <li key={index} className="text-base leading-6 text-gray-600 pb-2">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </dl>
  );
}

export default StepsComponent;
