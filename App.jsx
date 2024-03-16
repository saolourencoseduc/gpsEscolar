import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/router/app.routes';
import RootRoutes from './src/router';


export default function App() {
  return (

    <NavigationContainer>
        <RootRoutes/>
    </NavigationContainer>

  );
}
