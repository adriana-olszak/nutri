import {
  ContextType,
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { RequestUserDto } from '../dto/request-user.dto';

/**
 * Parameter decorator to provide the `RequestUserDto`.
 * Utilized in conjunction with `RolesGuard`.
 * Works with either HTTP or GraphQL requests.
 * ```ts
 * ＠UseGuards(RolesGuard('Registered'))
 * accountInfo(＠CurrentUser() user: RequestUserDto) { ... }
 * ```
 */
export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  let user: RequestUserDto;
  const type = context.getType() as ContextType | 'graphql';

  if (type === 'http') {
    user = context.switchToHttp().getRequest().user;
  } else if (type === 'graphql') {
    user = GqlExecutionContext.create(context).getContext().req.user;
  } else {
    throw new UnauthorizedException(`Context ${type} not supported`);
  }

  if (!user) throw new UnauthorizedException('No user found for request');

  return user;
});
