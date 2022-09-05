import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 256.32,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance2",
      amount: 222.22,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance3",
      amount: 333.33,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <button>Click me</button>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
