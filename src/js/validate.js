function validate(event) {
	// TODO - write custom validation logic to validate the longitude and latitude
	// values. The latitude value must be a number between -90 and 90; the
	// longitude value must be a number between -180 and 180. If either/both are
	// invalid, show the appropriate error message in the form, and stop the
	// form from being submitted. If both values are valid, allow the form to be
	// submitted.
	console.log(
		'TODO - validate the longitude, latitude values before submitting'
	);

	// Validation functions
	const validLat = (lat) => lat >= -90 && lat <= 90;
	const validLong = (long) => long >= -180 && long <= 180;

	// Validate the latitude and longitude values
	const latitude = document.querySelector('#speciesLat').value;
	const longitude = document.querySelector('#speciesLong').value;
	console.log('lat & long: ', latitude, longitude);

	const textLat = document.querySelector('.required span#lat');
	const textLong = document.querySelector('.required span#long');

	const isNumeric = (value) => /^[-+]?[0-9]*.?[0-9]*$/.test(value);

	if (!validLat(latitude) || !isNumeric(latitude)) {
		textLat.innerText = 'must be a valid Latitude (-90 to 90)';
		event.preventDefault();
	} else textLat.innerText = '';

	if (!validLong(longitude) || !isNumeric(longitude)) {
		textLong.innerText = 'must be a valid Longitude (-180 to 180)';
		event.preventDefault();
	} else textLong.innerText = '';
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
	const form = document.querySelector('form');
	form.onsubmit = validate;
	form.reset(); // I add this to clear the form inputs after the submission
};

// Reference: https://angelika.me/2020/02/01/custom-error-messages-for-html5-form-validation/
