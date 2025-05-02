import React from "react";
import "./ProductSection.css";

const sectionsData = [
  {
    title: "Make Your Home Stylish",
    products: [
      {
        img: "src/assets/wallclock.jpg",
        alt: "wall clock",
        name: "Wall Clock",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/keyholders.jpg",
        alt: "key holder",
        name: "Key Holder",
        offer: "Special Offer",
      },
      {
        img: "src/assets/plants.jpg",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/bathroom.jpg",
        alt: "bathroom racks",
        name: "Bathroom Racks",
        offer: "Top Collection",
      },
    ],
  },
  {
    title: "Travel Essential Picks",
    products: [
      {
        img: "src/assets/trimersss.jpg",
        alt: "trimmer",
        name: "Trimmer",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/shirtsss.jpg",
        alt: "casual shirt",
        name: "Casual Shirt",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/mensshirtss.jpg",
        alt: "tshirt",
        name: "Men's T-Shirt",
        offer: "Special Off",
      },
      {
        img: "src/assets/boxers.jpg",
        alt: "boxers",
        name: "Boxers",
        offer: "Best Picks",
      },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    products: [
      {
        img: "src/assets/bottless.jpg",
        alt: "water bottle & flask",
        name: "Water Bottle & Flask",
        offer: "Special Offer",
      },
      {
        img: "src/assets/appleplant.jpg",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/kitchen.jpg",
        alt: "kitchen container",
        name: "Kitchen Container",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/soaps.jpg",
        alt: "bathroom racks",
        name: "Bathroom Racks",
        offer: "Top Collection",
      },
    ],
  },
];

function ProductSection() {
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

export default ProductSection;