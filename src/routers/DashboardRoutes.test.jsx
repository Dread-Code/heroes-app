import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { AuthContext } from "../auth/AuthContext";

describe("DashboardRoutes", () => {
  const contextValue = {
    user: { logged: true, name: "Lucas" },
    dispatch: jest.fn(),
  };
  test("should march snapshoot", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
