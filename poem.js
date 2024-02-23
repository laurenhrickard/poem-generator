function displayPoem(response) {
  let poemText = document.querySelector("#poem");
  poemText.innerHTML = `${response.data.answer}`;

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-box");
  let apiKey = "6a3d5679t1daboe944af11da0383dbcf";
  let prompt = `generate a four line poem in English about ${searchInput.value}`;
  let context =
    "please deliver the poem in html, please only deliver the poem, no other words, and separate each line with a <br /> except the last one. please capitalize the first word of each line. Do not give us a title. Do not change the styling of the words, no italics or bold.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let searchForm = document.querySelector("#poem-generator-form");
searchForm.addEventListener("submit", generatePoem);
