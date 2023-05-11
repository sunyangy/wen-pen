import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PenDetail() {
  const params = useParams();
  const [pen, setPen] = useState(null);

  useEffect(() => {
    const fetchDetail = () => {
      fetch(`/api/pens/${params.id}`)
        .then((res) => res.json())
        .then(({ pens }) => {
          setPen(pens);
        });
    };
    fetchDetail();
  }, [params.id]);

  return (
    <div>
      {pen ? (
        <div className="pen-detail">
          <img src={pen.imageUrl} alt="" className="show-img" />
          <br />
          <i className="van-type">{pen.type}</i>
          <h2>{pen.name}</h2>
          <p className="pen-price">
            <span>${pen.price}</span>
          </p>
          <p>{pen.description}</p>
          <button className="btn">购买这只笔</button>
        </div>
      ) : (
        <h2>Loading ....</h2>
      )}
    </div>
  );
}
