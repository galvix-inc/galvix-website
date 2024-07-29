import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const groupByCategory = (faqs) => {
  const categorizedFaqs = faqs.reduce((acc, faq) => {
    if (faq.category) {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
    } else {
      if (!acc['Uncategorized']) {
        acc['Uncategorized'] = [];
      }
      acc['Uncategorized'].push(faq);
    }
    return acc;
  }, {});

  return categorizedFaqs;
};

export default function FAQ({ faqs }) {
  const groupedFaqs = groupByCategory(faqs);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl ">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 ">FAQS</h2>
          {Object.entries(groupedFaqs).map(([category, faqs]) => (
            faqs.length > 0 && (
              <div key={category} className="mt-12">
                {category !== 'Uncategorized' && (
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-500 ">{category}</h3>
                )}
                <dl className=" space-y-6 divide-y divide-gray-900/10">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7">{faq.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
