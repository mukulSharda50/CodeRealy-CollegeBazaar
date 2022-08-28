import {Button, Typography, } from "@mui/material";
import CartComponent from "./CartComponent";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Cart = ({wishListData, HandleProdClick})=>{
    const navigate = useNavigate()
    return (
        <>
        <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} sx={{color: 'black', marginBottom: '-0.5rem', marginTop: '1rem'}}>Back</Button>
        <Wrapper>
            <Typography variant="h6" sx={{fontSize: '2rem', marginTop: '1rem'}}>Your Wish List!</Typography>
            {
                wishListData.map(item=>{
                    return (
                        <Wrapper key={item.id}>
                            <CartComponent 
                            img={item.imgUrl} 
                            title={item.title} 
                            condition={item.condition} 
                            author={item.author} 
                            HandleProdClick={(e)=>HandleProdClick(item.id)}
                        />
                        </Wrapper>
                    );
                })
            }
            <Button variant="contained" startIcon={<DeleteForeverIcon />}>Delete WishList</Button>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;
export default Cart;