import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, TouchableOpacity, View, Text, useWindowDimensions } from "react-native";
import { styles } from "../../styles/list";
import { ListContext } from "../templates/list";
import CustomButton from "./CustomButton";


export default ItemCard = (props) => {

  const { description, image, title } = props.data;
  const { height, width } = useWindowDimensions();

  const listContext = useContext(ListContext);

  const navigation = useNavigation();

  const handleDelete = async () => {

    try {

      let currentList = await AsyncStorage.getItem("inventoryapp_list");
      if (currentList) {

        let currentJson = await JSON.parse(currentList);
        let itemIndex = currentJson.findIndex(object => {
          return object.title === title && object.description === description
        });

        if (itemIndex > 0) {
          const removedItem = currentJson.splice(itemIndex, itemIndex);
        } else if (itemIndex === 0) {
          currentJson.shift();
        }

        await AsyncStorage.setItem("inventoryapp_list", JSON.stringify(currentJson));
        listContext.setList(currentJson);
      }

    } catch (err) {
      console.log("err", err);
    }
  }

  const handlePress = () => {
    navigation.navigate('Detail', { data: props.data, title })
  }

  return (
    <TouchableOpacity style={[styles.row, styles.itemContainer]} onPress={handlePress}>
      {image.assets.map((item, index) => <Image
        style={[styles.image, { width: width - 32 }]}
        source={{ uri: item.uri }}
        key={index}
      />)}
      <View style={styles.itemContents}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={[styles.row]}>
          <CustomButton
            title="Delete"
            onPress={handleDelete}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}