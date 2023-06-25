var container = document.querySelector(".container");

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((response) => {
    response.json().then((data) => {
      // console.log('data', data);
      for (var item of data) {
        console.log("item", item);
        container.innerHTML += `<div class="item">
                                <img class="image" src="${item.image_link}" alt="">
                                <h2>${item.name}</h2>
                                <p>${item.price}</p>
                                </div>`;
      }
    });
  })

  .catch((e) => {
    console.log(e);
  });
