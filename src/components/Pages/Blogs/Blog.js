import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Blog = ({data}) => {
  const {question, answer, post_data} = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-2/3 bg-orange-100 mb-2 relative">
          <div className="flex justify-between items-center bg-orange-300 px-2 py-2">
            <h4 className="font-semibold text-2xl">
              {question}
            </h4>
            <span onClick={() => setOpen(!open)} className="hover:cursor-pointer">
             {open ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </span>
          </div>

          <div className={`${open ? 'hidden' : 'initial'}`}>
            <p className="py-2 px-3 font-light text-lg">{answer}</p>
            <p className="bg-orange-200 border-l-2  border-red-500 pl-2 font-medium text-red-900">
              Post date: <span className="text-teal-900">{post_data}</span>
            </p>
          </div>
        </div>
  );
};

export default Blog;