import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BookDetailScreen = ({ route }) => {
  const bookName = route.params.book.title;

  const bookAuthor = route.params.book.author;

  return (
    <View>
      <Text>
        {bookName} - {bookAuthor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default BookDetailScreen;
