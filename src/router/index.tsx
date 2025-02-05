import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main";
import ErrorPage from "../pages/Error";

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);
