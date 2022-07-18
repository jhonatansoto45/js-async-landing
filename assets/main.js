/* import fetch from "node-fetch"; */

const content = document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7791a3c849mshad33dd69a88c39ep12770cjsn8af7643406d4",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};
const API =
  "https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8";

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// Autollamado de function
(async () => {
  try {
    const music = await fetchData(API);
    let view = `
    ${
      music.artists.map(
        (item) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
    >
      <img src="${item.images[0].url}" alt="" class="w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      ${item.name}
        <span aria-hidden="true" class="absolute inset-0"></span>
      </h3>
    </div>
  </div>
    `
      )
      /* .slice(0, 4)
      .join("") */
    } 
    `;

    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
