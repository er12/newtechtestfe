import "./App.css";
import React, { useEffect, useState } from "react";
import CreateForm from "./Components/CreateForm";
import UserTable from "./Components/UserTable";
import Navbar from "./Components/Navbar";

const errorData = [{ id: 0, name: "Error" }];

const url = "https://localhost:44363/api/users"; //api url

function App() {
  const [users, setUsers] = useState([{ id: 0, name: "No List" }]);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        // Get response from localhost and convert to json
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error in getting data from BE");
        setUsers(errorData);
      });
  }, [users]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CreateForm />
        <UserTable children={users} />
      </header>
    </div>
  );
}

export default App;
