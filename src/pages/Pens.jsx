import React, { useEffect, useState } from 'react';

export default function Pens() {
  const [pens, setPens] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/pens');
      const result = await data.json();
      setPens(result.pens);
    };
    fetchData();
  }, []);

  const penElements = pens.map((pen) => {
    return (
      <div key={pen.id} className="pen">
        <img src={pen.imageUrl} alt="一张转笔图片" className="pen-img" />
        <div>
          <h3>{pen.name}</h3>
          <p>${pen.price}</p>
        </div>
        <i className={`van-type ${pen.type} selected`}>{pen.type}</i>
      </div>
    );
  });

  return (
    <>
      <h2>探索更多的风格</h2>
      <div className="pen-con">{penElements}</div>
    </>
  );
}
