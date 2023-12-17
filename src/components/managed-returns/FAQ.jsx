import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Do I need to learn or use any software for sales tax return preparation & filing?",
    answer:
      "No, you don’t need to learn or use any other software for preparing or filing your sales tax returns. Avalara, Vertex, and other do-it-yourself sales tax software give you a tool to do your own taxes. Galvix does your sales tax returns preparation and filing for you end-to-end.",
  },
  {
    question: "Does Galvix sync with Quickbooks or other accounting or billing software?",
    answer:
      "Galvix provides out-of-the-box integrations with popular accounting, billing, and e-commerce software like Quickbooks, Stripe, Xero, and Shopify. This allows us to automatically sync your invoice or order data for preparing your tax returns.",
  },
  {
    question: "How do I contact my sales tax team at Galvix?",
    answer:
      "You can schedule a call with your team (or send them a message) whenever you’d like. There’s no extra fee or hourly charges for support - we’re always happy to help you with anything related to sales tax for your business.",
  },
  {
    question: "Where are your sales tax experts located? What are their qualifications?",
    answer:
      "Each customer's primary point of contact is a dedicated in-house, professionally-trained sales tax expert based in North America. What makes Galvix unique is that we blend the human touch with modern technology. Our in-house team is also supported by machine learning technology, which allows us to automatically process large amounts of financial data instantly and prepare your tax returns faster and accurately.",
  },
  {
    question: "Do I need to pay for anything besides Galvix to file my sales tax?",
    answer:
      "A few states require a registration fee; however, most states are free. Besides that, the only recurring charge is your monthly/quarterly/annual filings.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No, we don't require customers to sign a long-term contract. You pay month-to-month and only when we file taxes or register you for a state.",
  },
  {
    question: "What assurances does Galvix make for clients?",
    answer:
      "We guarantee your sales tax is filed on time, or we'll pay your penalty and interest charges.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy - just sign up for our complimentary consultation call, during which we will understand your business and a little bit about your billing/accounting stack. We will then share a service agreement for your review and sign-off. Post that, our onboarding team will set up the Galvix account for you, while connecting to your billing or accounting software and configuring details like your existing tax registration numbers for each state, filing frequencies, etc. Once the account is active (usually takes about a week), no further steps are required from your end. We will prepare and share the draft returns for your review and approval by the 5th of every month. Once we get your approval (latest by the 10th), we will file your tax returns while uploading copies of the acknowledgments and any other documentation to your online account.",
  },
  {
    question: "I have a question that didn’t get answered here. What do I do?",
    answer:
      "Contact us at hello@galvix.com or schedule a complimentary consultation with our team here.",
  },
  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
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
      </div>
    </div>
  )
}
