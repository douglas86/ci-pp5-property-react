import { login, refreshTokenFail, refreshTokenPass } from "./authentication";

describe("Authentication", () => {
  refreshTokenFail();
  login();
  refreshTokenPass();
});
