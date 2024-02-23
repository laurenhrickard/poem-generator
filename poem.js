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
  let prompt = `generate a four line poem in English about ${searchInput.value} with at least five words per line`;
  let context =
    "please deliver the poem in html, please only deliver the poem, no other words, and separate each line with a <br />. never add a <br /> to the last line. please capitalize the first word of each line. Do not give us a title. Do not change the styling of the words, no italics or bold. Give me at least five words on each line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Your poem is generating...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let searchForm = document.querySelector("#poem-generator-form");
searchForm.addEventListener("submit", generatePoem);
