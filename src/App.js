import Course from "./components/Course";
function App() {
  return (
    <div className="container">
      <div className="row card-deck mb-3 text-center">
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
    </div>
  );
}

export default App;
