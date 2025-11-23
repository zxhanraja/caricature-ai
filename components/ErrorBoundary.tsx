import React, { type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRetry = () => {
    window.location.reload();
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 text-[var(--text-primary)] p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg mb-6 text-[var(--text-secondary)]">We've encountered an unexpected error. Please try again.</p>
          {this.state.error && (
            <pre className="bg-white p-4 rounded-md border border-[var(--border-color)] text-left text-sm w-full max-w-2xl overflow-auto mb-6">
              <code>{this.state.error.toString()}</code>
            </pre>
          )}
          <button
            onClick={this.handleRetry}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;