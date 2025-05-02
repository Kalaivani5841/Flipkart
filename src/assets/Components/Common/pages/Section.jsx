
import React from "react";
import "./Section.css";

const sectionsData = [
  {
    title: "Summer Fashion",
    products: [
      {
        img: "src/assets/shoes.jpg",
        alt: "casual shoes",
        name: "Men's Casual Shoes",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/bags.jpg",
        alt: "backpack",
        name: "Backpacks",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/slipper.jpg",
        alt: "slippers",
        name: "Men's Slippers",
        offer: "From ₹199",
      },
      {
        img: "src/assets/sportsshoes.jpg",
        alt: "sports shoes",
        name: "Men's Sports Shoes",
        offer: "Min 60% Off",
      },
    ],
  },
  {
    title: "Festive Must Haves",
    products: [
      {
        img: "src/assets/causualshirts.jpg",
        alt: "casual shirt",
        name: "Men's Casual Shirt",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/menstshirts.jpg",
        alt: "tshirt",
        name: "Men's T-Shirts",
        offer: "Special Offer",
      },
      {
        img: "src/assets/womensaree.jpg",
        alt: "saree",
        name: "Women Saree",
        offer: "Min 40% Off",
      },
      {
        img: "src/assets/speakers.jpg",
        alt: "speaker",
        name: "Bluetooth Speaker",
        offer: "Special Offer",
      },
    ],
  },
  {
    title: "Appliances for Cool Summer",
    products: [
      {
        img: "src/assets/hometheatre.jpg",
        alt: "home theatre",
        name: "Home Theatre System",
        offer: "Top Sellers",
      },
      {
        img: "src/assets/smartspeaker.jpg",
        alt: "smart speaker",
        name: "Smart Speakers",
        offer: "Special Offer",
      },
      {
        img: "src/assets/camera.jpg",
        alt: "air cooler",
        name: "Camera",
        offer: "From ₹29,000",
      },
      {
        img: "src/assets/fans.jpg",
        alt: "fan",
        name: "Ceiling Fans",
        offer: "Some Offer",
      },
    ],
  },
];

function Section() {
  return (
    <div className="section-wrapper">
      {sectionsData.map((section, sectionIndex) => (
        <div className="section-box" key={sectionIndex}>
          <h3>{section.title}</h3>
          <div className="grid-2x2">
            {section.products.map((product, productIndex) => (
              <div className="product-card" key={productIndex}>
                <img src={product.img} alt={product.alt} />
                <p className="product-name">{product.name}</p>
                <p className="product-offer">{product.offer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;

