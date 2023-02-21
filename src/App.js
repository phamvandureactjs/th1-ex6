
import { createBrowserRouter, RouterProvider,Link, Outlet, Navigate } from 'react-router-dom';
import Layout from './Layout';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <div>
          <h1>Hello world</h1>
          <Link to = "about">About us</Link>
        </div>
    }, 
    {
      path: "about",
      element: <div>About</div>,

    },
     {
      path: '/about',
      children: [
      {
        path: '/about',
        element: <div>
          <Link to = "/about/us">Us || </Link>
          <Link to = "/about/me"> || Me</Link>
        </div>,
      }, 
      {
        path: '/about/us',
        element: <div>
          Us
        </div>
      },  {
        path: '/about/me',
        element: <div>
          Me
        </div>
      }]
    }

  ]);
  return (
    <RouterProvider router = {router}>
      
    </RouterProvider>
  );
}

export default App;
