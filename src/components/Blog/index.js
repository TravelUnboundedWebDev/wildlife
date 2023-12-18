import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './index.css'

const Blog = ({ id, title, description, imageUrl}) => {
  return (
    <Link to={`/blog/${id}`} className='blogs-link'>
      <div className="card" key={id}>
          <img src={imageUrl} alt="Card" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="arrow-btn">Read More <FaArrowRight /></p>
          </div>
      </div>
    </Link>
  );
};
export default Blog
