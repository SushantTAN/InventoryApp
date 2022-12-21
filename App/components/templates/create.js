import AsyncStorage from "@react-native-community/async-storage";
import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, useWindowDimensions } from "react-native";


import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';

import { styles } from "../../styles/create";
import CustomButton from "../elements/CustomButton";
import AppLayout from "../layouts/AppLayout";

const Create = (props) => {

  const { height, width } = useWindowDimensions();

  const [formData, setFormData] = useState({
    title: '',
    image: {},
    description: '',
  });

  const onChange = (key, val) => {
    setFormData(prevState => {
      let tempData = { ...prevState };
      tempData[key] = val;
      return tempData;
    })
  }

  const selectFile = () => {
    // var options = {
    //   title: 'Select Image',
    //   customButtons: [
    //     {
    //       name: 'customOptionKey',
    //       title: 'Choose file from Custom Option'
    //     },
    //   ],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };

    // ImagePicker.  .showImagePicker(options, res => {
    //   console.log('Response = ', res);
    //   if (res.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (res.error) {
    //     console.log('ImagePicker Error: ', res.error);
    //   } else if (res.customButton) {
    //     console.log('User tapped custom button: ', res.customButton);
    //     alert(res.customButton);
    //   } else {
    //     let source = res;
    //     // this.setState({
    //     //   resourcePath: source,
    //     // });
    //     onChange("image", source);
    //   }
    // });

    let options = {
      mediaType: 'photo',
    }

    launchImageLibrary(options, (res) => {
      console.log(res)

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        let source = res;
        // this.setState({
        //   resourcePath: source,
        // });
        onChange("image", source);
      }
    })
  };

  const handleSubmit = async () => {

    try {
      let currentList = await AsyncStorage.getItem("inventoryapp_list");

      let newList = [];

      if (currentList) {
        console.log("test", currentList);
        let currentJson = await JSON.parse(currentList);
        newList = [...currentJson, formData];
      } else {
        newList = [formData];
      }

      await AsyncStorage.setItem("inventoryapp_list", JSON.stringify(newList));
      console.log("end", newList);

      props.navigation.goBack();
    } catch (err) {
      console.log("error", err)
    }
  }

  return (
    <AppLayout>
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChange("title", val)}
          value={formData.title}
          placeholder="Title"
        />

        <TouchableOpacity style={styles.imagePicker} onPress={selectFile}>
          <Text>Pick Image</Text>
        </TouchableOpacity>

        {formData?.image?.assets && formData.image.assets.map((item, index) => <Image
          style={[styles.image, { width: width - 32 }]}
          source={{ uri: item.uri }}
          key={index}
        />)}

        <TextInput
          style={styles.input}
          onChangeText={(val) => onChange("description", val)}
          value={formData.description}
          placeholder="Description"
        />

        <CustomButton
          title="Create Item"
          style={{ marginBottom: 16, paddingVertical: 8, backgroundColor: '#672bab' }}
          onPress={handleSubmit}
        />
      </ScrollView>
    </AppLayout>
  );
}

export default Create;