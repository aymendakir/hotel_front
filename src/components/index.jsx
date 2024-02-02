import Navbar from "./navbar.jsx";
import Fotter from "./fotter.jsx";
import Header from "./header.jsx";
import Navinpu from "./input_recherch/iput_nav.jsx";
import Inputs from "./input_recherch/inputs.jsx";
import Homechambre from "./homechamber.jsx";
import Clientsaye from "./Clientsaye.jsx";
import Emailform from "./Emailform.jsx";



export default function Index() {

    return (
        <>


            <Navbar />
            <Navinpu />

<Header />
            <Inputs />
            <Homechambre />
            <Clientsaye />
            <Emailform />
            <Fotter />
        </>
    );
}
