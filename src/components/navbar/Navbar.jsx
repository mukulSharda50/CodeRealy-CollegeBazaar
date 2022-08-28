import { Button, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';


const Navbar = ()=>{
    return (
        <>
        <Wrapper>
            <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <Button startIcon={<StorefrontIcon />} style={{color: 'black'}} disable>
                    <Typography variant="h6">
                        College Bazaar
                    </Typography>
                    
                </Button>
            </NavLink>

            <TextField placeholder="Search..."/>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <NavLink to="cart" style={{textDecoration: 'none', color: 'inherit', marginRight: 20}}>
                        <Btn variant="outlined" endIcon={<ShoppingCartIcon />} disableRipple={true}>
                            Wishlist
                        </Btn>
                </NavLink>
                <Button variant="contained"  disableRipple={true}>Sign Out</Button>
            </div>
        </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
    @media(min-width: 990px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }


`;
const Btn = styled(Button)({
    // backgroundColor: "lightgray",
    color: 'black',
}) 
export default Navbar;