import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const ClassRoutine = () => {
    const routineData = [
        { module: "Introductory", date: "January 06, 2025", classes: 1 },
        { module: "Listening", date: "January 8, 2025- January 25, 2025", classes: 8 },
        { module: "Reading (Academic)", date: "January 27, 2025- February 15, 2025", classes: 9 },
        { module: "Writing (Academic)", date: "February 17, 2025- March 17, 2025", classes: 11 },
        { module: "Speaking", date: "March 08, 2025-March 24, 2025", classes: 7 },
        { module: "Guideline class (Extra)", date: "December 24, 2024- January 04, 2024", classes: 3 },
        { module: "Mock Test 1", date: "February 12, 2025- February 16, 2025", classes: 2 },
        { module: "Mock Test 2", date: "February 17, 2025-February 20, 2025", classes: 3 },
    ];

    const totalClasses = routineData.reduce((sum, item) => sum + item.classes, 0);

    return (
        <div className="w-full">
            <div className="pt-4 md:mx-16 mx-10">
                <h2 className="text-xl font-semibold md:text-2xl ">
                    Class routine
                </h2>
            </div>
            <div className="md:w-[50%] mx-10 md:mx-16 bg-cover  rounded-xl md:mb-12 sm:mt-10 mb-10 xs:bg-[#EEF2F4] xs:py-2 ">
                <div className="container mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 bg-white text-left text-sm">
                            <thead>
                                <tr className="text-center">
                                    <th className="border px-4 py-4">মডিউল</th>
                                    <th className="border px-4 py-4">তারিখ</th>
                                    <th className="border px-4 py-4">মডিউল ভিত্তিক ক্লাস সংখ্যা</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routineData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2 align-middle text-center">{item.module}</td>
                                        <td className="border px-4 py-2 align-middle text-center">{item.date}</td>
                                        <td className="border px-4 py-2 align-middle text-center">{item.classes}</td>
                                    </tr>
                                ))}
                                <tr >
                                    <td className="border px-4 py-2 align-middle text-center" colSpan={2}>
                                        মোট ক্লাস
                                    </td>
                                    <td className="border px-4 py-2 align-middle text-center">{totalClasses}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassRoutine;
