const BottomNav = ({ expensesList, revenuesList }) => {
  const totalExpenses = expensesList.reduce(
    (total, expense) => total + expense.value,
    0
  );

  const totalRevenues = revenuesList.reduce(
    (total, revenue) => total + revenue.value,
    0
  );

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 grid w-full h-16 px-8 bg-gray-800 border-gray-700">
        <div className="flex items-center justify-center align-middle text-white ">
          <div className="w-1/3 flex ml-4 justify-center">
            <div className="font-bold text-lg ">
              Total Revenses: {totalRevenues}
            </div>
          </div>
          <div className="w-1/3 flex ml-4 justify-center">
            <div className="font-bold text-lg">
              Total Expenses: {totalExpenses}
            </div>
          </div>
          <div className="w-1/3 flex ml-4 justify-center">
            <div className="font-bold text-lg">
              Saving: {totalRevenues - totalExpenses}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
