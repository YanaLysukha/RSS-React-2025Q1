import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import MainPage from "./pages/Main";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary>
            <MainPage />
        </ErrorBoundary>
    </StrictMode>,
);
