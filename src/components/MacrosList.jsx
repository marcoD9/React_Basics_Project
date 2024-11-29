import { Text } from "@chakra-ui/react";
export const MacrosList = ({ item }) => {
  return (
    <>
      <Text>Total Calories: {Math.round(item.calories)}</Text>
      <Text>Fat: {Math.round(item.totalNutrients.FAT.quantity)}</Text>
      <Text>Protein: {Math.round(item.totalNutrients.PROCNT.quantity)}</Text>
      <Text>Carbs: {Math.round(item.totalNutrients.CHOCDF.quantity)}</Text>
    </>
  );
};
