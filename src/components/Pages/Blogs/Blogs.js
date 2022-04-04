import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [qna, setQna] = useState();

  useEffect (() => {
    fetch('qna.json')
      .then (res => res.json())
      .then (data => setQna(data))
      .catch (() => console.log('Data Not Found'));
  }, [])

  return (
    <div className="w-full max-w-screen-xl mt-10 mb-40">
      <h3 
        className="bg-teal-400 p-2 rounded-t-lg border-b-2 border-orange-500 text-xl font-bold mb-4">
        Blogs 
      </h3>
      <div className="flex flex-col items-center">
        {
          qna?.map( qnaItem => {
            return (
              <Blog
                key={qnaItem._id}
                data={qnaItem}
              ></Blog>
            );
          })  
        }
      </div>
    </div>
  );
};

export default Blogs;
