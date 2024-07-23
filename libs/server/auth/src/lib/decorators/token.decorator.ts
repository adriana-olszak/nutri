import {
  ContextType,
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Request } from 'express';

export const CurrentToken = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    let req: Request;
    const type = context.getType() as ContextType | 'graphql';

    if (type === 'http') {
      req = context.switchToHttp().getRequest();
    } else if (type === 'graphql') {
      req = GqlExecutionContext.create(context).getContext().req;
    } else {
      throw new UnauthorizedException(`Context ${type} not supported`);
    }

    if (!req) throw new UnauthorizedException('No user found for request');

    return req.get('Authorization')?.replace('Bearer ', '');
  },
);
