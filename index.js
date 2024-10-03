//get elements from the dom
// store them in variables
//take in user input
//when submit is clicked the images should display

const container = document.querySelector(".container");

const btn = document.querySelector("#submit");
async function dragonball() {
  const input = document.querySelector("#input");
  let url = `https://api.tvmaze.com/search/shows?q=${input.value}`;

  try {
    let response = await axios.get(url);
    container.innerHTML = "";

    response.data.forEach((showData) => {
      let showname = showData.show.name;
      console.log(response.data);
      // let name = document.createElement('h2')
      // name.innerHTML = showname

      let image = showData.show.image.original;
      let para = document.createElement("div");
      para.classList.add("show-container");
      para.innerHTML = `<img src="${image}" alt="Show Image">
                <h2>${showname}</h2>`;
      container.append(para);
    });
  } catch (error) {
    console.log("oops ERROR!");
  }
}

btn.addEventListener("click", dragonball);
