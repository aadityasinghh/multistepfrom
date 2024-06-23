// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalDetailsForm from "./PersonalDetailsForm"; // Replace with your component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetailsForm />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
