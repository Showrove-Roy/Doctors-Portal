import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route/Route";

function App() {
  return (
    <div data-theme='dark' className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
