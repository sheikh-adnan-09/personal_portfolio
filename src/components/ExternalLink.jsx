"use client";
const ExternalLink = ({ details }) => {
  return (
    <div className="mt-6 text-sm font-semibold text-slate-950">
      {details?.startsWith("http") ? (
        <button
          onClick={() => window.open(details, "_blank", "noopener,noreferrer")}
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Visit Project →
        </button>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
};

export default ExternalLink;
