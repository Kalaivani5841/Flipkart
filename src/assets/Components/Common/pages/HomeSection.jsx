import React from "react";
import "./HomeSection.css";

const sectionsData = [
  {
    title: "Summer Beauty & Fashion",
    products: [
      {
        img: "src/assets/wristwatches.jpg",
        alt: "wrist watch",
        name: "Wrist Watch",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/sportsshoes.jpg",
        alt: "sports shoes",
        name: "Sports Shoes",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/shirtings.jpg",
        alt: "tshirt",
        name: "Men's T-Shirt",
        offer: "Special Off",
      },
      {
        img: "src/assets/trackpants.jpg",
        alt: "track pants",
        name: "Track Pants",
        offer: "Min 30% Off",
      },
    ],
  },
  {
    title: "Season’s Top Picks",
    products: [
      {
        img: "src/assets/shoes.jpg",
        alt: "mens causual shoes",
        name: "Men's Causual Shoes",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/shirtsss.jpg",
        alt: "Causual shirts",
        name: "Casual Shirts",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/slipper.jpg",
        alt: "slippers",
        name: " Men's Slippers",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/designersaree.jpg",
        alt: "womens saree",
        name: "Women's Sarees",
        offer: "Min 70% Off",
      },
    ],
  },
];

function HomeSection() {
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

     
      <div className="section-box big-banner">
        <img
          src="src/assets/banner.jpg"
          alt="Summer Sale Banner"
          className="big-banner-img"
        />
      </div>
    </div>
  );
}

export default HomeSection;
