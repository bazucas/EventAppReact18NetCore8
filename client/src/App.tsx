import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

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
      <Header as ='h2' icon='users' content='EventApp'/>
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
