import { useQuery } from "react-query";
import httpReq from "./http.service";
class ProductApi {
    GetAll = () => {
        const data = useQuery(['allproduct'], () => httpReq.get('allproduct'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }
    GetSingle = (slug) => {
        const data = useQuery(['productDetails', slug], () => httpReq.get(`product-details?slug=${slug}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }
    GetPopularProduct = () => useQuery(['popular_product'], () => httpReq.get(`popular_product`), {
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })
    GetFeatureProduct = () => useQuery(['feature_product'], () => httpReq.get(`feature_product`), {
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })

}

const Product = new ProductApi();

export default Product;

