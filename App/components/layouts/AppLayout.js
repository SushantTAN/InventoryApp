import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";


export default AppLayout = (props) => {

  const [orientation, setOrientation] = useState('portrait');

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      if (isPortrait()) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    });
  }, []);


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
    // justifyContent: "center",
    // alignItems: 'center',
    // width: '100%',
  },
  container: {
    width: '100%',
    padding: 16,
    maxWidth: 600,
    alignSelf: 'center'
    // flex: 1,
  },
});