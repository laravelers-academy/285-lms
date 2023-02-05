<template>
	
	<form id="registerForm" @submit.prevent="onSubmit">

		<div class="uk-margin">
			
			<div class="uk-inline uk-width-1-1">

				<span class="uk-form-icon" uk-icon="icon: user"></span>
				
				<input 
					class="uk-input uk-form-large uk-border-rounded jsValidator" 
					type="text" 
					name="name"
					placeholder="Escribe tu nombre"
					data-validators="required length"
					data-min_length="3"
					data-max_length="255"
					v-model="name">

			</div>

		</div>

		<div class="uk-margin">
			
			<div class="uk-inline uk-width-1-1">

				<span class="uk-form-icon" uk-icon="icon: mail"></span>
				
				<input 
					class="uk-input uk-form-large uk-border-rounded jsValidator" 
					type="text" 
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
					data-validators="required length"
					data-min_length="8"
					v-model="password">

			</div>

		</div>

		<div class="uk-margin">
			
			<div class="uk-inline uk-width-1-1">
				
				<span class="uk-form-icon" uk-icon="icon: lock"></span>

				<input 
					class="uk-input uk-form-large uk-border-rounded jsValidator" 
					type="password" 
					name="password_confirmation"
					placeholder="Confirmar contraseña"
					data-validators="required password_confirmation"
					v-model="password_confirmation">

			</div>

		</div>

		<div class="uk-margin">
			
			<button 
				class="uk-button uk-button-primary uk-button-large uk-width-1-1"
				:disabled="disabled">
				Registrarme	
			</button>

		</div>

		<div class="uk-margin uk-text-small uk-text-center">
			
			¿Ya tienes cuenta? <a href="#" uk-switcher-item="0">Entrar</a>

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
				name: '',
				email: '',
				password: '',
				password_confirmation: '',
				disabled: false,
				registerFormValidator: undefined,
			}

		},

		mounted() {

			this.registerFormValidator = new JSValidator('registerForm').init();

		},

		methods: {

			onSubmit() {

				if(this.registerFormValidator.status) {

					this.disabled = true;

					axios.post('/register', {
						_token: csrf_token,
						name: this.name,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation,
					}).then( res => {

						this.$emit('submit', {
							message: 'Cuenta creada exitosamente',
							res: res
						});

					}).catch( error => {

						this.disabled = false;

						UIkit.notification({
							message: 'Ha ocurrido un error inesperado',
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