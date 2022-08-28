import {CardMedia, Card, CardItem, CardHeader, Avatar, CardContent, Typography} from "@mui/material";
import styled from '@emotion/styled';
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({id, url, title, desc, HandleProdClick})=>{
    return (
        <Wrapper onClick={HandleProdClick}>
            <CardHeader avatar={<Avatar aria-label="user profile">M</Avatar>}  title={title} subheader="24sept,2022"/>
            <ImgWrapper component="img" image={url}  alt="product name"/>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {desc}
                </Typography>
            </CardContent>
        </Wrapper>
    );
}
const Wrapper = styled(Card)({
    minHeight: '200px',
    width: '275px',
    cursor: 'pointer',
});

const ImgWrapper = styled(CardMedia)({
    width: '100%',
    height: '10rem'
});
export default ProductCard;