import React, { useState } from 'react';

export default function Component() {
    const [openAnswer, setOpenAnswer] = useState(null);

  const toggleAnswer = (answerId) => {
    setOpenAnswer(openAnswer === answerId ? null : answerId);
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 ">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center justify-center items-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-gray-500 ">
              Get answers to the most common questions about our product.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border border-gray-200 bg-white  shadow-xl">
              <div className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                <h3 className="text-lg font-medium">What is the pricing structure for your product?</h3>
                <button
                  className="p-2 -mr-2 rounded-md transition-transform hover:bg-gray-100 "
                  onClick={() => toggleAnswer(1)}
                >
                  {openAnswer === 1 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              {openAnswer === 1 && (
              <div className="border-t border-gray-200 px-6 py-4 ">
                <p className="text-lg text-gray-500 ">
                  We offer a variety of pricing plans to fit the needs of businesses of all sizes. Our basic plan starts
                  at $9 per month, with additional features and customization options available in our Pro and
                  Enterprise plans. You can view all of our pricing details on the Pricing page.
                </p>
              </div>
            )}
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-xl ">
              <div className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                <h3 className="text-lg font-medium">How long does it take to get started with your product?</h3>
                <button
                  className="p-2 -mr-2 rounded-md transition-transform hover:bg-gray-100 "
                  onClick={() => toggleAnswer(2)}
                >
                  {openAnswer === 2 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              {openAnswer === 2 && (
              <div className="border-t border-gray-200 px-6 py-4 ">
                <p className="text-lg text-gray-500 ">
                  Getting started with our product is quick and easy. Once you sign up, you can have your account set up
                  and be ready to use our tools in just a few minutes. We provide detailed onboarding guides and 24/7
                  customer support to ensure a smooth experience from the very beginning.
                </p>
              </div>
              )}
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-xl ">
              <div className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                <h3 className="text-lg font-medium">What kind of customer support do you offer?</h3>
                <button
                  className="p-2 -mr-2 rounded-md transition-transform hover:bg-gray-100 "
                  onClick={() => toggleAnswer(3)}
                >
                  {openAnswer === 3 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              {openAnswer === 3 && (
              <div className="border-t border-gray-200 px-6 py-4 ">
                <p className="text-lg text-gray-500 ">
                  We pride ourselves on our exceptional customer support. Our team is available 24/7 to assist you with
                  any questions or issues you may have. You can reach us via email, phone, or live chat, and we'll work
                  quickly to resolve your concerns. We also have a comprehensive knowledge base and community forums
                  where you can find answers to common questions.
                </p>
              </div>
              )}
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-xl ">
              <div className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                <h3 className="text-lg font-medium">Do you offer any integrations or third-party connections?</h3>
                <button
                  className="p-2 -mr-2 rounded-md transition-transform hover:bg-gray-100 "
                  onClick={() => toggleAnswer(4)}
                >
                  {openAnswer === 4 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              {openAnswer === 4 && (
              <div className="border-t border-gray-200 px-6 py-4">
                <p className="text-lg text-gray-500 ">
                  Absolutely! Our product integrates seamlessly with a wide range of popular third-party tools and
                  platforms, including CRM systems, project management software, e-commerce platforms, and more. This
                  allows you to streamline your workflows and centralize your data. You can find a full list of our
                  integrations on our website.
                </p>
              </div>
              )}
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-xl ">
              <div className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                <h3 className="text-lg font-medium">What kind of security measures do you have in place?</h3>
                <button
                  className="p-2 -mr-2 rounded-md transition-transform hover:bg-gray-100"
                  onClick={() => toggleAnswer(5)}
                >
                  {openAnswer === 5 ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              {openAnswer === 5 && (
              <div className="border-t border-gray-200 px-6 py-4 ">
                <p className="text-lg text-gray-500 ">
                  Protecting the security and privacy of our customers' data is of the utmost importance to us. We
                  employ industry-leading security measures, including end-to-end encryption, two-factor authentication,
                  and regular security audits. Your information is safe with us, and we are fully compliant with all
                  relevant data protection regulations.
                </p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}