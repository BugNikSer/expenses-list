import jwt from 'jsonwebtoken';

const HOUR = 60_000;
const DAY = 86_400_000;

export type TPayload = { userId: number }

const tokenService = {
  generateTokens: (userId: number, key: string) => {
    const data = { userId, ts: Number(new Date()) };
    const token = jwt.sign(data, key, { expiresIn: HOUR });
    const refreshToken = jwt.sign(data, key, { expiresIn: DAY });

    return { token, refreshToken };
  },
  parseTokens: (token: string, refreshToken: string, key: string) => {
    try {
      const payload = jwt.verify(token, key) as TPayload;
      return { payload, expired: false };
    } catch (e) {
      try {
        const payload = jwt.verify(refreshToken, key) as TPayload;
        return { payload, expired: true };
      } catch (e) {
        return null;
      }
    };
  }
};

export default tokenService;
