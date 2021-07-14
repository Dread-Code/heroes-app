import React from "react";
import { mount } from "enzyme";
import { HeroScreen } from "./HeroScreen";
import { MemoryRouter, Route } from "react-router-dom";

describe("HeroScreen", () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("should match snapshoot if there isn't URL arguments", () => {
    const wrapper = mount(
      /**
       * initialEntries
       * Es una propiedad que no ayuda a pasarle argumentos a nuestra ruta
       *  */
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should render a hero if the parameter it`s find ", () => {
    const wrapper = mount(
      /**
       * Es una propiedad que no ayuda a pasarle argumentos a nuestra ruta
       * AUn asi neceitamos con el useparams obtener el id al cual hace referencia
       * en la linea 6 del componente, y para esto nosotros podemos simular por
       * medio de HOC Route esta query que va a obtener
       *  */
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find(".row").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test("should return the last screen with push", () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.goBack).toHaveBeenCalledTimes(0);
  });

  test("should go back", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalledTimes(1);
  });

  test("should call redirect if the hero doesn't exist", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider123412341234"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
