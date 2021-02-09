import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducers'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()


const modulesFiles = require["context"]("./modules", true, /\.ts$/);
const modules = modulesFiles.keys().reduce((modules: any, modulePath: any) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore(Reducer, applyMiddleware(sagaMiddleware))

Object.keys(modules).forEach(key => {
  sagaMiddleware.run(modules[key])
})


export default store
