import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import GridProject from "@/app/components/GridProject";
import '../app/globals.css';

const cv = () => {
    return (
        <>
            <Header />
            <Navbar />
            <GridProject />
            <Footer />
        </>
    );
}

export default cv;