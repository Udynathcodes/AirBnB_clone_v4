$(document).ready(function () {
  $('input[type=checkbox]').on('click', function () {
    let amenSelect = [];
    $('input:checked').each(function () {
      amenSelect.push($(this).attr('data-name'));
    });
    $('.amenities h4').text(amenSelect.join(', '));
    if (amenSelect.length === 0) {
      $('.amenities h4').html('&nbsp;');
    }
  });

 $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    })
});
