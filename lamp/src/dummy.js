import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
function App() {
           let [users,set_user_details]=useState([])
          let [error,set_error]=useState("")
           useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>set_user_details(data))
            .catch(err=>console.log(err)
              )   
           }, []);
        
    return (
             <div className=" p-5  text-center container">
                  <h1 className="text-center text-primary">Details fetched from JSON request</h1>
                  <h2>{error}</h2>
                   <div className="row row-cols-lg-3   row-cols-md-2 row-cols-1 " >
                             {
                               users.map((each_user)=>
                                <div className="col mt-3 ">
                                         <div className="card bg-dark text-light p-3  card_to_change">
                                                 <h5 className="card-title text-success">{each_user.id}</h5>
                                                 <p className="card-text text-warning">{each_user.title}</p>
                                                 <p className="card-text text-danger">{each_user.body}</p>
                                         </div>
                                </div>

                  
                               )
                             }
                   </div>
                  
             </div>
    )
    }

    export default App;