import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
  },

  image: {
    width: 200,
    height: 88,
    flex: 0.45,
    borderRadius: 16,
    marginRight: 12
  },

  itemContents: {
    flex: 0.55,
    justifyContent: 'space-between',
  },

  itemTitle: {
    color: 'black',
    fontSize: 20,
  },
  itemContainer: {
    marginBottom: 16,
  }

});