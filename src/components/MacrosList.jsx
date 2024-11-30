import { Text } from "@chakra-ui/react";
export const MacrosList = ({ item }) => {
  return (
    <>
      <Text>Total Calories: {Math.round(item.calories)} Kcal</Text>
      <Text>Fat: {Math.round(item.totalNutrients.FAT.quantity)} g</Text>
      <Text>Protein: {Math.round(item.totalNutrients.PROCNT.quantity)} g</Text>
      <Text>Carbs: {Math.round(item.totalNutrients.CHOCDF.quantity)} g</Text>
      <Text>Sodium: {Math.round(item.totalNutrients.NA.quantity)} mg </Text>
      <Text>
        Cholesterol: {Math.round(item.totalNutrients.CHOLE.quantity)} mg{" "}
      </Text>
    </>
  );
};
