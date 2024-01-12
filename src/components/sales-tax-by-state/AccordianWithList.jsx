import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const dataItems = [
  {
    title: "Cities Sales Tax Rate",
    list: [
      {
        "name": "Dublin",
        "url": "#"
      },
      {
        "name": "Pleasanton",
        "url": "#"
      }
    ]
  },
  {
    title: "Counties Sales Tax Rate",
    list: [
      {
        "name": "Dublin",
        "url": "#"
      },
      {
        "name": "Pleasanton",
        "url": "#"
      }
    ]
  },
]

export default function AccordianWithList(myParam) {
  return (
    <div className="mx-auto">
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {dataItems.map((item) => (
            <Disclosure as="div" key={item.title} className="pt-6">
            {({ open }) => (
                <>
                <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-xl font-semibold">{item.title}</span>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    {item.list.map((listItem) => (
                      <div className="col-span-1" key={listItem.name}>
                        {myParam}
                        {listItem.name}
                      </div>
                    ))}
                    
                  </div>
                  
                    {/* <p className="text-base font-semibold text-indigo-500">{item.list}</p> */}
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        ))}
        </dl>
    </div>
  )
}
