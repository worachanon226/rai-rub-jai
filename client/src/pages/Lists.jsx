import { useContext, useState, useEffect } from "react";
import List from "./components/List";
import { UserContext } from "../UserContext";
import { getExpenses } from "../controller/ExpenseController";
import { getRevenues } from "../controller/RevenueController";
import Actionmodal from "./components/Actionmodal";

const Lists = () => {
  let lists = [];
  const { user } = useContext(UserContext);
  const [expenseList, setExpenseList] = useState([]);
  const [revenueList, setRevenueList] = useState([]);
  const [list, setList] = useState([]);

  const getLists = (s) => {
    lists = [];
    getExpenses(s)
      .then((res) => {
        setExpenseList(res.data);
        lists = res.data;
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });

    getRevenues(s)
      .then((res) => {
        setRevenueList(res.data);
        lists = lists.concat(res.data);
        setList(lists);
      })
      .catch((error) => {
        console.error("Error fetching revense:", error);
      });
  };

  useEffect(() => {
    getLists(user.id);
  }, [user.id]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 h-screen">
        <div className="py-8 px-4 text-center lg:py-16">
          <Actionmodal callback={getLists} />

          <div className="mt-5 flex flex-wrap justify-center">
            {list.map((obj) => (
              <List
                key={obj.id}
                type={obj.type}
                title={obj.title}
                detail={obj.detail}
                value={obj.value}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
