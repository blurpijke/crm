let deals = JSON.parse(localStorage.getItem("deals")) || [];

function addDeal() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const status = document.getElementById("status").value;

  if (!title || !amount) {
    alert("Заполни все поля");
    return;
  }

  deals.push({
    title,
    amount,
    status,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("deals", JSON.stringify(deals));
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  deals.forEach(deal => {
    const li = document.createElement("li");
    li.textContent = `${deal.title} — ${deal.amount} ₸ — ${deal.status}`;
    list.appendChild(li);
  });
}

render();
