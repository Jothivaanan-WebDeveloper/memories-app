import React from "react";
import Form from "./components/Form";
import memories from "./images/memories.png";
import Posts from "./components/PostsContainer/Posts";

function App() {
  return (
    <>
    <div className='container mt-3 bg-image'>
      <header>
      <div className='d-flex justify-content-center gap-1'>
          <h1 className='heading'>Memory Book</h1>
          <img src={memories} alt="memories" height={60} />
      </div>
      </header>
      <div className='d-flex justify-content-around'>
        <div>
        <Posts />
        </div>
        <div>
        <Form />
        </div>
      </div>
    </div>
    
  </>
  );
}

export default App;
