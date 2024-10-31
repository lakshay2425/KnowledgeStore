import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="w-[90vw] m-auto px-6 md:px-12 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 ">
                    <h2 className="text-2xl font-bold mb-4">BookRental</h2>
                    <p className="mb-4 mr-6">
                        BookRental is your go-to online library for renting and exploring a wide range of books.
                    </p>
                    <div>
                        <span className="block"><i className="fas fa-phone mr-2"></i> +123-456-789</span>
                        <span className="block"><i className="fas fa-envelope mr-2"></i> support@bookrental.com</span>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></Link>
                        <Link to="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></Link>
                        <Link to="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div>

                <div className="w-full md:w-1/3 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><Link to={`${import.meta.env.VITE_FRONTEND_URL}/`} className="hover:underline">Home</Link></li>
                        <li className="mb-2"><Link to="#" className="hover:underline">About Us</Link></li>
                        <li className="mb-2"><Link to={`${import.meta.env.VITE_FRONTEND_URL}/Contact`} className="hover:underline">Contact Us</Link></li>
                        <li className="mb-2"><Link to="#" className="hover:underline">Blog</Link></li>
                        <li className="mb-2"><Link to="#" className="hover:underline">FAQ</Link></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 ">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <form action="#" method="post" className="flex flex-col space-y-4 border-none">
                        <input type="email" name="email" className="p-2 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 text-white" placeholder="Your email address..." />
                        <textarea name="message" className="p-2 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 text-white" placeholder="Your message..."></textarea>
                        <button type="submit" className="bg-yellow-500 text-gray-800 p-2 rounded hover:bg-yellow-600 transition">
                            <i className="fas fa-envelope mr-2"></i> Send
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-gray-900 text-gray-400 text-center py-4 mt-6">
                &copy; {new Date().getFullYear()} bookrental.com | Designed by YourName
            </div>
        </footer>
    );
};

export default Footer;
