import logo from "../assets/images/logo.svg";
import heroImg from "../assets/images/hero-desktop.jpg";
import Information from "../components/information";

function App() {
    return (
        <>
            <div className="container">
                <div className="left-side">
                    <img src={logo} />
                    <Information />
                </div>
                <img src={heroImg} className="hero-img" />
            </div>
        </>
    );
}

export default App;
