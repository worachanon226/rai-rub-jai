import { useContext, useState, useEffect } from "react";

const Actionmodal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const types = ["Expense", "Revenue"];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (type) => {
    setSelectedOption(type);
    setIsOpen(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");

  const handleToggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={handleToggleModal}
        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        Create an Action
      </button>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="relative bg-white rounded-lg">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Action
                  </h3>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Income or Outcome?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 w-full">
                  <form>
                    <div className="flex mb-4">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <input
                        type="text"
                        value={selectedOption}
                        onChange={() => {}}
                        placeholder="Select a Type"
                        onClick={handleToggleDropdown}
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {isOpen && (
                        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
                          {types.map((type) => (
                            <div
                              key={type}
                              onClick={() => handleSelectOption(type)}
                              className="py-2 px-4 cursor-pointer hover:bg-indigo-100"
                            >
                              {type}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex mb-4">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <div className="mt-1 ml-1 w-full">
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter the title"
                        />
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <label
                        htmlFor="detail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Detail
                      </label>
                      <div className="mt-1 ml-1 w-full">
                        <textarea
                          id="detail"
                          name="detail"
                          value={detail}
                          onChange={(e) => setDetail(e.target.value)}
                          rows={4}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter the detail"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <label
                        htmlFor="value"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Value
                      </label>
                      <div className="mt-1 ml-1 w-full">
                        <input
                          type="number"
                          id="value"
                          name="value"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter a value"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <button
                onClick={handleToggleModal}
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Actionmodal;
