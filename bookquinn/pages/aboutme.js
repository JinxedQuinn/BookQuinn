import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Infos from "@/app/components/Infos";
import Footer from "@/app/components/Footer";
import '../app/globals.css';

const aboutme = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Infos />
            <Footer />
        </>
    );
}

export default aboutme;