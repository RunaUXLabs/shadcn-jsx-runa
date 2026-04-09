import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </>
  );
}

export default App;
