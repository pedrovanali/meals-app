import React, { FC } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Meal } from '../models/meal';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MealItem: FC<{
  title: string;
  onSelectMeal: () => void;
  duration: number;
  complexity: string;
  affordability: string;
  image: string;
}> = ({ title, onSelectMeal, duration, complexity, affordability, image }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration}m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '95%',
    margin: '2.5%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  }
});