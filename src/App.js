import './App.css';
import Categories from "./components/Categories/Categories"

function App() {
  return (
    <div className="w-full h-screen flex flex-row bg-black">
      <Categories />
      <div className="flex-1 bg-black">
      </div>
    </div>
  );
}

export default App;
