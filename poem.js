function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Poem line 1"],
    autoStart: true,
    delay: 4,
    cursor: "",
  });
}

let searchForm = document.querySelector("#poem-generator-form");
searchForm.addEventListener("submit", generatePoem);
