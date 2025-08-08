const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const userInputP = document.querySelector(".user-input");
button.addEventListener("click", () => {
  const original = input.value;
      if (original.trim() === "") {
        alert("Please input a value");
        return;
      }
result.classList.remove("hidden");
  const cleaned = original.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
      if (cleaned === reversed) {
        userInputP.textContent = `${original} is a palindrome.`;
      } else {
        userInputP.textContent = `${original} is not a palindrome.`;
      }
});
