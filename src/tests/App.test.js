import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../../App";

describe("Text reversal app", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    expect(getByPlaceholderText("Metin girin")).toBeTruthy();
    expect(getByText("Metni Tersine Çevir")).toBeTruthy();
  });

  it("reverses text correctly", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const button = getByText("Metni Tersine Çevir");

    // input'a metin yazma ve butona tıklama
    fireEvent.changeText(input, "hello");
    fireEvent.press(button);

    // Tersine çevrilen metni kontrol etme
    const reversedText = getByTestId("reversed-text");
    expect(reversedText.props.children).toBe("olleh");
  });

  it("handles empty input gracefully", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const button = getByText("Metni Tersine Çevir");

    // Boş bir metin girme ve butona tıklama
    fireEvent.changeText(input, "");
    fireEvent.press(button);

    // Ters çevrilmiş metnin boş olduğunu kontrol etme
    const reversedText = getByTestId("reversed-text");
    expect(reversedText.props.children).toBe(""); // Boş bir metin döndürmelidir
  });
});
