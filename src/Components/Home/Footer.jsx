import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-4">
      <div className="w-[90vw] m-auto px-6 md:px-12 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-bold mb-4">Knowledge Store</h2>
          <p className="mb-4 mr-6">
            Knowledge Store is your go-to online library for renting and
            exploring a wide range of books.
          </p>
          <div>
            <span className="block">
              support@KnowledgeStore.com
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link
                to={`${import.meta.env.VITE_FRONTEND_URL}/`}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to={`${import.meta.env.VITE_FRONTEND_URL}/Contact`}
                className="hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 text-center py-4 mt-6">
        &copy; {new Date().getFullYear()} KnowledgeStore.com
      </div>
    </footer>
  );
};

export default Footer;
