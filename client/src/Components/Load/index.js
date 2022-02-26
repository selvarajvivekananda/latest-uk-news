import React from 'react'
import './index.css';
import imageLoading from './load.gif';

//Reusable Loader component 
const Load = ({ loading }) => (
  loading ? (
    <div className="spinner">
      <img src={imageLoading} alt="Loading" />
    </div>
  ) : null
);
export default Load;