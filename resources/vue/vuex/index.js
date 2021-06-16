import { createStore } from 'vuex'

const store = createStore({

	state() {

		return {

			authUser: undefined,

		}

	},

	mutations: {

		setAuthUser(state, user) {

			state.authUser = user;

		}

	},

	actions: {

		initApp() {

			axios.get('/sanctum/csrf-cookie').then(response => {
			    
				axios.get(route.name('get.auth.user')).then( res => {

					if( res.data.user ) {

						this.commit('setAuthUser', res.data.user);

					} else {

						this.commit('setAuthUser', null);

					}

				}).catch( error => {

					this.commit('setAuthUser', null);

					console.log(error.response);

				});

			});

		}

	}

});

export default store;