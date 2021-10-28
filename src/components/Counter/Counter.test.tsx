import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  test("Deve iniciar com o valor 0", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });

  test("Deve conter a classe number no titulo", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toHaveClass("number");
  });

  test("Não deve iniciar o titulo com as classes positive ou negative", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("positive");
    expect(counterTitle).not.toHaveClass("negative");
  });

  test("Deve conter um botao incrementar ", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Incrementar/i });

    expect(btnIncrement).toBeInTheDocument();
  });

  test("Deve conter um botao incrementar com a classe btn-acrescentar", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Incrementar/i });

    expect(btnIncrement).toHaveClass("btn-acrescentar");
  });

  test("Deve conter um botao diminuir ", () => {
    render(<Counter />);

    const btnDecrement = screen.getByRole("button", { name: /Diminuir/i });

    expect(btnDecrement).toBeInTheDocument();
  });

  test("Deve conter um botao diminuir com a classe btn-diminuir", () => {
    render(<Counter />);

    const btnDecrement = screen.getByRole("button", { name: /Diminuir/i });

    expect(btnDecrement).toHaveClass("btn-diminuir");
  });

  test("Deve incrementar +1 ao clicar no botão", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Incrementar/i });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(btnIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Deve diminuir -1 ao clicar no botão", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Diminuir/i });
 
    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(btnIncrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("Deve adicionar a classe positive no titulo, quando o valor for maior do que 0", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Incrementar/i });

    expect(screen.queryByText("0")).not.toHaveClass("positive");
    userEvent.click(btnIncrement);
    expect(screen.getByText("1")).toHaveClass("positive");
  });

  test("Deve adicionar a classe negative no titulo, quando o valor for menor do que 0", () => {
    render(<Counter />);

    const btnIncrement = screen.getByRole("button", { name: /Diminuir/i });

    expect(screen.queryByText("0")).not.toHaveClass("negative");
    userEvent.click(btnIncrement);
    expect(screen.getByText("-1")).toHaveClass("negative");
  });
});
