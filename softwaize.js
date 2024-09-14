document.addEventListener("DOMContentLoaded", () => {
  // =======> Main container <======//
  const main = document.getElementById("main");

  // =======> Main container check <======//
  if (!main) {
    console.error("Main container not found!");
    return;
  }

  // =======> Main container <======//
  const container = document.createElement("div");
  container.id = "main_container";

  //========> All CSS styles to the container using JS <======//
  const containerStyle = `

/*==========> Main Container Style<=========  */
  #custom-container {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

/*==========> Navbar Container Style <=========  */
 #nav_list {
  display: flex;
  align-content: center;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
}

#nav_list li div svg {
  margin-top: 0px;
}

#nav_list li .nav_title {
  display: flex;
  align-content: center;
  gap: 20px;
}
#nav_list li .nav_title h2 {
  margin: 0;
  font-size: 20px;
  color: #363636e6;
  font-weight: 100;
  letter-spacing: 6px;
}

/*==========> Hero Container  Style <=========  */
#hero_container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 10px 0;
  scrollbar-width: none;
  margin-top: 40px;
  gap:20px;
}
#hero_container #box h2 {
  text-align: center;
  font-size: 17px;
  color: #363636e6;
}
#hero_container #box , #cart_container #box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#hero_container::-webkit-scrollbar {
  display: none;
}

.hero_item {
  flex: 0 0 auto;
  width: 86px;
  height: 86px;
  scroll-snap-align: start;
  background: #dcdcdc6e;
  border-radius: 100%;
  overflow: hidden;
}

.hero_item img , #cart_container #box .cart_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/*==========> Banner Container style <=========  */
#banner_container {
  height: 450px;
  background: #bdb5ad94;
  padding: 100px 10px 20px 10px;
}

#banner_container .up_to {
  margin-bottom: 0;
}

#banner_container h2 {
  margin-top: 0;
  text-align: center;
  font-size: 63px;
  font-weight: 100;
}

#banner_container h4 {
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 200;
}

#banner_container h4 span {
  font-weight: 700;
}

#banner_container h4 span a {
  color: black;
}

#banner_container .shop_button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

#banner_container .shop_button button {
  color: white;
  text-align: center;
  background: #000;
  border: none;
  padding: 10px 20px;
  width: 200px;
}

#banner_container .short_description {
  text-align: center;
  margin-top: 50px;
}

/*==========> Cart Container <=========  */
#cart_container{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 10px 0;
  scrollbar-width: none;
  margin-top: 50px;
  gap:20px;
}

#cart_container #box .cart_item {
  flex: 0 0 auto;
  width: 150px;
  height: 200px;
  scroll-snap-align: start;
  background: #dcdcdc6e;
  overflow: hidden;
}

#cart_container #box h2{
  text-align: center;
  font-size: 20px;
  color: #363636e6;
}

`;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = containerStyle;
  document.head.appendChild(styleTag);

  // ======>All image <========//
  const allImage = [
    {
      id: 1,
      name: "Best Sellers",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png",
    },
    {
      id: 2,
      name: "New",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png",
    },
    {
      id: 3,
      name: "Necklaces",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png",
    },
    {
      id: 4,
      name: "Rings",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png",
    },
    {
      id: 5,
      name: "Earrings",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png",
    },
    {
      id: 6,
      name: "Personalized",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png",
    },
    {
      id: 7,
      name: "Fine",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png",
    },
    {
      id: 8,
      name: "Clearance",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png",
    },
    {
      id: 9,
      name: "Sale",
      url: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png",
    },
  ];

  //========> Navbar  <========//
  const navbar = document.createElement("nav");
  container.appendChild(navbar);

  const ul = document.createElement("ul");
  navbar.appendChild(ul);
  ul.id = "nav_list";

  ul.innerHTML = `

 <li>
    <div> <svg width="20" height="20" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M50 12.5H2a2 2 0 0 1 0-4h48a2 2 0 0 1 0 4M50 28H2a2 2 0 0 1 0-4h48a2 2 0 0 1 0 4m0 15.5H2a2 2 0 0 1 0-4h48a2 2 0 0 1 0 4"/></svg></div>
</li>
<li>
    <div class="nav_title">
          <h2>JAMES</h2>
          <h2>MICHELLE</h2>
    </div>
</li>
<li>
    <div>
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m2.401 6.39-.497-.056zm-.778 7 .497.055zm11.754 0-.497.055zm-.778-7 .497-.056zM1.904 6.334l-.778 7 .994.11.778-7zM2.617 15h9.766v-1H2.617zm11.257-1.666-.778-7-.994.11.778 7zM11.604 5H3.396v1h8.21zm1.492 1.334A1.5 1.5 0 0 0 11.605 5v1a.5.5 0 0 1 .497.445zM12.383 15a1.5 1.5 0 0 0 1.49-1.666l-.993.11a.5.5 0 0 1-.497.556zM1.126 13.334A1.5 1.5 0 0 0 2.617 15v-1a.5.5 0 0 1-.497-.555zm1.772-6.89A.5.5 0 0 1 3.395 6V5a1.5 1.5 0 0 0-1.49 1.334zM5 4v-.5H4V4zm5-.5V4h1v-.5zM7.5 1A2.5 2.5 0 0 1 10 3.5h1A3.5 3.5 0 0 0 7.5 0zM5 3.5A2.5 2.5 0 0 1 7.5 1V0A3.5 3.5 0 0 0 4 3.5z" fill="#000"/>
        </svg>
    </div>
</li>
`;

  //========> Hero Container  <========//
  const heroContainer = document.createElement("div");
  container.appendChild(heroContainer);
  heroContainer.id = "hero_container";

  const heroItems = allImage
    .map(
      (item) => `
  <div id="box">
    <div class="hero_item"> <a target="_blank" href="https://jamesmichelle.com/collections/necklaces"> <img src="${item.url}" alt="image" />
    </a>
    </div>
    <h2>${item?.name}</h2>
  </div>
`
    )
    .join("");

  heroContainer.innerHTML = heroItems;

  //========> Banner Container  <========//
  const bannerContainer = document.createElement("div");
  container.appendChild(bannerContainer);
  bannerContainer.id = "banner_container";

  bannerContainer.innerHTML = `
      <p class="up_to">up to</p>

      <h2>30% OFF SITEWIDE</h2>

      <h4>
        30% OFF Sitewide | <span>Code: <a href="">MEMORIAL30</a> </span>
      </h4>

      <h4>
        20% OFF Fine | <span>Code: <a href="">FINE20</a> </span>
      </h4>

      <div class="shop_button">
        <button>SHOP THE SALE</button>
      </div>

      <p class="short_description">
        <i>Lorem ipsum dolor, sit amet consectetur adipisicing</i> <br />
        <i>Laborum hic ex dicta in distinctio quibusdam.</i>
      </p>
`;

  //========> Tab Container  <========//
  const cartContainer = document.createElement("div");
  container.appendChild(cartContainer);
  cartContainer.id = "cart_container";

  const cartItems = allImage
    .map(
      (item) => `
  <div id="box">
    <div class="cart_item"> <a target="_blank" href="https://jamesmichelle.com/collections/necklaces"> <img src="${item.url}" alt="image" />
    </a>
    </div>
    <h2>${item?.name}</h2>
  </div>
`
    )
    .join("");

  cartContainer.innerHTML = cartItems;

  main.appendChild(container);
  console.log(container);
});
