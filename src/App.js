import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'reviews',
          element: <Home></Home>
        },
        {
          path: 'dashboard',
          element: <Home></Home>
        },
        {
          path: 'blogs',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <Home></Home>
        }
      ]
    },
    {
      path: '*',
      element: <h1 className='text-blue-700 text-5xl 	'>Page Not Found Bro   404</h1>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
