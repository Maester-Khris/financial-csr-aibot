import React from 'react';

interface CliBoxProps {
  logs: any[];
}

export const CliBox: React.FC<CliBoxProps> = ({ logs }) => {
  return (
    <div className="flex-1 w-full overflow-y-scroll no-scrollbar relative bg-[#1e1e1e] border border-[#444] rounded-lg shadow-lg p-4 overflow-y-auto">
      {/* Command Lines */}
      <div className="mt-0 space-y-1">
        {logs.map((log, index) => (
             <div key={index} className="flex items-start">
             <span className="text-blue-300 min-w-[100px] mr-2 truncate">
               {log.file} 
             </span>
             <span className="text-white whitespace-pre-wrap break-words">
               {log.message}
             </span>
           </div>
        //   <div key={index} className="text-white font-mono text-[14px]">
        //     &gt; {line}
        //   </div>
        ))}
      </div>
    </div>
  );
};
