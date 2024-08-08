import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { enableFreeze } from 'react-native-screens';
import { QueryClientProvider } from '@tanstack/react-query';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import Navigation from './navigation';
import queryClient from './services/query-client';
import { Boundary } from './components/boundary';
import { ToasterProvider, Toaster } from '~/components/kit';
import '~/services/i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store';

enableFreeze(true);

function App() {
  return (
    
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Boundary>
                <SafeAreaProvider>
                  <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
                    <ToasterProvider>
                      <Navigation />
                      <Toaster />
                    </ToasterProvider>
                  </SafeAreaView>
                </SafeAreaProvider>
              </Boundary>
            </GestureHandlerRootView>
          </Provider>
        </QueryClientProvider>
      </KeyboardProvider>
    
  );
}

export default App;
