import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import { styles } from "../../styles/detail";
import AppLayout from "../layouts/AppLayout";

const Detail = (props) => {
  const { description, image, title } = props.route.params.data;
  const { height, width } = useWindowDimensions();

  return (
    <AppLayout>
      {image.assets.map((item, index) => <Image
        style={[styles.image, { width: width - 32 }]}
        source={{ uri: item.uri }}
        key={index}
      />)}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

    </AppLayout>
  );
}

export default Detail;