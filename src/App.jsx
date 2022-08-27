import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, LogIn, Navbar, HandlingErrorPage, Cart, ProductInfo } from "./components";

const App = ()=>{
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/:id' element={<ProductInfo />}></Route>
                    <Route path='*' element={<HandlingErrorPage />}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default App;