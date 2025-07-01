

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }


import React from "react";
import {
    ChatBubbleLeftRightIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";




/** Props for ContactBlock */
type ContactBlockProps = {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    linkText?: React.ReactNode;
    linkHref?: string;
  };
  
  /** Utility component for left‑pane contact rows */
  function ContactBlock({ icon: Icon, title, subtitle, linkText, linkHref }: ContactBlockProps) {
    return (
      <div className="flex space-x-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
          {linkText && (
            <div className="mt-2 text-sm font-medium text-gray-900 underline">
              {linkHref ? (
                <a href={linkHref}>{linkText}</a>
              ) : (
                linkText
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

function Contact() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center rounded-md bg-gray-100 py-10 px-4">
            {/* Card wrapper */}
            <div className="mx-auto w-full max-w-6xl rounded-3xl border-[3px] border-gray-900 bg-white shadow-lg md:flex">


                <aside className="flex flex-col flex-shrink-0 md:w-80 p-10 space-y-8">
                    {/* Brand */}
                    <header className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded bg-blue-500" />
                        <h1 className="text-xl font-semibold tracking-tight">FinBot Team</h1>
                    </header>

                    {/* Detail blocks */}
                    <div className="space-y-10">
                        {/* Chat */}
                        <ContactBlock
                            icon={ChatBubbleLeftRightIcon}
                            title="Chat to us"
                            subtitle="Our friendly team is here to help."
                            linkText="hi@finbotheadquarter.com"
                            linkHref="mailto:hi@finbotheadquarter.com"
                        />

                        {/* Visit */}
                        <ContactBlock
                            icon={MapPinIcon}
                            title="Visit us"
                            subtitle="Come say hello at our office HQ."
                            linkText={
                                <>
                                    100 Smith Street
                                    <br /> Collingwood VIC 3066 AU
                                </>
                            }
                        />

                        {/* Call */}
                        <ContactBlock
                            icon={PhoneIcon}
                            title="Call us"
                            subtitle="Mon–Fri from 8am to 5pm."
                            linkText="(+1) 555 000‑0000"
                            linkHref="tel:+15550000000"
                        />
                    </div>

                    {/* Socials */}
                    <footer className="mt-auto flex space-x-3 pt-6">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#social"
                                className="rounded-md border border-gray-300 p-2 text-gray-600 transition hover:bg-gray-900 hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </footer>
                </aside>


                {/* ==== RIGHT PANE – Form =========================================== */}
                <div className="flex-1 rounded-b-2xl md:rounded-b-3xl md:rounded-r-3xl md:rounded-l-none bg-[#3CB8D9] py-14 px-10 sm:px-16 lg:px-24">
                    <h2 className="max-w-xl font-fredoka text-4xl font-extrabold leading-snug tracking-tight text-gray-900 md:text-5xl">
                        Got ideas? We’ve got the skills. Let’s team up.
                    </h2>
                    <p className="mt-6 max-w-lg text-lg text-gray-900">
                        Tell us more about yourself and what you’ve got in mind.
                    </p>

                    {/* === FORM ====================================================== */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-10 space-y-8 text-gray-900"
                    >
                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">Your name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border-0 border-b-2 border-gray-700 bg-transparent px-0 py-2 placeholder-gray-700 focus:border-black focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full border-0 border-b-2 border-gray-700 bg-transparent px-0 py-2 placeholder-gray-700 focus:border-black focus:outline-none"
                            />
                        </div>

                        {/* Description */}
                        {/* <div>
              <label className="mb-2 block text-sm font-medium">
                Tell us a little about the project…
              </label>
              <textarea
                rows={4}
                placeholder="Project description…"
                className="w-full resize-none border-0 border-b-2 border-gray-700 bg-transparent px-0 py-2 placeholder-gray-700 focus:border-black focus:outline-none"
              />
            </div> */}

                        {/* Checkboxes grid */}
                        <fieldset>
                            <legend className="mb-4 text-sm font-medium">How can we help?</legend>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                {[
                                    "Website design",
                                    "Content creation",
                                    "UX design",
                                    "Strategy & consulting",
                                    "User research",
                                    "Other",
                                ].map((label, idx) => (
                                    <label key={idx} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-600 text-black focus:ring-0 focus:ring-offset-0"
                                        />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-8 block w-full rounded-md bg-gray-900 py-3 text-center text-white transition hover:bg-gray-800"
                        >
                            Let’s get started!
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

/** Utility component for left‑pane contact rows */
// function ContactBlock({ icon: Icon, title, subtitle, linkText, linkHref }) {
//     return (
//         <div className="flex space-x-4">
//             <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900">
//                 <Icon className="h-6 w-6" />
//             </span>
//             <div>
//                 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//                 <p className="text-sm text-gray-600">{subtitle}</p>
//                 {linkText && (
//                     <div className="mt-2 text-sm font-medium text-gray-900 underline">
//                         {linkHref ? (
//                             <a href={linkHref}>{linkText}</a>
//                         ) : (
//                             linkText
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

export default Contact