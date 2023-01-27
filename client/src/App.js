import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getPosts} from './action/posts';

function App() {
  const dispatch = useDispatch();
  useEffect (() => {
      dispatch(getPosts());
  },[dispatch]);
  return (
    <>
      <div className='container mt-3'>
        <header>
        <div className='d-flex justify-content-center gap-1'>
            <h3 className='heading'>Memories</h3>
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
