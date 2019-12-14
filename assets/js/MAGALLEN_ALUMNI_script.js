function onReady(callback) {
  var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
      }
  }, 1000);
  }

  function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }

  onReady(function() {
  setVisible('.page', true);
  setVisible('.box1', false);
  setVisible('.box2', false);
  setVisible('.box3', false);
  setVisible('.box4', false);
  });

  function confirmDialog(){

      var question = document.getElementById("post-question").value;

      if(question === ""){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Looks like you dont have any question to ask!',
              footer: '<a href>Why do I have this issue?</a>'
          })
      }else{
          Swal.fire({
          title: 'Are you sure?',
          text: "You want to post this question publicly?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#FFFFF',
          confirmButtonText: 'Yes, post it!'
          }).then((result) => {
              if (result.value) {
                  Swal.fire(
                  'Hooraay!',
                  'Your question has been post.',
                  'success'
                  )
                  // Clear input field
                  document.getElementById("post-question").value = "";
              }
          })
      }
  }