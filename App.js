import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import createRematchPersist, { getPersistor } from '@rematch/persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistGate } from 'redux-persist/es/integration/react'

import * as models from './components/models'
import Counter from './components/Counter'

const persistPlugin = createRematchPersist({
  whitelist: ['count'],
  storage: AsyncStorage,
  key: "test",
  version: 1,
})

const store = init({
  models,
  plugins: [persistPlugin]
});

const persistor = getPersistor()

export default class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </PersistGate>
    );
  }
}