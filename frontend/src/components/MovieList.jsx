import Movieitem from './Movieitem';

const listings = [
  {
    image: require('../assets/products/image1.jpg'),
    title: 'Harry Potter',
    rating: 4.5,
    releaseDate: '24-Nov-2024',
    language: 'English',
  },
  {
    image: require('../assets/products/image1.jpg'),
    title: 'Harry Potter',
    rating: 4.5,
    releaseDate: '24-Nov-2024',
    language: 'English',
  },
  {
    image: require('../assets/products/image1.jpg'),
    title: 'Harry Potter',
    rating: 4.5,
    releaseDate: '24-Nov-2024',
    language: 'English',
  }
];

function MovieList() {
  return (
    <div className="total-cards">
      {listings.map((listing, index) => (
        <Movieitem
          key={index}
          image={listing.image}
          title={listing.title}
          releaseDate={listing.releaseDate}
          language={listing.language}
          rating={listing.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
