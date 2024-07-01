const weekday = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
api= `https://api.jikan.moe/v4/schedules?filter=${day}`

console.log(api)
async function loganimes() {
    const response = await fetch(api);
    const animes = await response.json();
    const animeList = document.getElementById('anime-list');
    animes.data.forEach(element => {
      // console.log(element.images.jpg.image_url)
      console.log(element)
      const animeItem = document.createElement('div');
      animeItem.classList.add('anime-item');

      const animeImage = document.createElement('img');
      animeImage.src = element.images.jpg.image_url;
      animeItem.appendChild(animeImage);

      const animeTitle = document.createElement('div');
      animeTitle.classList.add('anime-title');
      animeTitle.innerHTML= `<p>${element.title}</p><p>${element.broadcast.time}(JST)</p>`;
      animeItem.appendChild(animeTitle);

      animeList.appendChild(animeItem);
    });
  }
  loganimes()