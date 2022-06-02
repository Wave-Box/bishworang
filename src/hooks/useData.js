
import { useCallback, useEffect, useState } from "react";


import httpReq from "../services/http.service";



const useData = () => {

   
    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [slider, setSlider] = useState([])
    const [product, setProduct] = useState([])
    const [banner, setBanner] = useState([])
    const [offer, setOffer] = useState({})
    const [campaign, setCampaign] = useState([])


    const fetchHeader = useCallback(
        async () => {
            // get the data from the api
            const { category,subcategory,slider, product, banner, offer, campaign, } = await httpReq.get('allfrontendcontent');





            // set state with the result
        
            setCategory(category)
            setSubcategory(subcategory)
            setSlider(slider)
            setProduct(product)
            setBanner(banner)
            setOffer(offer)
            setCampaign(campaign)
        },
        [])

    useEffect(() => {
        // declare the async data fetching function



        console.log('i fire once');
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
        offer,
        campaign

    }

}
export default useData