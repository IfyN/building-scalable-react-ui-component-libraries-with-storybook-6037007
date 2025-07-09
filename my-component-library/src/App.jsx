import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert type="info" message="You have 3 new messages" />
      <Alert type="success" message="Transaction Successful" />
      <Alert type="warning" message="Past Credit Limit!" />
      <Alert type="error" message="Transaction Failed" />
    </>
  );
}

export default App;
