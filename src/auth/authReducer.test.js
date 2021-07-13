import { authReducer } from "./authReducer";
import { LOGIN, LOGOUT } from "../types/types";

describe("authReducer", () => {
  test("should return the default state", () => {
    const result = authReducer();
    expect(result).toEqual({});
  });

  test("should return a user and logged true", () => {
    const { name, logged } = authReducer(
      {},
      {
        type: LOGIN,
        payload: {
          name: "Lucas",
        },
      }
    );
    expect(name).toBe("Lucas");
    expect(logged).toBe(true);
  });

  test("should return logged false", () => {
    const { name, logged } = authReducer(
      {},
      {
        type: LOGOUT,
      }
    );
    expect(logged).toBe(false);
    expect(name).toBe(undefined);
  });
});
