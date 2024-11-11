'use client'

import { useParams } from "next/navigation";
import { chartDetails } from "../../../resources/data";
import Chart from "@/components/Chart";
import Dropdown from "@/components/CustomDropdown";

const options = [
    { value: '1 Month', label: '1 Month', isPro: true },
    { value: '2 Months', label: '2 Months', isPro: true },
    { value: '6 Months', label: '6 Months', isPro: true },
    { value: '2 Years', label: '2 Years' },
    { value: '3 Years', label: '3 Years' },
];

export default function Topics() {

    const { id } = useParams()
    const chart = chartDetails.find((chart) => chart.id == id)
    console.log(chart)
    const handleYearSelect = (selectedValue) => {
        console.log('Selected option:', selectedValue);
    };

    return (
        <div className="h-auto max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-medium text-start ">{chart.heading}</h2>

            <p className="text-md font-medium text-gray-500 my-8">{chart.desc}</p>

            <div className="relative bg-white p-2 border border-transparent transition-colors duration-300 hover:border-[#2E5CE5] w-full">
                <div className="p-3 flex justify-between">
                    <div className="w-44" >
                        <Dropdown options={options} label="Future Forecast" onSelect={handleYearSelect} />
                    </div>
                    <div className="flex gap-4">
                        <p className="text-3xl font-bold flex flex-col text-indigo-700">
                            {chart.volume}
                            <span className="text-xs text-gray-500 font-medium text-center">Volume</span>
                        </p>
                        <p className="text-3xl font-bold flex flex-col text-green-500">
                            {chart.growth}
                            <span className="text-xs text-gray-500 font-medium text-center">Growth</span>
                        </p>
                    </div>
                </div>

                <Chart dataPoints={chart.dataPoints} height={500} toolTip={true} yaxis={true} />

                <span className="border py-1 px-2 bg-gray-100 text-gray-700 text-sm">
                    {chart.btn}
                </span>
            </div>
        </div>
    )
}
