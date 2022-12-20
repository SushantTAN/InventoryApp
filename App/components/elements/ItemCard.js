import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../styles/list";
import CustomButton from "./CustomButton";


export default ItemCard = (props) => {
  const navigation = useNavigation();

  const handleDelete = () => { }

  const handlePress = () => {
    navigation.navigate('Detail')
  }

  return (
    <TouchableOpacity style={[styles.row, styles.itemContainer]} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=' }}
      />
      <View style={styles.itemContents}>
        <Text style={styles.itemTitle}>Title</Text>
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