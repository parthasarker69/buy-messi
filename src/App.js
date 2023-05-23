import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',

          loader: async () => fetch('https://jsonplaceholder.typicode.com/comments'),
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: async () => fetch('https://jsonplaceholder.typicode.com/comments'),
          element: <Home></Home>
        },
        {
          path: 'reviews',
          loader: async () => fetch('https://jsonplaceholder.typicode.com/comments'),
          element: <Reviews></Reviews>
        },
        {
          path: 'dashboard',
          loader: async () => fetch('data.json'),
          element: <Dashboard></Dashboard>
        }, {
          path: 'blogs',
          element: <Blogs></Blogs>
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
