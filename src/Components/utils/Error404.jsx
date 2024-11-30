import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate("/");
    }
    return (
        <div className='w-full h-screen absolute flex-col items-center justify-evenly bg-gray-800'>
            <div className='flex-col items-center text-center leading-6 w-min h-min m-auto text-zinc-300 my-44'>
                {/* <img className='aspect-square z-1' src="https://th.bing.com/th/id/OIP.Ir02TbDe0hBcafBQmN9Z2wHaHk?rs=1&pid=ImgDetMain" alt="" /> */}

                <h1 className='text-8xl border-b-8 border-yellow-400 rounded-md'>404</h1>
                <p className='text-2xl font-bold'>Ops!You ran out of oxygen!</p>
                <p className='w-[250px] py-2'>The page you are looking for doesn't exist or has been moved</p>
                <button className='my-4 bg-slate-700 border-spacing-4 rounded-2xl ring-gray-400 	shadow-xl backdrop-blur-lg font-semibold px-5 py-4' onClick={handleNavigation}>Back to home page</button>
            </div>
        </div>

    )
}

export default Error404;