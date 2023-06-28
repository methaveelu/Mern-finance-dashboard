//using Redux JS toolkit query and we're using Create API so this will allow us to make endpoints
 //that we can use to call our backend so we can grab data from our backend using this particular setup 

 //to do this we have some boilerplate code that we need to set up and the way we do this is by setting base query we're going to be
 // using fetch base query as a function from Redux we'll get query
 //and and our base URL we're passing in the environment variable we added earlier so over here we added HTTP
 //localhost 1337 so that's the URL that we're going to call every time we make an API call 

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes:["Kpis"], //name of each API data

    endpoints:(build)=>({
        getKpis:build.query<void,void>({
            query:()=>"kpi/kpis/",//endpoint url for kpis
            providesTags:["Kpis"],
        })

    })

})

export const {useGetKpisQuery} = api;// this kpi endpoint is made available in api constant