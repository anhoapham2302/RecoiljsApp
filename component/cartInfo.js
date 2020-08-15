import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../state/cardState";

export default function CartInfo() {
  const cart = useRecoilValue(cartState);
    const total = useRecoilValue(cartTotal);
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart Info</Text>

      {cart.map((item) => {
        return (
          <Text>
            {item.product.title}: {item.quantity}
          </Text>
        );
      })}
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Total</Text>
    <Text>{total}: VND</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
