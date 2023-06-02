import { useState } from "react";
import { deleteExpense } from "../../controller/ExpenseController";
import { deleteRevenue } from "../../controller/RevenueController";

const List = ({ id, userid, type, title, detail, value, d, callback }) => {
  const [showDetails, setShowDetails] = useState(false);

  const deleteList = async () => {
    if (type === "expense") {
      try {
        const res = await deleteExpense(userid, id);
        console.log(res);
      } catch (error) {
        console.error("Error deleting expense:", error);
      }
    } else {
      try {
        const res = await deleteRevenue(userid, id);
        console.log(res);
      } catch (error) {
        console.error("Error deleting revenue:", error);
      }
    }
    callback(userid);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const date = new Date(d);
  const stringDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  const text = `Title: ${title == "" ? "-" : title}
Detail: ${detail == "" ? "-" : detail}
Value: ${value}
Date: ${date}
  `;
  return (
    <div className="flex flex-col w-3/4 p-4 mb-4 rounded-lg shadow-lg bg-gray-800 text-white">
      <div className="flex items-center">
        {type == "revenue" ? (
          <div className="basis-1/12 bg-emerald-600 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
            Revenue
          </div>
        ) : (
          <div className="basis-1/12 bg-red-500 text-white font-bold rounded-full text-xs px-3 py-1 mr-2">
            Expense
          </div>
        )}

        <div className="basis-2/12 flex ml-4">
          <div className="font-bold text-lg">{stringDate}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Title: {title}</div>
        </div>
        <div className="basis-4/12 flex ml-4">
          <div className="font-bold text-lg">Value: {value}</div>
        </div>

        <button
          className="basis-1/12 bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded text-xs w-16"
          onClick={toggleDetails}
        >
          {showDetails ? "Hide" : "Show"}
        </button>
        <button
          className="flex text-sm items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded mx-2 py-1 px-1"
          onClick={deleteList}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      {showDetails && (
        <div className="mt-2 bg-gray-600 p-2 rounded float-left">
          <textarea
            readOnly
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-black rounded-lg border border-gray-900 resize-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            style={{ height: `${text.split("\n").length * 1.3}rem` }}
          >
            {text}
          </textarea>
        </div>
      )}
    </div>
  );
};

export default List;
