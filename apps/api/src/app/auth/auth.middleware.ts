import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user';
import { expressjwt } from 'express-jwt';
import { JwtPayload } from 'jsonwebtoken';
import { environment } from '../../environments/environment';
import { Model } from 'mongoose';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  use(req, res, next) {
    expressjwt({
      secret: environment.jwtSecretPassword,
      algorithms: ['HS256'],
      isRevoked: async (req1, token) => {
        const payload = token.payload as JwtPayload;
        if (!payload._id) {
          throw new UnauthorizedException('The token contains invalid credentials or has expired');
        }

        const user = await this.userModel.findById(payload._id).exec();
        if (!user || !user.login) throw new UnauthorizedException('The user has been logged out');

        return false;
      },
    }).unless({path: ['/api/', '/api/login', '/api/sign-up']})(req, res, next);
  }
}
