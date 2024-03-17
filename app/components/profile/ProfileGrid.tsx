import React from 'react';
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';

const postUri =
  'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg';
// Dummy data for demonstration purposes
const posts = [
  {id: '1', imageUri: postUri},
  {id: '2', imageUri: postUri},
  {id: '3', imageUri: postUri},
  {id: '4', imageUri: postUri},
  {id: '5', imageUri: postUri},
  {id: '6', imageUri: postUri},
  {id: '7', imageUri: postUri},
  {id: '8', imageUri: postUri},
  {id: '9', imageUri: postUri},
  {id: '10', imageUri: postUri},
  {id: '11', imageUri: postUri},
  {id: '12', imageUri: postUri},
  {id: '13', imageUri: postUri},
  {id: '14', imageUri: postUri},
  {id: '15', imageUri: postUri},
  {id: '16', imageUri: postUri},
  {id: '17', imageUri: postUri},
  {id: '18', imageUri: postUri},
  {id: '19', imageUri: postUri},
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns - 6;

const ProfileGrid = () => {
  // Function to render each item
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns} // Set the number of columns
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 2,
  },
  itemContainer: {
    margin: 4,
    width: imageSize,
    height: imageSize,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileGrid;
