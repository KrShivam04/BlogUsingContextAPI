import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'

// Creating the context 
export const AppContext = createContext();

// Creating a context provider
export default function AppContextProvider ({children}) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling using API
    async function fetchBlogsPost(page=1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        console.log("In app context")
        console.log(url)
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPost(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch(error) {
            alert("Error Occured while fetching data.....");
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page)
        fetchBlogsPost(page);
    }

    // value indicates the object which is having all the required data
    const value = {
        post, 
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages, 
        fetchBlogsPost,
        handlePageChange
    }; 
    // The object value is context which is having state, functions in it....

    // returning the appcontextprovider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}