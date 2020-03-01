/** CSS  */

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/public/style.css");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      console.log("success");
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.querySelector("head").appendChild(style);
    }
  };
  request.send();
};

/** JS  */

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/public/2.js");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      console.log("success");
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

/** HTML  */

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/public/3.html");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      console.log("success");
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};

/** XML  */

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/public/4.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

/**json */

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/public/5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      const object  = JSON.parse(request.response)
      myName.textContent = object.name
      console.log(object)
    }
  };
  request.send();
};

/**page */
let n = 1
getPAGE2.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/public/page${n + 1}`);
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status <= 400
    ) {
      const array = JSON.parse(request.response)
      array.forEach( item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n+=1
    }
  };
  request.send();
};