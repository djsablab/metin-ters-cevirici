import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonComponent from "./src/components/ButtonComponent";

const App = () => {
  const [text, setText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const reverseText = () => {
    setReversedText(text.split("").reverse().join(""));
  };

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Metin Ters Çevirici
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          type="text"
          testID="input-text"
          placeholder="Metin girin"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <ButtonComponent title="Metni Tersine Çevir" onPress={reverseText} />
      <Text testID="reversed-text">{reversedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
});
export default App;
