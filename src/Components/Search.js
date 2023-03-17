import React, { useState} from 'react'
import '../Styles/Search.css'
import Guide from './Guide';


const RatingStar = ({ selected, onClick }) => {
  return (
    <div className="rating-star">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={selected >= index + 1 ? 'filled' : ''}
          onClick={() => onClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

function Search() {

    const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };
  
  
  return (
    <div className='searchPage'>
        <div className="left">
            <h2>Search a Tour Guide</h2>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="" id="" />
            </div>

            <div className="language">
              <label htmlFor="language">Language</label>
              <select id="language" name="language">
                <option value="Guide1">Guide1</option>
                <option value="Guide2">Guide2</option>
                <option value="Guide3">Guide3</option>
              </select>
            </div>         
            <div className="feedback">
              <label htmlFor="feedback">Feedback Rate</label>
            <input type="range" name="" id="" />
            </div>

            <div className="guide-type">
              <label htmlFor="name">Guide Type</label>
              <select id="language" name="language">
                <option value="Guide1">Guide1</option>
                <option value="Guide2">Guide2</option>
                <option value="Guide3">Guide3</option>
              </select>
            </div>   
            <div className="available">
              <input type="checkbox" name="" id="" />  
              <label htmlFor="">Available</label>          
            </div> 
            <div className="search-button">
              <button>Search<i class="fa-solid fa-magnifying-glass"></i></button></div>           
        </div>
                
        <div className="middle">
          <div className="">
            <Guide
              name="Guide 1"
              image="https://placehold.it/150x150"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
            />
          </div>
          <div className="">
            <Guide
              name="Guide 2"
              image="https://placehold.it/150x150"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
            />
          </div>
          </div>
        <div className="right"></div>
    </div>
  )
}

export default Search