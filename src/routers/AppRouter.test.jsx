import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AuthContext } from "../auth/AuthContext";

describe("AppRouter", () => {
  const contextValue = { user: { logged: false }, dispatch: jest.fn() };

  test("should show the login if is not auth", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the marvel component if is auth", () => {
    const contextValue = {
      user: { logged: true, name: "Lucas" },
      dispatch: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
