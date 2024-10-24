function Movieitem({ image, title, releaseDate, rating, language }) {
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        const starType = (i <= Math.floor(rating)) ? 'fa-star' : 'fa-star-o';
        const halfStar = (i === Math.ceil(rating) && !Number.isInteger(rating)) ? 'fa-star-half-o' : starType;
        stars.push(
          <i
            key={i}
            style={{ fontSize: '13px', color: '#FFD700', marginRight: '1px' }}
            className={`fa ${halfStar}`}
          ></i>
        );
      }
      return stars;
    };
  
    return (
      <div className="listing-card">
        <div className="image-container">
          <img src={image} alt={title} className="listing-image" />
          <div className="live-tag"><strong>Hot!</strong></div>
        </div>
        <div className="listing-info">
          <h3>{title}</h3>
          <div className="price-section">
            <p><span>Language: </span>{language}</p>
            <p><span>Realease Date: </span>{releaseDate}</p>
            <p className="hosted-by">
              <span className="star-section">
                {renderStars()}&nbsp;({rating})
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Movieitem;