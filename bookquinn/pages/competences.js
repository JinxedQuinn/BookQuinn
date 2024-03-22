import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import '../app/globals.css';

const competences = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Skills />
            <Footer />
        </>
    );
}

export default competences;