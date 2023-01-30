import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import Post from "./PostsContents/Post";

export default function Posts() {
    const [data, setData] = useState([]);

    useEffect (() => {
        findAll();
      }, []);
    
      const findAll = async () => {
          try {
            await fetchPosts().then(res => {
            //   console.log(res.data);
              setData(res.data);
            });
          } catch (error) {
            console.log(error);
          }
      }
    return (
        <>
            <div className="d-flex flex-wrap gap-2">
            {
                data.map(el => {
                    return <Post props={el}/>
                })
            }
            </div>
        </>
    )
}