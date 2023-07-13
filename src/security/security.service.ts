import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class SecurityService extends PassportStrategy(Strategy, 'S2S') {
  constructor() {
    super({
      clientID: process.env.S2S_CLIENT_ID,
      clientSecret: process.env.S2S_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google-redirect',
      scope: ['email', 'profile'],
    });
  }
}
