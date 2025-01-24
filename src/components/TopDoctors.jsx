import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { BarLoader } from 'react-spinners'
const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors, loading } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <>
            {loading ? (<div className='flex justify-center'>
                            <h5 className='text-center mt-10'>
                                <BarLoader color="#5f6FFF" />
                            </h5>
                        </div>
            ) 
            : 
            (<div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-[#EAEFFF]' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-[#f5f3f3] text-lg font-medium'>{item.name}</p>
                            <p className='text-[#faf6f6] text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
                </div>
            )}
            </>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-black px-12 py-3 rounded-full mt-10'>more</button>
        </div>

    )
}

export default TopDoctors