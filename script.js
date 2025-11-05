import { messages } from "./masssage.js";

document.addEventListener("DOMContentLoaded", () => {
  setMessage();

  const body = document.querySelector("body");
  const container = document.querySelector(".container");
  const message = document.querySelector(".message");
  let bodyHeight = body.getBoundingClientRect().height;
  let messageHeight = message.getBoundingClientRect().height;

  if (messageHeight > bodyHeight - 100) {
    message.style.fontSize = "3vw";
  }

  bodyHeight = body.getBoundingClientRect().height;
  messageHeight = message.getBoundingClientRect().height;

  if (messageHeight > bodyHeight - 100) {
    container.style.paddingBlock = "100px";
  }

  body.style.overflowY = 'auto'

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    intro();
  }, 500);
});

function intro() {
  const intro = document.querySelector(".intro");

  intro.style.opacity = 0;
}

function setMessage() {
  const message = document.querySelector(".message");
  const start = new Date("2025-11-06");
  const current = new Date();
  const end = new Date("2025-11-10");

  const allTime = end - start
  const over = end - current;
  const diffTime = current - start;

  const allDays = Math.ceil(allTime / (1000 * 60 * 60 * 24));
  const isOver = Math.ceil(over / (1000 * 60 * 60 * 24));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formatDay = diffDays <= 0 ? `D${diffDays - 1}` : `Day ${diffDays}`;
  const messageId = diffDays < 0 ? 0 : diffDays > allDays ? messages.length - 1 : diffDays

  message.innerHTML = messages[messageId]
}
