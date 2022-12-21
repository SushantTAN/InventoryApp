import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Fragment } from "react/cjs/react.production.min";

import { styles } from "../../styles/list";
import CustomButton from "../elements/CustomButton";
import ItemCard from "../elements/ItemCard";
import AppLayout from "../layouts/AppLayout";


export const ListContext = React.createContext();

const List = (props) => {

  const [list, setList] = useState([]);

  const handleToAdd = () => {
    props.navigation.navigate('Create');
  }

  const fetchList = async () => {
    try {
      let currentList = await AsyncStorage.getItem("inventoryapp_list");
      if (currentList) {

        let currentJson = await JSON.parse(currentList);
        setList(currentJson);
      }

    } catch (err) {
      console.log("error", err);
    }
  }

  useFocusEffect(
    React.useCallback(() => {

      fetchList();
    }, [props.route])
  );

  return (
    <ListContext.Provider value={{ list, setList }}>
      <AppLayout>
        <CustomButton
          title='Add Item'
          onPress={handleToAdd}
          style={{ marginBottom: 16, paddingVertical: 8, backgroundColor: '#672bab' }}
        />
        {
          list.map((item, index) => <Fragment key={index}>
            <ItemCard data={item} />
          </Fragment>)
        }

      </AppLayout>
    </ListContext.Provider>
  );
}

export default List;