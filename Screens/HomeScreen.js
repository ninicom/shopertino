import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';
const categorySlider =()=> {
  return(
    <View style={styles.ItemCategorySlider}>
      hello
    </View>
  );
}
const HomeScreen =()=> {
  return (
    <ScrollView style={{backgroundColor: 'red', flex: 1}}>
      <View style={{height: 38, backgroundColor: 'white',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <MaterialCommunityIcons name='menu' color={'4A4A4A'} size={25} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Shopertino</Text></View>
        <MaterialCommunityIcons name='shopping' color={'4A4A4A'} size={25} />
      </View>
      <ScrollView style={styles.CategorySlider}>
        {categorySlider()}
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  CategorySlider: {
    marginTop:10,
  },
  ItemCategorySlider: {
    width: 141,
    height: 44,
    backgroundColor: 'blue',
    borderRadius: 10,
  }
})
export default HomeScreen;