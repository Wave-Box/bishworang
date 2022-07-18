
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { token } from "../services/AxiosInstance";
// import { toast } from 'react-toastify'


import httpReq from "../services/http.service";

export const v = JSON.parse(localStorage.getItem("persist:root"))?.auth ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)?.user : null


const useData = () => {
    const [userData, setUser] = useState(null)
    const [favourite, setFavourite] = useState([])

    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [subsubcategory, setSubSubCategory] = useState([])
    const [slider, setSlider] = useState([])
    const [product, setProduct] = useState([])
    const [banner, setBanner] = useState([])
    const [singleBanner, setSingleBanner] = useState([])
    const [offer, setOffer] = useState({})
    const [season, setSeason] = useState([])
    const [decore, setDecore] = useState([])
    const [campaign, setCampaign] = useState([])
    const [popularProduct, setPopularProduct] = useState([])
    const [featureProduct, setFeatureProduct] = useState([])
    const [blogs, setBlogs] = useState([])
    const [settings, setSettings] = useState({})
    const [topdeals, setTopdeals] = useState([])

    const [currency, setCurrency] = useState('BDT')
    const [currencyInfo, setcurrencyInfo] = useState({})


    const fetchHeader = useCallback(
        async () => {
            // get the data from the api
            const { category, subcategory, subsubcategory, slider, product, banner, singleBanner, offer, campaign, topdeals, settings } = await httpReq.get('allfrontendcontent');
            const popular = await httpReq.get('popular_product');
            const feature = await httpReq.get('feature_product');
            const season = await httpReq.get('season');
            const decore = await httpReq.get('home_decore');
            const blog = await httpReq.get('blog');

            const { data } = await axios.get('https://v6.exchangerate-api.com/v6/db25471ea0108ac45b9cfdc4/latest/USD')
            setcurrencyInfo(data)

            if (token && v?.verify) {
                const user = await httpReq.get('getuser');
                const { favourite } = await httpReq.get('favourite/get');
                setUser(user)
                setFavourite(favourite)
            }

            // set state with the result

            setCategory(category)
            setSubcategory(subcategory)
            setSubSubCategory(subsubcategory)
            setSlider(slider)
            setProduct(product)
            setBanner(banner)
            setSingleBanner(singleBanner)
            setOffer(offer)
            setCampaign(campaign)
            setSeason(season)
            setDecore(decore)
            setBlogs(blog)
            setSettings(settings)
            setTopdeals(topdeals)

            // set state with the result
            setPopularProduct(popular)
            setFeatureProduct(feature)
        }, [])

    useEffect(() => {
        // declare the async data fetching function

        // call the function
        fetchHeader()

        // Visiter Counter 
        axios.get("https://geolocation-db.com/json/").then(({ data }) => {
            if (data?.IPv4) {
                httpReq.post('visitor', { ip: data?.IPv4 })
                    .then(({ success }) => {
                        // toast(success, { type: 'success' })
                    })
            }
        })


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
        userData,
        favourite,
        category,
        subcategory,
        subsubcategory,
        slider,
        product,
        banner,
        singleBanner,
        offer,
        campaign,
        season,
        decore,
        popularProduct,
        featureProduct,
        blogs,
        topdeals,
        settings,
        currency,
        setCurrency,
        currencyInfo

    }

}
export default useData