import React from 'react';

const MovieCard = ({ title, releaseDate }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h3 style={{ marginTop: '0' }}>{title}</h3>
      <p>Release Date: {releaseDate}</p>
      <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
        Review this Movie
      </button>
    </div>
  );
};

export default MovieCard;
