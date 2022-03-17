import React from "react";
import { View } from "react-native";

import BookList from "../components/BookList";

const BookScreen = (props) => {
  return (
    <View>
      <BookList navigation={props.navigation} />
    </View>
  );
};

export default BookScreen;
