import NodeCache from 'node-cache';
import { userServiceTrpc } from '@web/src/server/connectors/userServiceConnector';

const PARSE_TOKENS_PREFIX = 'parse-tokens';

const tokensCache = new NodeCache();
const DAY_SECONDS = 3_600;

const tokensService = {
  parseTokens: async ({
    token,
    refreshToken,
  }: {
    token: string;
    refreshToken: string;
  }) => {
    const query = userServiceTrpc.tokens.parseBoth.query;
    type TParsedTokensResponse = Awaited<ReturnType<typeof query>>;
    const cacheKey = `${PARSE_TOKENS_PREFIX}_${token}_${refreshToken}`;

    let data = tokensCache.get<TParsedTokensResponse>(cacheKey);
    if (data) return data;

    data = await query({ token, refreshToken });
    if (!data) return null;

    tokensCache.set(cacheKey, { userId: data.userId }, DAY_SECONDS);
    return data;
  }
};

export default tokensService;
