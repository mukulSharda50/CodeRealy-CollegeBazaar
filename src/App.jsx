import { useState, useEffect } from "react";
import {Routes, Route, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { HomePage, LogIn, Navbar, HandlingErrorPage, Cart, ProductInfo } from "./components";


const data = [
    {
        id: 1,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 1",
        condition: 'Good',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 2,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 2",
        condition: 'Bad',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 3,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 3",
        condition: 'Average',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 4,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name",
        condition: 'Poor',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 5,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200",
        title: "Product Name",
        condition: 'Average',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, 
]
const wishListData = [
    {
        id: 1,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 1",
        condition: 'Good',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 2,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 2",
        condition: 'Bad',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    }, {
        id: 3,
        imgUrl:"https://images.unsplash.com/photo-1657895323297-4a35bb1d9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Product Name 3",
        condition: 'Average',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati, aut asperiores odit, ducimus repellat accusamus vel sed nemo, quam rem quos. Quia maiores consequatur saepe tenetur eligendi ab iste?"
    },
]

const App = ()=>{
    const navigate = useNavigate();
    const [prodinfo, setProdInfo] = useState([]);
    const HandleProdClick = (ProdId) => {
        if (ProdId < data.length){
            const prodData = data.filter((item) => (item.id === ProdId))
            
            setProdInfo(prodData);
            
        }
        // setInfo(ProdId);
            navigate(`products/${ProdId}`)
     } 
    //  const setInfo = (id)=>{
    //     if (!localStorage.getItem(id)){
    //         localStorage.setItem(id, JSON.stringify(prodinfo));
    //     }
    //     else{
    //         setProdInfo(JSON.parse(localStorage.getItem(id)));
    //     }
    // } 
    // useEffect(()=>{
    //     // setInfo();
    //     console.log(prodinfo);
    // }, [prodinfo])
        return (
        <Wrapper>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage data={data} HandleProdClick={HandleProdClick}/>}></Route>
                <Route path='/cart' element={<Cart wishListData={wishListData} HandleProdClick={HandleProdClick}/>}></Route>
                <Route path='/products/:id' element={<ProductInfo prodData={prodinfo}/>}></Route>
                <Route path='*' element={<HandlingErrorPage />}></Route>
            </Routes>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // // justify-content: flex-start;
    // margin-bottom: 5rem;
    @media(min-width: 750px){
        margin: 2rem 10%;
    }
`;
export default App;