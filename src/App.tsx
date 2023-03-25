import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { Books, About, Rules, Page404 } from "./pages/";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="books" replace />} />          
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
