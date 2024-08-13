import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5069/api/activities")
    .then(response => {
      setActivities(response.data)
    })
  }, []); // [] = will execute once and once only, when dependencies change, it will call the url again

  return (
    <div>
      <h1>EventApp</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
