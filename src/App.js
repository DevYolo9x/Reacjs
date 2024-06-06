import Course from "./components/Course";
import Hello from "./components/Hello";
function App() {

  const items = [
    {
      name: 'Free',
      type: true,
      price: 0,
      lists: [
        'Home Page',
        'Contact Page',
      ]
    }
    ,{
      name: 'Advanced',
      type: true,
      price: 150,
      lists: [
        'Product Page',
        'Article Page',
      ]
    },
    {
      name: 'Business',
      type: false,
      price: 250,
      lists: [
        'Admin Page',
        'Dashboard Page',
        'Chart Page',
      ]
    }
  ]

  const elCourse = items.map( (item, index) => 
    <Course key={index} name={item.name} type={item.type} price={item.price} list={item.lists}></Course>
  )

  return (
    <div className="container">
      <Hello />
      <div className="row card-deck mb-3 text-center">
        {elCourse}
      </div>
    </div>
  );
}

export default App;
