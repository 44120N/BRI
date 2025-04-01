import Theme from "./components/Theme";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { MathJaxContext } from "better-react-mathjax";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    return (
        <>
            <Theme>
                <MathJaxContext>
                    <Header />
                    <Outlet />
                    <ScrollToTop/>
                    <Footer />
                </MathJaxContext>
            </Theme>
        </>
    );
}
