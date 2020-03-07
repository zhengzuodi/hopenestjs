import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data, req) => {
  // tslint:disable-next-line:no-console
  console.log(data);
  return req.user;
});
