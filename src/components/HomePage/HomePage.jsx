import { Typography, Grid} from "@mui/material";
import styled from "@emotion/styled";
import ProductCard from './ProductCard';


const HomePage = ({data, HandleProdClick})=>{
    return (
        <Wrapper>
            <Typography variant="h5">Listed Items</Typography>
            <Grid container spacing={3}>
                {
                    data.map(item => {
                        return (
                            <Grid item key={item.id} >
                                <ProductCard id={item.id} url={item.imgUrl} title={item.title} desc={item.description} HandleProdClick={(e) => HandleProdClick(item.id)}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // justify-content: flex-start;
    margin-top: 4rem;   
    // border: 2px solid red;
    // width: 50%;
    @media(max-width: 593px){
        margin-inline:    15% 10%;
    }
    
`;
export default HomePage;