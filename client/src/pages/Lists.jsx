import { getExpenses } from "../controller/ExpenseController";
import { getRevenues } from "../controller/RevenueController";
import { useContext, useState, useEffect } from "react";
import Actionmodal from "./components/Actionmodal";
import { UserContext } from "../UserContext";
import List from "./components/List";
import BottomNav from "./components/BottomNav";
import DatePicker from "./components/DatePicker";

const Lists = () => {
  let lists = [];
  const [list, setList] = useState([]);
  const { user } = useContext(UserContext);
  const [expensesList, setExpensesList] = useState([]);
  const [revenuesList, setRevenuesList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

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

    if (expenseLists !== undefined || expenseLists === null) {
      lists = expenseLists;
      setExpensesList(expenseLists);
    }
    if (revenueLists !== undefined || revenueLists === null) {
      if (expenseLists === undefined || expenseLists === null)
        lists = revenueLists;
      else lists = expenseLists.concat(revenueLists);
      setRevenuesList(revenueLists);
    }

    if (selectedDate) {
      const selectedDateObj = selectedDate.split("-")[2];
      const selectedMonthObj = selectedDate.split("-")[1];
      const selectedYearObj = selectedDate.split("-")[0];

      const filteredExpenses = expenseLists
        .filter((obj) => {
          if (selectedYearObj === "NaN" || selectedYearObj === "null") {
            return true;
          } else {
            const objYear = new Date(obj.date).getFullYear().toString();
            return objYear === selectedYearObj;
          }
        })
        .filter((obj) => {
          if (selectedMonthObj === "NaN" || selectedMonthObj === "null") {
            return true;
          } else {
            const objMonth = (new Date(obj.date).getMonth() + 1).toString();
            return objMonth === selectedMonthObj;
          }
        })
        .filter((obj) => {
          if (selectedDateObj === "NaN" || selectedDateObj === "null") {
            return true;
          } else {
            const objDate = new Date(obj.date).getDate().toString();
            return objDate === selectedDateObj;
          }
        });

      setExpensesList(filteredExpenses);

      const filteredRevenues = revenueLists
        .filter((obj) => {
          if (selectedYearObj === "NaN" || selectedYearObj === "null") {
            return true;
          } else {
            const objYear = new Date(obj.date).getFullYear().toString();
            return objYear === selectedYearObj;
          }
        })
        .filter((obj) => {
          if (selectedMonthObj === "NaN" || selectedMonthObj === "null") {
            return true;
          } else {
            const objMonth = (new Date(obj.date).getMonth() + 1).toString();
            return objMonth === selectedMonthObj;
          }
        })
        .filter((obj) => {
          if (selectedDateObj === "NaN" || selectedDateObj === "null") {
            return true;
          } else {
            const objDate = new Date(obj.date).getDate().toString();
            return objDate === selectedDateObj;
          }
        });
      setRevenuesList(filteredRevenues);

      lists = filteredExpenses.concat(filteredRevenues);
    }

    lists.sort(compare);
    setList(lists);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
  }, [user.id, selectedDate]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 mt-16 min-h-screen max-h-full">
        <div className="py-8 px-4 text-center lg:py-16">
          <DatePicker
            selected={selectedDate}
            onDateChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />
          <Actionmodal callback={getLists} />

          <div className="mt-5 flex flex-wrap justify-center">
            {list.map((obj) => (
              <List
                key={obj.id}
                id={obj.id}
                userid={user.id}
                type={obj.type}
                title={obj.title}
                detail={obj.detail}
                value={obj.value}
                d={obj.date}
                callback={getLists}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav revenuesList={revenuesList} expensesList={expensesList} />
    </>
  );
};

export default Lists;
