import {createContext, useEffect, useState} from "react";

const AppContext = createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState({show:"false",msg:""});
    const [query,setQuery]=useState("titanic")


const getMovies = async (url)=>{
    setIsLoading(true);
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        if(data.Response === "True"){
            setIsLoading(false);
            setError({show:false,msg:""})
            setMovie(data.Search)                           
        }
        else{
            setError({show:true, msg:data.Error})
        }

    }catch(err){
        console.log(err)
    }}
    
    useEffect(()=>{
        const TimerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },800);
        return ()=>clearTimeout(TimerOut)
        
    },[query])
return <AppContext.Provider value={{isLoading,movie, error,setQuery,query}}>
    {children}
</AppContext.Provider>
}


export {AppContext, AppProvider};