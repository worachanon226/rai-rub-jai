const List = () => {
  const type = false;
  return type ? (
    <>
      <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Danger alert!</span> Change a few things
          up and try submitting again.
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
        <div className="text-white bg-red-800 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600">
          Expense
        </div>
        <div>
          <span className="font-medium">Danger alert!</span> Change a few things
          up and try submitting again.
        </div>
      </div>
    </>
  );
};

export default List;
