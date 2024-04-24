const isNameValid = (request, response, next) => {
  const name = request.query.q;

  if (name.length === 0)
    return response.status(400).json(
    { message: 'The field "name" can not be empty' }
  );
  next();
};

const isEmailValid = (request, response, next) => {
  const { email } = request.body;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.length === 0) {
    return response.status(400).json(
      { message: 'The field "email" can not be empty' }
    );
  };

  if (!regexEmail.test(email)) {
    return response.status(400).json(
      { message: 'Invalid entries. Try again.' }
    );
  };  
  next();
};

const isRegisterValid = (request, response, next) => {
  const { id } = request.params;
  if (!id) {
    return response.status(400).json({
      message: 'The field "id" is required'
    });
  };
  next();
};

module.exports = {
  isNameValid,
  isEmailValid,
  isRegisterValid,
};