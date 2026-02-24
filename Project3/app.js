const searchInput = document.getElementById("search");
const listItems = document.querySelectorAll("#list li");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
