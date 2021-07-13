import React from "react";
import { mount } from "enzyme";
import { Navbar } from "./NavBar";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { LOGOUT } from "../../types/types";

describe("NavBar", () => {
  /**
   * We make a history mock for provide to de navbar the
   * history.replace() in the NavaBar component
   */
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = { user: { logged: true }, dispatch: jest.fn() };

  const wrapper = mount(
    <MemoryRouter>
      <AuthContext.Provider value={contextValue}>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    </MemoryRouter>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").exists()).toBe(true);
  });

  test("should call loggout and use history", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: LOGOUT,
    });
    expect(historyMock.replace).toHaveBeenCalledTimes(1);
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
