
import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Step from './pages/Step';
import History from './pages/History';
import Form from './pages/Form';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewResume from './pages/ViewResume';
function App() {


  return (
    <>
    <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/step" element={<Step/>}/>

        <Route path="/history" element={<History/>}/>

        <Route path="/form" element={<Form/>}/>

        {/* :id in a path is called a route parameter, url parameter or path parameter. it is used to pass dynamic values through url */}
        <Route path="/view/resume/:id" element={<ViewResume/>}/>

        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
