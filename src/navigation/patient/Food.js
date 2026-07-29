import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostFoodScreen from "../../components/patient/PostFoodScreen";
import FoodCameraScreen from "../../components/patient/FoodCameraScreen";
import FoodReviewScreen from "../../components/patient/FoodReviewScreen";

const Stack = createNativeStackNavigator();

export default function Food() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoodPrompt" component={PostFoodScreen} />
      <Stack.Screen
        name="FoodCamera"
        component={FoodCameraScreen}
        options={{ animation: "fade" }}
      />
      <Stack.Screen name="FoodReview" component={FoodReviewScreen} />
    </Stack.Navigator>
  );
}
