const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 grid w-full h-16 px-8 bg-gray-800 border-gray-700">
        <div className="flex items-center justify-center text-white ">
          <div className="basis-1/3 flex ml-4">
            <div className="font-bold text-lg">Total Expenses: </div>
          </div>
          <div className="basis-1/3 flex ml-4">
            <div className="font-bold text-lg">Total Revenses: </div>
          </div>
          <div className="basis-1/3 flex ml-4">
            <div className="font-bold text-lg">Saving: </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
