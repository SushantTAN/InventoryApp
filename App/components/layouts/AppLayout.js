import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";


export default AppLayout = (props) => {
  return <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      {props.children}
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {

    padding: 16,

  },
});