import { expressjwt, GetVerificationKey } from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import dotenv from "dotenv";

dotenv.config();

export const checkJwt = expressjwt({
  secret: expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }) as GetVerificationKey,
  // audience: process.env.AUTH0_AUDIENCE,
  // issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
})
