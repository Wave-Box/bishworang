import { useQuery } from "react-query";
import httpReq from "./http.service";
class HomeApi {
    // get Homepage info
    GetInfo = () => {

        const data = useQuery(['allfrontendcontent'], () => httpReq.get('allfrontendcontent'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

    // get blog
    GetBlog = () => {

        const data = useQuery(['blog'], () => httpReq.get('blog'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

    // get blog
    GetSeason = () => useQuery(['season'], () => httpReq.get('season'), {
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })

    // get home decore
    GetDecore = () => useQuery(['home_decore'], () => httpReq.get('home_decore'), {
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })



}

const HomePage = new HomeApi();

export default HomePage;

