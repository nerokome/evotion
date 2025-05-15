import React from 'react'

const Goal = () => {
return (
    <div>
        <div className="bg-[url('/ind.png')] bg-center bg-cover h-[80vh] sm:h-[60vh] relative text-white sm:bg-cover sm:bg-center">
            <div className="absolute inset-0 bg-black opacity-60 z-[1] sm:opacity-50"></div>
            <div className="absolute inset-0 from-black to-transparent z-[2]"></div>
            <div className="p-9 relative z-10">
                <div className="flex flex-col items-start justify-center h-full mt-40 p-6">
                    <h1 className="text-4xl font-bold text-start mb-4 sm:text-5xl">Our goal</h1>
                    <p className="text-2xl text-center mb-8 sm:text-3xl">
                        To build a community of believers centered on a shared faith,
                        daily encouragement and spiritual reflection.
                    </p>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg sm:py-1 sm:px-3 sm:text-lg">
                        Our Resources
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Goal
