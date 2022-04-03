import { useEffect, useState } from "react";

function useReviews () {
  const [reviews, setReviews] = useState([]);

  useEffect (() => {
    fetch('reviews.json')
    .then (res => res.json())
    .then (data => setReviews(data))
    .catch ( () => console.log('Data font found'));
  }, [])

  return [reviews, setReviews];
}
export default useReviews;