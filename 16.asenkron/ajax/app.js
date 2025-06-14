function prepareURL(url, id) {
  if ((id = null)) {
    return url;
  }
  return `${url}?postID=${id}`;
}

function getCommands(url, id) {
  let newURL = prepareURL(url, id);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  });

  xhr.open("GET", newURL);
  xhr.send();
}

getCommands("https://jsonplaceholder.typicode.com/comments", 1);
