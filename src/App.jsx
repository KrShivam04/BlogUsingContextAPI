import './App.css';
import Header from './component/Header'
import Blogs from './component/Blogs'
import Pagination from './component/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext'


function App() {

  const {fetchBlogsPost} = useContext(AppContext);

  useEffect( () => {
    fetchBlogsPost();
  }, [])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )

}

export default App


// understanding:- contextAPI in react to send data to parent to children or to children to parent without props
// Rules for context API(context means data): 
// 1. Creating a context 2. Creating a context provider 3. Using the context in the component
