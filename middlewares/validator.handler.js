const boom = require('@hapi/boom')


function validatorHandler(schema, property) {
  //middleware de forma dinamica, con clousure;
  return (req, res, next) => {
    const data = req[property];
    //abortEarly para que me mande todos los errores de forma conjunta
    const { error } = schema.validate(data, {abortEarly: false});
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}


module.exports = validatorHandler;
