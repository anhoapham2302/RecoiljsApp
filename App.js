import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductList from "./component/productList";
import { RecoilRoot } from "recoil";
import CartInfo from "./component/cartInfo";

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <ProductList/>
        <CartInfo/>
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
  },
});
