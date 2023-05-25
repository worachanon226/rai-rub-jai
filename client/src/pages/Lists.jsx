import List from "./components/List";

const Lists = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 h-screen">
        <div className="py-8 px-4 text-center lg:py-16">
          <div className="flex flex-wrap justify-center">
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
