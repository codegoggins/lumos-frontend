import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  let status = 500;
  let title = "Something went wrong";
  let message =
    "Well, this is awkward. Our code tripped over its own shoelaces.";

  if (isRouteErrorResponse(error)) {
    status = error.status;

    if (status === 404) {
      title = "Page not found";
      message =
        "Looks like this page went on vacation and forgot to tell anyone.";
    } else if (status === 403) {
      title = "Access denied";
      message =
        "This door is locked and you don't have the key. Nice try though.";
    } else if (status === 401) {
      title = "Unauthorized";
      message = "You shall not pass! ...without logging in first.";
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-bg-secondary">
      <div className="text-center px-6 max-w-md">
        <p className="text-8xl font-bold text-primary mb-4">{status}</p>
        <h1 className="text-2xl font-bold text-black-primary mb-2">{title}</h1>
        <p className="text-text-secondary text-sm mb-8">{message}</p>
        <Link
          to="/auth/login"
          className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
