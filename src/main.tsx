import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import { AppRouter } from "./router";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary>
            <AppRouter />
        </ErrorBoundary>
    </StrictMode>,
);
