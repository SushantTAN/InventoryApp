import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "../../styles/list";
import CustomButton from "../elements/CustomButton";
import ItemCard from "../elements/ItemCard";
import AppLayout from "../layouts/AppLayout";

const List = (props) => {

  const handleToAdd = () => {
    props.navigation.navigate('Create');
  }

  return (
    <AppLayout>
      <CustomButton
        title='Add Item'
        onPress={handleToAdd}
        style={{ marginBottom: 16, paddingVertical: 8, backgroundColor: '#672bab' }}
      />
      <ItemCard />
    </AppLayout>
  );
}

export default List;