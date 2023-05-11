import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <div className="background">
        <h2>探索转笔的世界</h2>
        <p>
          转笔（英文：Pen spinning (转动)
          ）是一项用不同的方法与技巧，以手指来转动笔的休闲活动。可由多个不同的招式组合而成。
        </p>
        <Link to="pens" className="find-pens">
          {' '}
          寻找适合你的笔
        </Link>
      </div>
    </>
  );
}
