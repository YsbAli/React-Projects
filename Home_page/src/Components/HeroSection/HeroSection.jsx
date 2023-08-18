// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
         <div className="tagline">
         <h1>
            YOUR FEET DESERVE <br /> THE BEST
          </h1>
         </div>
          <p className="plan-text">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
            HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE
            HERE TO HELP YOU WITH OUR <br />
            SHOES.
          </p>
          <div className="hero-btns">
            <button>Shop Now</button>
            <button className="category">Category</button>
          </div>
          <div className="shop">
            <p>Also Available On</p>
            <div className="icons">
              <img src="./Assets/flipkart.png" alt="" />
              <img src="./Assets/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Assets/shoe_image.png" alt="shoe_Image" />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
