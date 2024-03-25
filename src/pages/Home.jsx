import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
     const result = await fetch(API_URL);
     const data = await result.json();
     console.log(data);                    //data is an array check in console
     setPosts(data);
    }
    catch(error){
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData()
  },[]);

  return (
    <div>
     {
      loading ? (<div className="flex h-[100vh] justify-center items-center"><Spinner/></div>) : 
      (
        posts.length > 0 ?
        (
         <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post) => (
              <Product key={post.id} post={post}/>
             ))
          }
         </div>
        ) :
        (
         <div className="flex justify-center items-center">
          <p>No data found</p>
         </div>
        )
      )
     }
    </div>
  );
};

export default Home;
