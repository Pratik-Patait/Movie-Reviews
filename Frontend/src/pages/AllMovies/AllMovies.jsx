import React from 'react';
import MovieCard from './MovieCard';

function AllMovies() {
  // Mock data matching the image content
  const movies = [
    { id: 1, title: 'Avatar', releaseDate: '2009-02-21' },
    { id: 2, title: 'Titanic', releaseDate: '1997-08-09' },
    { id: 3, title: 'The Dark Knight', releaseDate: '2008-12-16' },
  ];

  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* <Header /> */}
      <main style={{ padding: '20px' }}>
        <h1>All Movies</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          {/* Map over the movies data to render a MovieCard for each item */}
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllMovies;
