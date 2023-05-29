import { useContext, useState, useEffect } from "react";
import List from "./components/List";
import { UserContext } from "../UserContext";
import { getExpenses } from "../controller/ExpenseController";
import { getRevenues } from "../controller/RevenueController";
import Actionmodal from "./components/Actionmodal";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const Lists = () => {
  let lists = [];
  const { user } = useContext(UserContext);
  const [list, setList] = useState([]);

  const getLists = async (s) => {
    lists = [];
    let expenseLists = [];
    let revenueLists = [];

    try {
      const expenseResponse = await getExpenses(s);
      expenseLists = expenseResponse.data;
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }

    try {
      const revenueResponse = await getRevenues(s);
      revenueLists = revenueResponse.data;
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }

    lists = expenseLists.concat(revenueLists);
    lists.sort(compare);
    setList(lists);
  };

  function compare(a, b) {
    if (a.date < b.date) {
      return -1;
    } else if (a.date > b.date) {
      return 1;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    getLists(user.id);
  }, [user.id]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 h-full">
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
                d={obj.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
