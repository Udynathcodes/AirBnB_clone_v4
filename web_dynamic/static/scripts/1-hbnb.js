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
});
