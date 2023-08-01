import { useTheme } from "@emotion/react";
import SearchBar from "./components/SearchBar";
function App() {
  console.log(useTheme());
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
