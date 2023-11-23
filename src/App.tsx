import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">User Management</h1>
        <UserList />
        <UserForm />
      </div>
    </UserProvider>
  );
};

export default App;
