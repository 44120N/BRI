import Theme from "./components/Theme";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    return (
        <>
            <Theme>
                <Header />
                <Outlet />
                <ScrollToTop/>
                <Footer />
            </Theme>
        </>
    );
}
