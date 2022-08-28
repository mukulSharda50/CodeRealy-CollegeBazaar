import {Typography,Button } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from '@mui/icons-material/Delete';

const CartComponent = ({img,title, condition, author,HandleProdClick })=>{
    return (
        <Wrapper>
            <img src={img} alt="Product" width="200px" height="200px" style={{marginTop: '5px', marginBottom: '5px'}} onClick={HandleProdClick}/>
            <SubWrapper >
               <div>
                <Typography variant="h6" onClick={HandleProdClick}>{title}</Typography>
                    <Typography variant="body1">Condition:{condition}</Typography>
                    
                    <Typography variant="body2">Posted by:{author}</Typography>
               </div>
                <Button variant="outlined" endIcon={<DeleteIcon/>} onClick={()=>console.log("clicked")}>Delete</Button>
            </SubWrapper>
        </Wrapper>


    );
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border: 1px solid gray;
    cursor: pointer;
    @media(max-width:492px){
        gap: 0.5rem;
        flex-direction: column;
        // padding: 0.5rem 07rem 0.5rem 0.7rem;
    }
`;

const SubWrapper = styled.div`
    padding:'';
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    width: 90%;
    @media(min-width: 492px){
        flex-direction: column;
        gap: 5rem;
    }

`;

export default CartComponent;