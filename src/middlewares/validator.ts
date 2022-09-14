import { ObjectSchema } from 'joi';

function validator(schema: ObjectSchema, body: 'params') {
  const { error } = schema.validate(body);
  
  if (error) {
    const data = error.details[0].message;
    const code = 404;
    return { code, data };
  }
}
  
export default validator;