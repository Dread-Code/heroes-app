import React from "react";
import { mount } from "enzyme";
import { SearchScreen } from "./SearchScreen";
import { MemoryRouter, Route } from "react-router-dom";
import { act } from "@testing-library/react";

describe("SearchScreen", () => {
  const historyMock = {
    push: jest.fn(),
  };

  test("should match snapshoot", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");
  });

  test("should render batman and the value of the queryString input", () => {
    /**
     * Remember that initialEntries receives the arguments that you
     * are using in the query
     */
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("should render a error if doesn't fing a hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batmanadfsade"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(".alert-danger").exists()).toBe(true);
  });

  test("should call the push history", () => {
    const event = {
      preventDefault: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    // Toca llamar  porque se esta volviendo a renderizar el componente
    // al realizar los siguientes eventos
    // ! todos los eventos que hagan renderizar de nuevo nuestro componente deben ser
    // ! envuelto por act
    act(() => {
      wrapper.find("input").simulate("change", {
        target: {
          name: "search",
          value: "batman",
        },
      });
      wrapper.find("form").prop("onSubmit")(event);
    });

    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
