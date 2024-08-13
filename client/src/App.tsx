import './App.css'
import DuckItem from './DuckItem';

function App() {

  return (
   <div>
      <h1>EventApp</h1>
      { ducks.map(duck => (
        <DuckItem key={duck.name} duck={duck}/>
      )) }
   </div>
  )
}

const ducks: Duck[] = [
  {name: "duck1", makeSound: (sound: string) => alert(sound)},
  {name: "duck2", makeSound: (sound: string) => alert(sound)},
]

export class Duck {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(sound: string) {
    alert(sound);
  }
}

export default App
