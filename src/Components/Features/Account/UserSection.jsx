import { RiEdit2Line } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const UserSection = ({ title, children }) => (
    <div className="w-full md:w-[96%] h-auto bg-white/10 mx-4 md:mx-8 my-4 rounded-2xl py-4 md:py-3 border-2 border-gray-500/30">
        <div className="flex flex-col md:flex-row h-auto justify-between items-center px-4 md:px-4 py-3">
            <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
            <button className="flex gap-1 px-4 md:px-5 h-10 md:h-12 py-2 md:py-3 rounded-3xl border-2 border-zinc-500/30 text-zinc-800 hover:bg-slate-400 duration-700 mt-2 md:mt-0">
                Edit <RiEdit2Line className="text-lg" />
            </button>
        </div>
        {children}
    </div>
);
export default UserSection