import { useContext, useState } from "react";
import List from "./components/List";
import { UserContext } from "../UserContext";
import { getExpenses } from "../controller/ExpenseController";

const Lists = () => {
  let { user } = useContext(UserContext);
  let [expenseList, setExpenseList] = useState();

  if (expenseList === undefined) {
    setExpenseList(getExpenses(user.id));
  }

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
