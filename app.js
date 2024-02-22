"use strict";

async function fetchJoke() {
  try {
    const URL =
      "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10";
    const response = await fetch(URL);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    displayJoke(data);
  } catch (error) {
    console.log(error);
  }
}

function displayJoke(jokeOfDay) {
  const jokeContainer = document.getElementById("joke");
  jokeContainer.innerHTML = "";
  jokeOfDay.jokes.forEach((jokes) => {
    const jokeElement = document.createElement("div");
    jokeElement.innerHTML = `
        <p>${jokes.joke}</p>`;
    jokeContainer.appendChild(jokeElement);
  });
}

document.getElementById("get-joke").addEventListener("click", fetchJoke);
