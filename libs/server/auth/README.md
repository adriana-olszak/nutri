Certainly. Here's the rephrased README with all mentions of ABAC removed:

# server-auth - NestJS RBAC library 

This package provides essential guards and decorators for implementing authorization in Nest applications. It supports Role-Based Access Control (RBAC). The components are compatible with HTTP controllers and GraphQL resolvers.

Key Features:
- Stateless authentication using JWTs
- No database queries required for user authentication
- Scalable for container deployments in production environments

### Role-Based Access Control (RBAC)

The `RolesGuard` offers the following functionality:
- Verifies JWT validity
- Extracts `RequestUser` from JWT payload
- Enables `CurrentUser` parameter decorator injection
- Checks user roles against required roles

Role definitions can be customized in `libs/common/src/lib/role.ts`.

Usage examples:

1. Require either 'Admin' or 'Moderator' role:
```typescript
@UseGuards(RolesGuard('Admin', 'Moderator'))
accountInfo(@CurrentUser() user: RequestUser) { ... }
```

2. Require both 'Admin' and 'Moderator' roles:
```typescript
@UseGuards(RolesGuard('Admin'), RolesGuard('Moderator'))
accountInfo(@CurrentUser() user: RequestUser) { ... }
```

3. Verify JWT and extract `RequestUser` without role check:
```typescript
@UseGuards(RolesGuard())
accountInfo(@CurrentUser() user: RequestUser) { ... }
```

The `AllowAnonymous` decorator permits non-authenticated access to specific endpoints:

```typescript
@Controller('blog')
@UseGuards(RolesGuard('Moderator'))
export class BlogController {
  @Get()
  @AllowAnonymous()
  getBlog() { ... }
  
  @Put()
  editBlog() { ... }
}
```

This configuration allows anyone to access `getBlog`, but requires the 'Moderator' role for `editBlog`.

Is there anything else you'd like me to modify or explain about this README?
