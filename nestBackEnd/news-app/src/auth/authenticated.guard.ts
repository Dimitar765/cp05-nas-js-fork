import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(contex: ExecutionContext) {
    const req = await contex.switchToHttp().getRequest();
    console.log('from authenticatedGuard');
    return req.isAuthenticated();
  }
}
