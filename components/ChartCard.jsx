'use client'
import React, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import Chart from "./Chart";
import ProButton from "./Buttons/ProButton";
import Link from "next/link";
import Dropdown from "./CustomDropdown";
import { chartDetails } from "../resources/data";

const options = [
    { value: '1 Month', label: '1 Month', isPro: true },
    { value: '2 Months', label: '2 Months', isPro: true },
    { value: '6 Months', label: '6 Months', isPro: true },
    { value: '2 Years', label: '2 Years' },
    { value: '3 Years', label: '3 Years' },
];
const categories = [
    "Featured", "AI", "Beauty", "Design", "Eco", "Education", "Fashion",
    "Finance", "Fitness", "Food", "Gaming", "Health", "Home", "Lifestyle",
    "Luxury", "Marketing", "Media", "Pets", "Science", "Social", "Software",
    "Sports", "Technology", "Travel"
];

export default function ChartCard() {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState('All Categories');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const itemsPerPage = 6;
    const maxPageNumbersToShow = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = chartDetails.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(chartDetails.length / itemsPerPage);
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handleYearSelect = (selectedValue) => {
        console.log('Selected option:', selectedValue);
    };

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleSelectCategory = (category) => {
        setSelectedOption(category);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="container py-10">

            <div className="flex flex-col justify-center items-center" >
                <h1 className="text-4xl font-bold text-center" >Discover Commodity Prices</h1>
                <p className="text-gray-500 font-medium my-10 text-center" >We surface rapidly growing topics before they take off.</p>

                <div className="flex flex-wrap mb-10 items-center relative" >
                    <p className="text-gray-500 font-semibold text-sm w-full lg:w-auto p-2" >Filter By :</p>


                    <div className="w-1/2 md:w-36 p-2">
                        <Dropdown
                            options={options}
                            label="Future Forecast"
                            onSelect={handleYearSelect}
                        />
                    </div>


                    <div ref={dropdownRef} className="w-1/2 md:w-48 p-2" >
                        <button
                            onClick={toggleDropdown}
                            className="w-full bg-white border border-gray-300 rounded-lg text-gray-400 p-2 text-sm text-left flex justify-between items-center"
                        >
                            {selectedOption}
                            <span className="ml-2 text-gray-400">
                                {isOpen ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4 " />}
                            </span>
                        </button>

                        {isOpen && (
                            <div className="absolute top-22 lg:top-12 right-0 w-full bg-white border p-2 flex flex-wrap justify-center rounded-lg  shadow-lg z-10">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSelectCategory(category)}
                                        className={`text-xs font-medium m-2 py-2 px-3 border hover:border-blue-600 cursor-pointer rounded-[4] ${selectedOption === category ? 'bg-blue-600 text-white' : 'text-blue-700 bg-blue-100'}`}
                                    >
                                        <p>

                                            {category}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>


                    <div className="w-full md:w-72 bg-white border border-gray-300 rounded-lg text-gray-700 p-2 m-2 text-sm text-left flex justify-between items-center" >
                        <FaSearch className="h-4 w-4" />
                        <input className="w-full outline-none mx-3" placeholder="Search Trends" type="text" name="search" id="" />
                        <span className="text-gray-500"><ProButton title={'Pro'} href={'#'} css={'px-2'} /></span>
                    </div>


                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentItems.map((item, index) => (
                    <div
                        className="relative w-full bg-white p-2 border border-transparent transition-colors duration-300 hover:border-[#2E5CE5]"
                    >
                        {/* Display "hello" in the center without blur effect */}
                        {!item.pro && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                <p className="font-bold text-xl flex items-center gap-2" >
                                    <ProButton title={'Pro'} href={'#'} />
                                    Member Only
                                </p>
                                <Link href={'#'} className="text-xl font-bold text-white bg-indigo-600 p-3 mt-3 rounded-[4px]">
                                    Try Exploading Topic Pro
                                </Link>
                            </div>
                        )}

                        <Link key={index} prefetch={false} href={item.pro ? `/topic/${item.id}` : "/"} className={`${!item.pro ? 'blur-sm' : ''}`}>
                            <div className="p-3 flex justify-between">
                                <h2 className="text-xl font-bold">{item.heading}</h2>
                                <div className="flex gap-4">
                                    <p className="text-xl font-bold flex flex-col text-indigo-700">
                                        {item.volume}
                                        <span className="text-xs text-gray-500 font-medium text-center">Volume</span>
                                    </p>
                                    <p className="text-xl font-bold flex flex-col text-green-500">
                                        {item.growth}
                                        <span className="text-xs text-gray-500 font-medium text-center">Growth</span>
                                    </p>
                                </div>
                            </div>
                            <Chart dataPoints={item.dataPoints} height={240} toolTip={false} />
                            <p className="text-sm my-4 mx-1 line-clamp-2">{item.desc}</p>
                            <span className="border py-1 px-2 bg-gray-100 text-gray-700 text-sm">
                                {item.btn}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>


            {/* Pagination Controls */}
            <div className="flex items-center mt-6 gap-3 ">

                <div className="flex items-center mt-6 gap-3 ">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 ${currentPage === 1 ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormPrevious />
                    </button>

                    {/* Page number buttons */}
                    <div className="flex gap-3">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`px-3 py-1 ${currentPage === number ? 'border border-black' : 'bg-white text-gray-200'} rounded-sm`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 ${currentPage === totalPages ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormNext />
                    </button>
                </div>
            </div>

        </div>
    );
}   