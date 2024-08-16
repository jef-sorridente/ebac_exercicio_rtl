import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";
import PostComment from "..";

const moks = [{}];

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Testar a inserção de dois comentários", () => {
    render(<PostComment />);
    // adiciona o primeiro comentário
    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "Olá, sou o primeiro comentário",
      },
    });
    // clica no botao para submeter o form
    fireEvent.click(screen.getByTestId("botao"));

    // adiciona o segundo comentário
    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "Olá, sou o segundo comentário",
      },
    });
    // clica no botao para submeter o form
    fireEvent.click(screen.getByTestId("botao"));

    // expera que em tela deverá conter dois li com o data-testid
    expect(screen.getAllByTestId("comentario")).toHaveLength(2);
  });
});
