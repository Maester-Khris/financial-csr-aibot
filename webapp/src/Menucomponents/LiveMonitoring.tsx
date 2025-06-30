import { useState } from 'react'
import {MagnifyingGlass } from "@phosphor-icons/react";
import SystemMetrics from './subcomponent/Monitoring/SystemMetrics';
import VerticalMenu from './subcomponent/VerticalMenu';
import { CliBox } from './subcomponent/Monitoring/CliBox';

function LiveMonitoring() {
  const cmdLogs = [
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'example', 'icon': ['cbp-ig-icon', 'devicon-example']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'user', 'icon': ['cbp-ig-icon', 'devicon-python']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'dashboard', 'icon': ['cbp-ig-icon', 'devicon-react']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'cli', 'icon': ['cbp-ig-icon', 'devicon-nodejs']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'api', 'icon': ['cbp-ig-icon', 'devicon-django']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'cli', 'icon': ['cbp-ig-icon', 'devicon-nodejs']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'api', 'icon': ['cbp-ig-icon', 'devicon-django']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'cli', 'icon': ['cbp-ig-icon', 'devicon-nodejs']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'api', 'icon': ['cbp-ig-icon', 'devicon-django']}" },
    { file: "scraper.py", message: "scraping percentage 100%" },
    { file: "icons.py", message: "read icon list" },
    { file: "formatter.py", message: "{'name': 'example', 'icon': ['cbp-ig-icon', 'devicon-example']}" },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
    console.log("Current search term:", event.target.value);
  };

  return (
    <div className="flex h-full w-full text-base font-bold">
     <VerticalMenu></VerticalMenu>

      {/* Main section  */}
      <div className="monitor rounded-tr-[10px] rounded-br-[10px] flex-1 bg-gray-100 p-6 flex flex-col">
        <div>
          <h1 className="text-2xl text-black font-bold">System Performance monitoring</h1>
          <p className="mt-0 text-gray-700">Take a look at your system key metrics and logs in real-time.</p>
        </div>
        <div className='mt-5 w-full flex-1 flex flex-col sm:flex-row gap-4 bg-gray-100'>
          {/* Main section: Part 1 Log Tracker  */}
          <div className="monitoring-logs w-[70%] md:w-[75%] p-4 flex flex-col h-full rounded-lg shadow-lg bg-[#E5E4E2] ">
            {/* title and searchbar  */}
            <div className="flex justify-between items-center ">
              <div className='translate-y-1'>
                <h2 className="text-xl font-bold mb-2">System Logs Tracker</h2>
              </div>
              <div>
                {/* searchbar */}
                <div className="relative flex items-center w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="bg-white block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            text-gray-900 placeholder-gray-500 text-sm leading-6
                            transition-all duration-200 ease-in-out"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlass weight="bold" size={18} />
                  </div>
                </div>
              </div>
            </div>
            {/* status and healthcheck  */}
            <div className='mt-2 py-2 '>
                <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-semibold text-gray-800">Service Status:</span>
                    <span className="text-sm font-bold text-green-700">Online</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Last Health Check:</span> 2025/06/19 12:20:05
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Retries (last check):</span> 05
                  </div>
                </div>
            </div>
            {/* cli section*/}
            <div className='flex-1 flex flex-col mt-0.5 max-h-[540px]'>
              <CliBox logs={cmdLogs}></CliBox>
            </div>
          </div>
          {/* Main section: Part 2 System metrics  */}
          <div className="monitoring-metrics w-[30%] md:w-[35%] h-full rounded-lg py-4 px-1 shadow-lg bg-[#E5E4E2] flex flex-col">
           <SystemMetrics></SystemMetrics>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveMonitoring
