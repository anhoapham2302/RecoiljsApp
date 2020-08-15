import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRecoilValue, useRecoilState } from "recoil";
import { productListState } from "../state/productListState";
import { cartState, addToCart } from "../state/cardState";

export default function ProductList() {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product);

        setCart(newCart);
    }
  return (
    <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product List</Text>
      {productList.map((product) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text>
              {product.title} - {product.price}
            </Text>
            <TouchableOpacity style = {{marginLeft: 15}} onPress={() => handleAddToCart(product)}>
                <Text style={{color: 'blue'}}>Add</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({

});
