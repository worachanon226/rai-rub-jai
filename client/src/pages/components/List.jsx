import { useState } from "react";

const List = ({ type, title, detail, value, d }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const date = new Date(d);
  const stringDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  const text = `Title: ${title},Detail: ${detail},Value: ${value}, Date: ${stringDate}`;

  return type == "revenue" ? (
    <div className="flex flex-col w-3/4 p-4 mb-4 rounded-lg shadow-lg bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="basis-1/12 bg-emerald-600 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
          Revenue
        </div>
        <div className="basis-1/12 flex ml-4">
          <div className="font-bold text-lg">{stringDate}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Title: {title}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Value: {value}</div>
        </div>

        <button
          className="basis-2/12 bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded text-xs w-16"
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
    <div className="flex flex-col w-3/4 p-4 mb-4 rounded-lg shadow-lg bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="basis-1/12 bg-red-600 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
          Expense
        </div>
        <div className="basis-1/12 flex ml-4">
          <div className="font-bold text-lg">{stringDate}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Title: {title}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Value: {value}</div>
        </div>

        <button
          className="basis-2/12 bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded text-xs w-16"
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
