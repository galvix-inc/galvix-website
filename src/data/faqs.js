// FAQs for landing page
const faqs = [
    {
      "question": "Do I need to learn or use any software for sales tax return preparation & filing?",
      "answer":
        "No, you don’t need to learn or use any other software for preparing or filing your sales tax returns. Avalara, Vertex, and other do-it-yourself sales tax software give you a tool to do your own taxes. Galvix does your sales tax returns preparation and filing for you end-to-end.",
    },
    {
      "question": "Does Galvix sync with Quickbooks or other accounting or billing software?",
      "answer":
        "Galvix provides out-of-the-box integrations with popular accounting, billing, and e-commerce software like Quickbooks, Stripe, Xero, and Shopify. This allows us to automatically sync your invoice or order data for preparing your tax returns.",
    },
    {
      "question": "How do I contact my sales tax team at Galvix?",
      "answer":
        "You can schedule a call with your team (or send them a message) whenever you’d like. There’s no extra fee or hourly charges for support - we’re always happy to help you with anything related to sales tax for your business.",
    },
    {
      "question": "Where are your sales tax experts located? What are their qualifications?",
      "answer":
        "Each customer's primary point of contact is a dedicated in-house, professionally-trained sales tax expert based in North America. What makes Galvix unique is that we blend the human touch with modern technology. Our in-house team is also supported by machine learning technology, which allows us to automatically process large amounts of financial data instantly and prepare your tax returns faster and accurately.",
    },
    {
      "question": "Do I need to pay for anything besides Galvix to file my sales tax?",
      "answer":
        "A few states require a registration fee; however, most states are free. Besides that, the only recurring charge is your monthly/quarterly/annual filings.",
    },
    {
      "question": "Do I have to sign a long-term contract?",
      "answer":
        "No, we don't require customers to sign a long-term contract. You pay month-to-month and only when we file taxes or register you for a state.",
    },
    {
      "question": "What assurances does Galvix make for clients?",
      "answer":
        "We guarantee your sales tax is filed on time, or we'll pay your penalty and interest charges.",
    },
    {
      "question": "How do I get started?",
      "answer":
        "Getting started is easy - just sign up for our complimentary consultation call, during which we will understand your business and a little bit about your billing/accounting stack. We will then share a service agreement for your review and sign-off. Post that, our onboarding team will set up the Galvix account for you, while connecting to your billing or accounting software and configuring details like your existing tax registration numbers for each state, filing frequencies, etc. Once the account is active (usually takes about a week), no further steps are required from your end. We will prepare and share the draft returns for your review and approval by the 5th of every month. Once we get your approval (latest by the 10th), we will file your tax returns while uploading copies of the acknowledgments and any other documentation to your online account.",
    },
    {
      "question": "I have a question that didn’t get answered here. What do I do?",
      "answer": "Contact us at hello@galvix.com or schedule a complimentary consultation with our team here."
    }
    
    // More "question"s...
  ]


  // FAQs for Avalara VS Galvix 


  const faqsAvalaraAndGalvix = [
    {
      "question": "Can you connect with our billing system?",
      "answer":
        "Galvix uses APIs of your billing system (e.g. Stripe or Quickbooks) to fetch monthly sales transaction data. When that’s not feasible, it lets you import a spreadsheet of all the monthly transactions.",
    },
    {
      "question": "Do you also offer a tax engine to calculate the right tax amount to add to the invoices?",
      "answer":
        "Yes, Galvix offers a tax engine in addition to sales tax filing. But that’s not a requirement for us to file your monthly sales taxes. Because Galvix calculates your sales tax liability afresh at the time of tax filing.",
    },
    {
      "question": "How long does the initial setup take?",
      "answer":
        "It takes about 2 to 7 business days to get you set up for sales tax filing via Galvix. This includes connecting your billing systems, assigning accurate tax codes to your products, updating your nexus information, and receiving your online tax filing credentials for the state portals.  ",
    },
    {
      "question": "What does the monthly sales tax filing process with Galvix look like?",
      "answer":
        "The Galvix team prepares monthly returns and notifies you to review and approve them in the Galvix tax filing software. Once you approve, we file the returns on your behalf and upload the acknowledgments for your reference.",
    },
    {
      "question": "What kind of customer support can I expect from Galvix?",
      "answer":
        "All of us, including our founding team, are available over the phone to help you resolve your tax filing issues and concerns, hands-on.",
    },
    {
      "question": "Do you also help with sales tax registrations for different states?",
      "answer":
        "Yes, Galvix charges $150 to initiate and complete your sales tax registration for any given state.",
    },
  ]

  const faqsHomepage = [
    /*{
      "question": "How is Galvix sales tax filing priced?",
      "answer": "Galvix costs you $75 to file each return. For example, if there are 10 states with monthly returns and 5 states with quarterly returns, it costs you $75*10 per month and $75*5 per quarter. We also offer volume discounts.",
      "category": "Pricing"
    },*/
    {
      "question": "Can you connect with our billing system?",
      "answer": "Galvix uses APIs of your billing system (e.g. Stripe, Shopify, QuickBooks, etc.) to fetch monthly sales transaction data. When that’s not feasible, it lets you import a spreadsheet of all the monthly transactions.",
      "category": "Features"
    },
    {
      "question": "How do you ensure the accuracy of sales tax calculations and filing?",
      "answer": "Galvix relies on its proprietary and regularly updated sales tax engine to calculate tax liability independent of what’s mentioned on your sales invoices. And then it reconciles the same with what your billing system provides. This ensures tax filing accuracy.",
      "category": "Features"
    },
    {
      "question": "Do you also offer a tax engine to calculate the right amount of tax to add to the invoices?",
      "answer": "Yes. Galvix offers a tax engine that can add the right amount of tax to be collected on every invoice within your billing system. But that’s not a requirement for us to file your returns, as Galvix calculates your sales tax liability afresh at the time of tax filing, irrespective of how you collected the taxes.",
      "category": "Features"
    },
    {
      "question": "Do you also help with sales tax registrations for different states?",
      "answer": "Yes. Galvix can initiate and complete your sales tax registration for any given state.",
      "category": "Features"
    },
    {
      "question": "Do you also provide nexus analysis?",
      "answer": "Yes. Galvix software provides a real-time nexus tracking dashboard with supporting information about physical and economic nexus in each state.",
      "category": "Features"
    },
    {
      "question": "Are you a CPA? Do you offer accounting or CPA-related services too?",
      "answer": "No, we only offer sales tax filing and sales tax compliance services.",
      "category": "Features"
    },
    {
      "question": "How long does the initial setup take?",
      "answer": "It takes 2 to 7 business days to set you up for sales tax filing via Galvix. This includes connecting your billing systems, assigning accurate tax codes to your products, updating your nexus information, and receiving your online tax filing credentials for the state portals.",
      "category": "Set up, support, and security"
    },
    {
      "question": "What does the monthly sales tax filing process with Galvix look like?",
      "answer": "The Galvix team prepares monthly returns and notifies you to review and approve them in the Galvix tax filing software. Upon your approval, we file the returns on your behalf and upload the acknowledgments for your reference.",
      "category": "Set up, support, and security"
    },
    {
      "question": "What kind of customer support can I expect from Galvix?",
      "answer": "Each of us at Galvix, including our founding team, is available to help you resolve your tax filing issues and concerns, hands-on.",
      "category": "Set up, support, and security"
    },
    {
      "question": "Are your support execs trained on tax laws and your software?",
      "answer": "Yes, all our support execs are mandatorily trained for 2 months on state-wise sales tax laws and the Galvix tax filing software.",
      "category": "Set up, support, and security"
    },
    {
      "question": "Are you a certified sales tax provider with the SST (Streamlined Sales Tax)?",
      "answer": "We may apply for it if this creates tremendous value for our customers. So far, this hasn't come up as a requirement.",
      "category": "Set up, support, and security"
    },
    {
      "question": "How do you ensure the security of our business and sales transaction data?",
      "answer": "Our software comes with robust security features. Plus, we enforce strong contract measures to protect you against security breaches.",
      "category": "Set up, support, and security"
    },
    {
      "question": "How long has your company been in business? If I choose this solution, I want to be sure it will be around for a while.",
      "answer": "While we are a relatively young company (founded in 2023), we already serve businesses that have been around for decades. As a bootstrapped business, we are building a financially sustainable company that thrives on customer feedback and long-term value creation, irrespective of investor sentiments.",
      "category": "Set up, support, and security"
    }
  ];
  
  
  
  export { faqs, faqsAvalaraAndGalvix,faqsHomepage}