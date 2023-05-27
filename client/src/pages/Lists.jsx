import { useContext, useState, useEffect } from "react";
import List from "./components/List";
import { UserContext } from "../UserContext";
import { getExpenses } from "../controller/ExpenseController";
import Actionmodal from "./components/Actionmodal";

const Lists = () => {
  const { user } = useContext(UserContext);
  const [expenseList, setExpenseList] = useState([]);

  const getExp = (s) => {
    console.log("Refresh");
    getExpenses(s)
      .then((res) => {
        setExpenseList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  };

  useEffect(() => {
    getExp(user.id);
  }, [user.id]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 h-screen">
        <div className="py-8 px-4 text-center lg:py-16">
          <Actionmodal callback={getExp} />

          <div className="mt-5 flex flex-wrap justify-center">
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
