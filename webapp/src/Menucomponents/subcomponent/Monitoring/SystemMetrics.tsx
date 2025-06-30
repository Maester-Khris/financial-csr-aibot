import { MagnifyingGlass } from "@phosphor-icons/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SystemMetrics() {
    const data = [
        { name: 'Page A', uv: 420, pv: 2400, amt: 2450 },
        { name: 'Page B', uv: 380, pv: 2750, amt: 2600 },
        { name: 'Page C', uv: 500, pv: 2300, amt: 2900 },
        { name: 'Page D', uv: 450, pv: 3100, amt: 2700 },
        { name: 'Page E', uv: 520, pv: 2900, amt: 3000 },
        { name: 'Page F', uv: 410, pv: 3250, amt: 2800 }
    ];

    return (
        <>
            <div className='mb-2 ml-2'>
                <h2 className="text-xl font-bold mb-2">System metrics</h2>
            </div>
            <div className="mt-3 mx-1">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 5 }}>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-6 mx-1">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 5 }}>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='system-key-metrics mt-8 flex gap-2'>
                <div className="w-40% bg-white shadow-md rounded-lg md:p-3 p-4">
                    <div className="flex items-start justify-between gap-1">
                        <div className="flex flex-col text-gray-800">
                            <div className="text-xl mb-1">
                                <MagnifyingGlass weight="bold" size={48} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold">
                                1,234
                            </div>
                        </div>
                        <div className="text-right text-sm md:w-2/3 w-1/2 self-center text-gray-500 break-words">
                            Pageviews cumulative count (24 hours)
                        </div>
                    </div>
                </div>
                <div className="w-40% bg-white shadow-md rounded-lg md:p-3 p-4">
                    <div className="flex justify-between gap-1">
                        <div className="text-left text-sm md:w-2/3 w-1/2 self-center text-gray-500 break-words">
                            Pageviews cumulative count (24 hours)
                        </div>
                        <div className="flex flex-col items-end text-gray-800">
                            <div className="text-xl mb-1">
                                <MagnifyingGlass className="scale-x-[-1]" weight="bold" size={48} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold ">
                                1,234
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SystemMetrics