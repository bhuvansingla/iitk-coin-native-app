function rollNoValidator(value: string): boolean {
	// must contain either 6 or 8 numbers
	const regex = /^[0-9]{6}(?:[0-9]{2})?$/;
	return regex.test(value);
}

function nameValidator(value: string): boolean {
	// must contain only alphabets and space
	const regex = /^[a-zA-Z ]{3,40}$/;
	return regex.test(value);
}

function emailValidator(value: string): boolean {
	// must contain @iitk.ac.in
	const regex = /^[a-z0-9]{3,40}@iitk\.ac\.in$/;
	return regex.test(value);
}

function passwordValidator(value: string): boolean {
	// atleast one number, one lowercase, one uppercase letter, 
	// one special character, atleast 8 characters, and atmax 16 characters
	const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
	return regex.test(value);
}

function otpValidator(value: string): boolean {
	// must contain only numbers
	const regex = /^[0-9]{8}$/;
	return regex.test(value);
}

function remarksValidator(value: string): boolean {
	// must contain only alphabets, numbers and space
	const regex = /^[a-zA-Z0-9 ]{3,40}$/;
	return regex.test(value);
}

const fieldValidators = {
	rollNoValidator,
	nameValidator,
	emailValidator,
	passwordValidator,
	otpValidator,
	remarksValidator,
}; 

export default fieldValidators;
