import { useState } from "react";

const List = () => {
  const type = true;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const text = "Title: title,\nDetail: detail,\nValue: value\n";

  return type ? (
    <div className="flex flex-col w-3/4 justify-between p-4 mb-4 rounded-lg shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div className="bg-emerald-600 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
          Revenue
        </div>
        <div className="flex ml-4">
          <div className="font-bold text-lg">Title: Halo</div>
        </div>
        <div className="flex ml-4">
          <div className="font-bold text-lg">Value: 200</div>
        </div>

        <button
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded text-xs w-16"
          onClick={toggleDetails}
        >
          {showDetails ? "Hide" : "Show"}
        </button>
      </div>
      {showDetails && (
        <div className="mt-2 bg-gray-600 p-4 rounded">{text}</div>
      )}
    </div>
  ) : (
    <div className="flex flex-col w-3/4 justify-between p-4 mb-4 rounded-lg shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div className="bg-red-600 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
          Expense
        </div>
        <div className="flex ml-4">
          <div className="font-bold text-lg">Title: Halo</div>
        </div>
        <div className="flex ml-4">
          <div className="font-bold text-lg">Value: 200</div>
        </div>

        <button
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded text-xs w-16"
          onClick={toggleDetails}
        >
          {showDetails ? "Hide" : "Show"}
        </button>
      </div>
      {showDetails && (
        <div className="mt-2 bg-gray-600 p-4 rounded float-left">{text}</div>
      )}
    </div>
  );
};

export default List;
