
import { useCallback, useEffect, useState } from "react";


import httpReq from "../services/http.service";



const useData = () => {


    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [slider, setSlider] = useState([])
    const [product, setProduct] = useState([])
    const [banner, setBanner] = useState([])
    const [singleBanner, setSingleBanner] = useState([])
    const [offer, setOffer] = useState({})
    const [campaign, setCampaign] = useState([])
    const [popularProduct, setPopularProduct] = useState([])
    const [featureProduct, setFeatureProduct] = useState([])


    const fetchHeader = useCallback(
        async () => {
            // get the data from the api
            const { category, subcategory, subsubcategory, slider, product, banner, singleBanner, offer, campaign, } = await httpReq.get('allfrontendcontent');
            const popular = await httpReq.get('popular_product');
            const feature = await httpReq.get('feature_product');





            // set state with the result

            setCategory(category)
            setSubcategory(subcategory)
            setSlider(slider)
            setProduct(product)
            setBanner(banner)
            setSingleBanner(singleBanner)
            setOffer(offer)
            setCampaign(campaign)

            // set state with the result
            setPopularProduct(popular)
            setFeatureProduct(feature)
        }, [])

    useEffect(() => {
        // declare the async data fetching function

        // call the function
        fetchHeader()
            // make sure to catch any error
            .catch(console.error);;
    }, [fetchHeader])


    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }



    return {
        makeid,
        category,
        subcategory,
        slider,
        product,
        banner,
        singleBanner,
        offer,
        campaign,
        popularProduct,
        featureProduct

    }

}
export default useData