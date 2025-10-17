// script.js

const API_KEY = "YOUR_API_KEY"; // ganti nanti di backend, jangan langsung taruh di sini
const API_URL = `https://newsdata.io/api/1/news?country=id&language=id&category=technology&apikey=${API_KEY}`;

async function getNews() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.results.forEach((article) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
      newsItem.innerHTML += `
        <h3>${article.title}</h3>
        <p>${article.description || "Tidak ada deskripsi"}</p>
        <a href="${article.url}" target="_blank">Baca selengkapnya</a>
      `;
      container.appendChild(newsItem);
    });
  } catch (error) {
    console.error("Gagal memuat berita:", error);
  }
}

getNews();
