import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main";
import ErrorPage from "../pages/Error";
import Details from "../components/Details";

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="item/:itemId" element={<Details />}></Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);
