import { Link, useRouteError } from "react-router-dom";
import Footer from "../../components/layouts/Footer/Footer";
import Navbar from "../../components/layouts/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Animemine - Error</title>
            </Helmet>
            <Navbar />
            <div className="w-full h-[80vh] grid place-items-center text-white font-poppins">
                <div className="text-center">
                    <img src="https://media.tenor.com/p-tsA5hdz2cAAAAi/crying-cute-anime.gif" alt="" className="m-auto w-2/3" />
                    <p className="py-6 text-white">Oops! We Can't Find The Page</p>
                    <Link to="/" className="bg-animemine rounded-full py-2 px-8 text-sm">{"<<"} Back To HomePage</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error;