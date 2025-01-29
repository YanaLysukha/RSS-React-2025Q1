import { Component, ReactNode } from 'react';
import './style.scss';

type TErrorBoundaryProps = {
    children?: ReactNode;
};

type TErrorBoundaryState = {
    error: boolean;
};

export default class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
    constructor(props: TErrorBoundaryProps) {
        super(props);
        this.state = { error: false };
    }

    static getDerivedStateFromError(): TErrorBoundaryState {
        return { error: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.error) {
            return <h1 className="title">Something went wrong...</h1>;
        }
        return this.props.children;
    }
}
