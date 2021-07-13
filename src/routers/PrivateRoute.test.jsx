import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "./PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("PrivateRoute", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  /**
   * !Mocking the local storage
   *
   */
  Storage.prototype.setItem = jest.fn();

  test("should return the component if is auth", () => {
    /**
     * The MemoryRouter is a HOC that help us
     * mock the HOC Router
     */
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastpath", "/marvel");
  });

  test("should block the component if is nor auth", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.html()).toBe("");
  });
});
