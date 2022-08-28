import ProductPage from "./ProductPage";


const ProductInfo = ({prodData})=>{
    // console.log(prodData)
    return (
        <>
            {
                prodData.map(item => {
                    return (
                        <ProductPage key = "item.id" id ={item.id} title={item.title} desc={item.description} img={item.imgUrl} condition={item.condition}/>
                    );
                })
            }
        </>
    )
}
export default ProductInfo;