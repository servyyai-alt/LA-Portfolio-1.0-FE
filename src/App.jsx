import { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToSection from "@/components/common/ScrollToSection";
import { routes } from "@/routes";

// Global loading fallback
function PageLoader() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-cobalt border-t-transparent animate-spin" />
        </div>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map(({ path, element: Page }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Page />
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white text-ink font-body">
                <ScrollToSection />
                <Header />
                <main>
                    <AnimatedRoutes />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </Router>
    );
}