// import {createStore} from 'vuex'
// import counterModule from "@/store/modules/counter.module";
// import employeeModule from "@/store/modules/employee.module";
// import usersModule from "@/store/modules/users.module";
// import mangaModule from './modules/manga.module';

// export default createStore({
//     state: {
//         counterState: counterModule.state,
//         employeeState: employeeModule.state,
//         usersState: usersModule.state,
//         mangaState: mangaModule.state
//     },
//     mutations: {},
//     actions: {},
//     modules: {
//         counterModule,
//         employeeModule,
//         usersModule,
//         mangaModule
//     },
//     getters: {
//         getCounterState: function (state) {
//             return state.counterState.counter;
//         },
//         getEmployeeState: function (state) {
//             return state.employeeState.employeeList;
//         },
//         getUsersState: function (state) {
//             return state.usersState.userList;
//         },
//         getMangaState: function (state) {
//             return state.mangaState.bookList
//         }
//     }
// })

import { createStore } from 'vuex';
import mangaModule from './module-manga';
export default createStore({
  namespaced: true,
  state: {
    mangaState:mangaModule
  },
  modules: {
    mangaModule
  },
  getters: {
    getMangaState: mangaModule.getters.getMangaState
  }
});