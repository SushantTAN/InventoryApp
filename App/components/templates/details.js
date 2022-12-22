import React from "react";
import { Text, Image } from "react-native";

import AppLayout from "../layouts/AppLayout";
import { styles } from "../../styles/detail";


const Detail = (props) => {
  const { description, image, title } = props.route.params.data;

  return (
    <AppLayout>
      {image.assets.map((item, index) => <Image
        style={[styles.image]}
        source={{ uri: item.uri }}
        key={index}
      />)}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

    </AppLayout>
  );
}

export default Detail;