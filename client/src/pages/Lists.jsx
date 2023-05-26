import { useContext, useState, useEffect } from "react";
import List from "./components/List";
import { UserContext } from "../UserContext";
import { getExpenses } from "../controller/ExpenseController";

const Lists = () => {
  const { user } = useContext(UserContext);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    getExpenses(user.id)
      .then((res) => {
        setExpenseList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  }, [user.id]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 h-screen">
        <div className="py-8 px-4 text-center lg:py-16">
          <div className="flex flex-wrap justify-center">
            {expenseList.map((expense) => (
              <List
                key={expense.id}
                type="expense"
                title={expense.title}
                detail={expense.detail}
                value={expense.value}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
