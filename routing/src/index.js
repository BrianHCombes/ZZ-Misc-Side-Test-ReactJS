import React from './react_nodes/react';
import ReactDOM from './react_nodes/react-dom/client';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";

import ContactPage1 from "./pages/ContactPages/ContactPage1";
import ContactPage2 from "./pages/ContactPages/ContactPage2";
import ContactPage3 from "./pages/ContactPages/ContactPage3";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />}>
                <Route path="blogPage1" element={<BlogPage1 />} />
                <Route path="blogPage2" element={<BlogPage2 />} />
                <Route path="blogPage3" element={<BlogPage3 />} />
            </Route>
            <Route path="/contact" element={<Contact />}>
                <Route path="contactPage1" element={<ContactPage1 />} />
                <Route path="contactPage2" element={<ContactPage2 />} />
                <Route path="contactPage3" element={<ContactPage3 />} />
            </Route>
            <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
