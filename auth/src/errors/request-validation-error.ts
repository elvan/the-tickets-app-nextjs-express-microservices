import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
    });
  }
}
