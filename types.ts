import { NavigationProp, RouteProp } from '@react-navigation/native';

type NavigationParams = {
  Home: undefined;
  Cart: undefined;
  ProductDetails: { productId: string };
};

type AppNavigation = NavigationProp<NavigationParams>;

type AppRoute = RouteProp<NavigationParams, keyof NavigationParams>;

export type NavigationFunction = {
  navigate: AppNavigation['navigate'];
  goBack: AppNavigation['goBack'];
};

export type NavigationProps = {
  navigation: AppNavigation;
  route: AppRoute;
} & NavigationFunction;

