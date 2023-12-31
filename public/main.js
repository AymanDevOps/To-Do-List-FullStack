//worked with brianna

var check = document.getElementsByClassName("fa-solid fa-check")
var trash = document.getElementsByClassName("fa-solid fa-x");


Array.from(check).forEach(function(element) {
  element.addEventListener('click', function(){
    const msg = this.parentNode.parentNode.childNodes[1].innerText
    fetch('messages/completed', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'msg': msg,
        'completed': true
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const msg = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
