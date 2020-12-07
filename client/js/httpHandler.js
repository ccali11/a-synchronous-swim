(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  // Using AJAX, periodically request a random swim command from server
  const getSwimCommand = () => {
      $.ajax({
        type: 'GET',
        url: serverUrl,
        success: (data) => { SwimTeam.move(data) },
        complete: () => {
          setTimeout(getSwimCommand, 100);
        }
      });
    }

    setTimeout(getSwimCommand, 0);

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/background.jpg', // 'FILL_ME_IN',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });
})();
