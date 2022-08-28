import { Typography, Button } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import styled from '@emotion/styled';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductPage = ({id, title, desc, img, condition})=> {
    const navigate = useNavigate()
    return (
        <>
        <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} sx={{color: 'black', marginTop: '2rem', marginBottom: '-1.5rem'}}>Back</Button>
        <Wrapper>
            <Image src={img} alt="Product" />
            <div>
                <Typography variant="h6" style={{fontSize: '2rem'}}>{title}</Typography>
                <Typography variant="body1" style={{marginTop: '2rem', color: 'gray', textAlign: 'justify'}}>{desc}</Typography>

                <Typography variant="body2" style={{marginTop: '1rem', fontSize: '1rem'}}>Condition: {condition}</Typography>
                <Button sx={{mt: '2rem'}} variant="contained" endIcon={<ShoppingCartCheckoutIcon />} >Add to wishlist</Button>
                {/* <Typography color="GrayText" variant="body2">{datePosted}</Typography> */}
            </div>

        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 40px;
    @media(min-width: 700px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        margin-top: 4rem;
    }
`;

const Image = styled.img`
    width: 300px;
    height: 500px;

    object-fit: fill;
`;
export default ProductPage;