export default function Filter() {
  return (
    <div className="p-6 flex justify-center mt-2">
      <div
        className="flex items-center rounded-lg px-4 py-1 shadow-sm border border-[#818181]
        focus-within:ring-2 focus-within:ring-blue-400 transition w-[97%]"
      >
        
        {/* Icon Search */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm text-black placeholder-gray-400 bg-transparent"
        />
      </div>
    </div>
  );
}