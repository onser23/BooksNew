import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import books from "../../data/books.json";

const BookList = (props) => {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("BookDetail", { book: item });
            }}
          >
            <Text style={styles.textStyle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(books) => books.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default BookList;
