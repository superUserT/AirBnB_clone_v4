$(document).ready(function () {
    const amenityIds = {};

    function updateAmenitiesList() {
        const checkedAmenities = Object.values(amenityIds);
        const amenitiesList = checkedAmenities.join(', ');

    $('#amenities h4').text(amenitiesList);
    }
    $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).attr('data-id');

    if ($(this).prop('checked')) {
        amenityIds[amenityId] = amenityId;
    } else {
        delete amenityIds[amenityId];
    }
    updateAmenitiesList();
    });
});
