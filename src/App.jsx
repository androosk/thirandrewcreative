import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  useRouteError,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<AboutMe />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blogpost" element={<BlogPost />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/recipe" element={<RecipePage />} />
        <Route path="/retreats" element={<Retreats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emailsignup" element={<GuideSignup />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  };

const Root = () => {
  return (
    <main className='bg-slate-900 h-screen'>
      <NavBar />
      <Outlet />
      {/* <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer /> */}
    </main>
  );
};

export default App;