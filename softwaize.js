// =======> Main container <======//
const main = document.getElementById("main");

// =======> Main container <======//
const container = document.createElement("div");
container.id = "main_container";

//========> Apply CSS styles to the container using JS <======//
const containerStyle = `
  #custom-container {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

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
    letter-spacing: 10px;
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = containerStyle;
document.head.appendChild(styleTag);

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

main.appendChild(container);
console.log(main);
