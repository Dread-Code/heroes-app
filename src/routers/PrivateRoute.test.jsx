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
  });
});
