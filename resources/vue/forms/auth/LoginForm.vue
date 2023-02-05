<template>
	
	<form id="loginForm" @submit.prevent="onSubmit"> 

		<div class="uk-margin">
			
			<div class="uk-inline uk-width-1-1">

				<span class="uk-form-icon" uk-icon="icon: mail"></span>
				
				<input 
					class="uk-input uk-form-large uk-border-rounded jsValidator" 
					type="email" 
					name="email"
					placeholder="Escribe tu email"
					data-validators="required email"
					v-model="email">

			</div>

		</div>

		<div class="uk-margin">
			
			<div class="uk-inline uk-width-1-1">

				<span class="uk-form-icon" uk-icon="icon: lock"></span>
				
				<input 
					class="uk-input uk-form-large uk-border-rounded jsValidator" 
					type="password" 
					name="password"
					placeholder="Escribe tu contraseña"
					data-validators="required"
					v-model="password">

			</div>

		</div>

		<div class="uk-margin uk-text-right uk-text-small">
			
			<a href="#" uk-switcher-item="2">
				
				¿Olvidaste tu contraseña?

			</a>

		</div>

		<div class="uk-margin">
			
			<button 
				class="uk-button uk-button-primary uk-button-large uk-width-1-1"
				:disabled="disabled">
				Entrar	
			</button>

		</div>

		<div class="uk-margin uk-text-small uk-text-center">
			
			¿No tienes cuenta? <a href="#" uk-switcher-item="1">Crear cuenta</a>

		</div>

	</form>

</template>

<script>
	
	export default {

		emits: {

			submit: (payload) => {

				return payload;

			}

		},

		data() {

			return {
				email: "",
				password: "",
				disabled: false,
				loginFormValidator: undefined
			}

		},

		mounted() {

			this.loginFormValidator = new JSValidator('loginForm').init()

		},

		methods: {

			onSubmit()
			{

				if(this.loginFormValidator.status){

					this.disabled = true;

					axios.post('/login', {
						_token: csrf_token,
						email: this.email,
						password: this.password
					}).then( res => {

						this.$emit('submit', {

							message: 'Inicio de sesión exitoso',

							res: res

						});

					}).catch( error => {

						console.log(error.response);

						this.disabled = false;

						UIkit.notification({
							message: 'Ha ocurrido un error al procesar el formulario',
							status: 'danger'
						});

					});

				} else {

					this.disabled = false;
					
					UIkit.notification({
						message: 'Error de validación',
						status: 'danger'
					});

				}

			}

		}
		
	}

</script>