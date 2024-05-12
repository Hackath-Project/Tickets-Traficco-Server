import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile } from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        '249173118010-ldi1ngb1vjrabkvka7s4fcgqbilcqrn0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      name: profile.name.givenName,
      picture: profile.photos[0].value,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}
