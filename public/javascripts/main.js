document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.querySelector(".generate-btn");
  const quoteShower = document.querySelector(".quote-shower");
  const sayerShower = document.querySelector(".sayerShower");

  // to get new quote
  async function getQuote() {
    // API request to server for getting quote
    try {
      const response = await fetch("/quote");

      if (!response.ok) {
        throw new Error("Response not ok");
      } else {
        const data = await response.json();
        displayQuote(data);
      }
    } catch (error) {
      console.error("Error getting quote: ", error);
      throw error;
    }
  }

  function displayQuote(data) {
    quoteShower.innerText = `"${data.randomQuote}"`;
    sayerShower.innerText = `- ${data.quoteSayer}`;
  }

  generateBtn.addEventListener("click", () => {
    getQuote();
  });
});
