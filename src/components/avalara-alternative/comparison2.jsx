import React from "react";

function Comparison2() {
  const comparisonData = [
    {
      imageUrl: "/images/avalara-alternative/comparison1.svg",
      title: "File accurate sales taxes, no matter what",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "Remit the right amount of taxes to each state, each month even if your invoices miscalculate them.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t file your taxes blindfolded and then invite heavy penalties and notices from the states.",
        },
      ],
    },
    {
      imageUrl: "/images/avalara-alternative/comparison2.svg",
      title: "Resolve filing issues promptly",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "Get 24x5 access to hands-on support execs trained in the software and the tax laws of each state.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t chase 20 people to resolve one thing, only to be recommended several articles to read and ‘enterprise’ support packages to buy.",
        },
      ],
    },
    {
      imageUrl: "/images/avalara-alternative/comparison3.svg",
      title: "Flag tax discrepancies at the outset",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "Reconcile your tax calculations in real-time so you can fix invoice errors before they become a nuisance.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t let tax under-collection go unnoticed and then pay taxes out of your profit margins.",
        },
      ],
    },
    {
      imageUrl: "/images/avalara-alternative/comparison4.svg",
      title: "Claim monthly tax deductions",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "Adjust your monthly tax liability against available credits or pre-payment incentives.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t lose out on deductions your business is eligible for.",
        },
      ],
    },
    {
      imageUrl: "/images/avalara-alternative/comparison5.svg",
      title: "Have all your sales tax info at your fingertips",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "View your monthly filing summary, drill down into tax calculations, or track nexus from one screen.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t jump from tab to tab and article to article, just to find simple answers on your sales tax compliance.",
        },
      ],
    },
    // Include more objects for additional sections
  ];

  const comparisonPricing = [
    {
      imageUrl: "/images/avalara-alternative/returns-table.svg",
      title: "Pay just $75 per return or even less",
      details: [
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/836803a9770bd62cc27922dfa132d1259ce54bec6ed9f71205e39754b065eb34?",
          text: "Control your monthly sales filing costs and know exactly how much you will need to pay.",
        },
        {
          iconUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e356f90994a277e48f85ab118830d3f784839c9a1c49cceb29092d32fa696c3f?",
          text: "Don’t keep paying thousands of dollars for ‘nobody knows what’.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make your monthly sales tax filing error-free and easy.
          </h2>
          <p className="mt-4 text-md leading-8 text-gray-600">
            And be always audit-ready with Galvix’s expert-assisted sales tax
            filing software
          </p>
        </div>
        {comparisonData.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } gap-5 max-md:flex-col max-md:gap-0 sm:gap-2 mt-4 `}
          >
            <div className="flex flex-col md:w-[50%] max-md:ml-0 max-md:w-full p-8">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src={item.imageUrl}
                  alt="Comparison visual"
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-auto max-md:ml-0 max-md:w-full p-4 ">
              <div className="flex flex-col text-lg leading-7 text-gray-600 ">
                <div className="w-full text-3xl font-bold leading-9 text-gray-900 max-md:max-w-full">
                  {item.title}
                </div>
                {item.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex gap-3 pr-5 mt-8 max-md:flex-wrap"
                  >
                    <img
                      loading="lazy"
                      src={detail.iconUrl}
                      className="shrink-0 self-start w-5 mt-2 aspect-square"
                      alt="Detail icon"
                    />
                    <div className="flex-1 max-md:max-w-full">
                      {detail.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {comparisonPricing.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row-reverse gap-5 max-md:flex-col max-md:gap-0 sm:gap-2 `}
          >
            <div className="flex flex-col md:w-[50%] max-md:ml-0 max-md:w-full sm:p-8 xs:p-1">
              <div className="flex flex-col px-10 py-9 bg-white rounded-3xl shadow-xl mx-auto sm:max-w-[70%] xs:max-w-[100%]">
                <div className="text-base font-semibold leading-6 text-indigo-600">
                  State Filings
                </div>
                <div className="flex gap-3 mt-5">
                  <div className="text-5xl font-bold text-gray-900">$75</div>
                  <div className="self-end mt-7 text-base leading-6 text-gray-500">
                    per filing
                  </div>
                </div>
                <div className="mt-2 text-base leading-6 text-gray-500">
                  One-time fee, no subscriptions.
                </div>
                <div className="mt-8 text-lg leading-7 text-gray-600">
                  We charge a flat fee per filing for each state regardless of
                  revenue.
                </div>
                <a href="/get-started" className="mx-auto rounded-md mt-8 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get Started
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-auto max-md:ml-0 max-md:w-full p-4 ">
              <div className="flex flex-col text-lg leading-7 text-gray-600 ">
                <div className="w-full text-3xl font-bold leading-9 text-gray-900 max-md:max-w-full">
                  {item.title}
                </div>
                {item.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex gap-3 pr-5 mt-8 max-md:flex-wrap"
                  >
                    <img
                      loading="lazy"
                      src={detail.iconUrl}
                      className="shrink-0 self-start w-5 mt-2 aspect-square"
                      alt="Detail icon"
                    />
                    <div className="flex-1 max-md:max-w-full">
                      {detail.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comparison2;
