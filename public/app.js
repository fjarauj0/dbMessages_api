const user = document.querySelector("#user");
const message = document.querySelector("#message");

const output = document.querySelector("#container");

const API = "https://dbmessages-api.herokuapp.com";

const postMessage = async () => {
  if (user.value == "" || message.value == "") {
    Swal.fire("Error", "User and message required", "error");
  } else {
    const apiURL = `${API}/message`;
    const data = {
      user: `${user.value}`,
      message: `${message.value}`,
    };
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        Swal.fire("Done", "Message saved", "success");
        user.value=""
        message.value=""
      }
    } catch (error) {
      Swal.fire("Error", "User and message required", "error");
    }
  }
};

const getMessages = async () => {
  output.innerHTML = ``;
  const apiURL = `${API}/message`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    data.body.forEach((element) => {
      output.innerHTML += `
      <div class="card">
        <h3>${element.user}</h3>
        <small>${FormatDate(element.date)}</small>
        <p>${element.message}</p>
      </div>
      `;
    });
  } catch (error) {
    console.log("Fetch error", error);
  }
};

const FormatDate = (fullDate) => {
  fullDate = fullDate.split("T");
  let time = fullDate[1].split(".");
  time = time[0].split(":");

  const formated = fullDate[0] + " | " + time[0] + ":" + time[1];
  return formated;
};
