import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ){}


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token: string = req.headers.authorization.split(' ')[1];
    if (!req && !token){
      return false;
    }
    req.user = await this.jwtService.verifyAsync(token, {
      secret: await this.configService.getOrThrow('JWT_SECRET')
    })
    return true
  }
}
