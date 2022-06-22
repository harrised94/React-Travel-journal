import Card from './Card';
import Data from './Data'
import Header from './Header';

//For each item in our data
const dataMap = Data.map((item, i) => {
  i++
  console.log(i)
  //Return a card component that has access to the data (via props)
  return (
    <Card
      key={i++}       // Component only has access to what is passed in here. Can't console log i from the component.
      {...item}
    />
  )
})

function App() {
  return (
    <div className="app">
      <Header />
        {dataMap}
    </div>
  );
}

export default App;
