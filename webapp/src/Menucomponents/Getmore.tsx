
function Getmore() {
    return (
        <div className="w-[100%] flex justify-center items-center p-4 gap-4">
            <div className="w-[80%] md:w-[90%] p-4 flex h-full rounded-lg shadow-lg shadow-lg bg-[url(/monitoring.png)] bg-no-repeat bg-cover bg-left bg-[length:20%] bg-[position:-300px_0]">
            </div>
            <div className="w-[50%] md:w-[50%] p-6 flex flex-col h-full justify-center rounded-lg shadow-lg bg-[#E5E4E2] ">
           

<form className="contact-form w-full space-y-6">
        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Contact Form</h2>
          <p className="text-base text-gray-500 mt-1">
            This form is used to gather minimal information about you and your case.
          </p>
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-base font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue="janesmith"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 text-base"
          />
        </div>

        {/* Telephone with Country Code */}
        <div>
          <label htmlFor="phone" className="block text-base font-medium text-gray-700">
            Telephone
          </label>
          <div className="flex gap-2 mt-1">
            <select
              className="rounded-md border border-gray-300 p-2 bg-white text-base"
              defaultValue="+1"
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              {/* Add more as needed */}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              className="flex-1 rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="role" className="block text-base font-medium text-gray-700">
            Reason of contact
          </label>
          <select
            id="role"
            name="role"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            defaultValue=""
          >
            <option value="" disabled>
              Select an answer
            </option>
            <option value="developer">I want to collaborate</option>
            <option value="designer">I want to hire you</option>
            <option value="manager">I want an external consultant</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="about" className="block text-base font-medium text-gray-700">
            Leaver a message
          </label>
          <textarea
            id="about"
            name="about"
            rows={4}
            placeholder="Write a few sentences about why you would like to get in touch with uss."
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 resize-none text-base"
          ></textarea>
        </div>

        
      

        

 <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="rounded-md bg-gray-400 px-5 py-2 text-xl font-semibold text-white">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-5 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>


      </form>

            </div>
        </div>
    )
}

export default Getmore

{/* <div classNameName="max-w-md mx-auto ">   
</div> */}
{/* <htmlForm classNameName="space-y-4">
<div>
    <label classNameName="block text-sm font-medium text-gray-600 mb-1">Name</label>
    <input
        type="text"
        classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        placeholder="Your name"
    />
</div>

<div>
    <label classNameName="block text-sm font-medium text-gray-600 mb-1">Email</label>
    <input
        type="email"
        classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        placeholder="you@example.com"
    />
</div>

<div>
    <label classNameName="block text-sm font-medium text-gray-600 mb-1">Message</label>
    <textarea
        rows={4}
        classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        placeholder="Write your message..."
    ></textarea>
</div>

<button
    type="submit"
    classNameName="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
>
    Send
</button>
</htmlForm> */}




        // <div classNameName="relative w-full flex justify-start items-center p-4">
        //     <div classNameName="w-[70%] md:w-[50%] p-4 h-full rounded-lg shadow-lg bg-[url(/monitoring.png)] bg-no-repeat bg-cover bg-left bg-[length:20%] bg-[position:-300px_0]">
        //     </div>

            
        //     <div classNameName="absolute top-[20%] left-[50%] translate-x-[-20%] translate-y-[-20%] w-[300px] md:w-[400px] p-6 rounded-2xl shadow-xl bg-amber-100">
                
                
        //         <div classNameName="max-w-md mx-auto p-6 space-y-6">
        //             <h2 classNameName="text-2xl font-semibold text-gray-800">Contact Us</h2>
        //             <htmlForm classNameName="space-y-4">
        //                 <div>
        //                     <label classNameName="block text-sm font-medium text-gray-600 mb-1">Name</label>
        //                     <input
        //                         type="text"
        //                         classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        //                         placeholder="Your name"
        //                     />
        //                 </div>

        //                 <div>
        //                     <label classNameName="block text-sm font-medium text-gray-600 mb-1">Email</label>
        //                     <input
        //                         type="email"
        //                         classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        //                         placeholder="you@example.com"
        //                     />
        //                 </div>

        //                 <div>
        //                     <label classNameName="block text-sm font-medium text-gray-600 mb-1">Message</label>
        //                     <textarea
        //                         rows={4}
        //                         classNameName="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        //                         placeholder="Write your message..."
        //                     ></textarea>
        //                 </div>

        //                 <button
        //                     type="submit"
        //                     classNameName="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
        //                 >
        //                     Send
        //                 </button>
        //             </htmlForm>
        //         </div>
        //     </div>
        // </div>