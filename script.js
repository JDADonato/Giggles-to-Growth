// Vaccination Tracker
const vaccineForm = document.getElementById("vaccine-form");
const vaccineList = document.getElementById("vaccine-list");

vaccineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("vaccine-name").value;
  const date = document.getElementById("vaccine-date").value;

  const li = document.createElement("li");
  li.textContent = `${name} - ${date}`;
  vaccineList.appendChild(li);

  vaccineForm.reset();
});

// Growth Log
const growthForm = document.getElementById("growth-form");
const growthList = document.getElementById("growth-list");

growthForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.getElementById("milestone-desc").value;
  const date = document.getElementById("milestone-date").value;

  const li = document.createElement("li");
  li.textContent = `${desc} on ${date}`;
  growthList.appendChild(li);

  growthForm.reset();
});

// Chat
const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message !== "") {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = `👩 Mom: ${message}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
});
