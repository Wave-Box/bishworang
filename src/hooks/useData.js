
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { token } from "../services/AxiosInstance";
// import { toast } from 'react-toastify'


import httpReq from "../services/http.service";

export const v = JSON.parse(localStorage.getItem("persist:root"))?.auth ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)?.user : null


const useData = () => {
    const [userData, setUser] = useState(null)
    const [favourite, setFavourite] = useState([])
    const [page, setPage] = useState("")

    const [currency, setCurrency] = useState('BDT')
    const [currencyInfo, setcurrencyInfo] = useState({})


    const fetchHeader = useCallback(
        async () => {

            const { data } = await axios.get('https://v6.exchangerate-api.com/v6/db25471ea0108ac45b9cfdc4/latest/USD')
            setcurrencyInfo(data)

            if (token && v?.verify) {
                const user = await httpReq.get('getuser');
                const { favourite } = await httpReq.get('favourite/get');
                setUser(user)
                setFavourite(favourite)
            }

          

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
        currency,
        setCurrency,
        currencyInfo,
        page,
        setPage,

    }

}
export default useData