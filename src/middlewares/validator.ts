import { ObjectSchema } from 'joi';

function validator(schema: ObjectSchema, body: 'params') {
  const { error } = schema.validate(body);
  
  if (error) {
    const [number, data] = error.details[0].message.split('|');
    const code = Number(number);
    return { code, data };
  }
}
  
export default validator;