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

const isCPFValid = (request, response, next) => {
  const { cpf } = request.body;

  if (cpf.length === 0) {
    return response.status(400).json(
      { message: 'The field "cpf" can not be empty' }
    );
  };

  if (cpf.length !== 11) {
    return response.status(400).json(
      { message: 'Invalid entries. Try again.' }
    );
  };
  next();
};

module.exports = {
  isNameValid,
  isEmailValid,
  isCPFValid,
};