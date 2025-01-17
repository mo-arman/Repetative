import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q8vyYK6Oo5FCSKCUraI09Ug0iqfLTg5hrQ&s"
          alt="logo-img"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Restaurant = ({ name, rating, location }) => {
  return (
    <div>
      <div className="restaurant-container">
        <div className="restaurant-img">
          <img
            className="card-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/27113991-09f5-4b6a-b696-20339d334bdb_60243.jpg"
            alt="logo"
          />
        </div>
        <div className="card-cuisine">
          <h1>
            <strong>{name}</strong>
          </h1>
          <h1>{rating}star</h1>
          <h3>20-25 mins</h3>
          <h3>
            <strong>{location}</strong>
            <br></br>
            {/* <strong>Mahanagar</strong> */}
          </h3>
        </div>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="tt">
      <div className="restaurant">
        <div className="restaurant-card">
          <Restaurant name="Pizza Hut" rating={4.2} location="Pizza Palace" />
          <Restaurant
            name="The Burger King"
            rating={4.4}
            location="Gomti Nagar"
          />
        </div>
      </div>
     
    </div>
   
  );
};
const Body = () => {
  return <div><RestaurantCard/></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
