import { Link } from "react-router-dom";

const messages = [
  "Looks like this page went on vacation and forgot to tell anyone.",
  "This page is playing hide and seek. Spoiler: it's winning.",
  "404 reasons why this page doesn't exist. Actually, just one — it never did.",
  "You've reached the edge of the internet. Turn back now.",
  "This page moved out. No forwarding address. Very rude.",
];

const NotFound = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center px-6 max-w-lg">
        <div className="mb-6">
          <span className="text-[120px] leading-none font-bold text-primary">
            4
          </span>
          <span className="inline-block text-[120px] leading-none font-bold text-primary-light border-4 border-primary rounded-full w-28 h-28 mx-1 relative -top-2" />
          <span className="text-[120px] leading-none font-bold text-primary">
            4
          </span>
        </div>

        <h1 className="text-2xl font-bold text-black-primary mb-3">
          Page not found
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed mb-10">
          {message}
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/auth/login"
            className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
          >
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2.5 border border-border text-text-secondary text-sm font-medium rounded-lg cursor-pointer bg-white"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
