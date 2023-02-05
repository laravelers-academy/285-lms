<template>
	
	<form id="resetAccountForm" @submit.prevent="onSubmit">
		
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
				
				Restablecer contraseña

			</button>

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
				email: this.$route.query.email,
				password: '',
				password_confirmation: '',
				token: this.$route.params.token,
				disabled: false,
				resetAccountFormValidator: undefined,
			}

		},

		mounted() {



			this.resetAccountFormValidator = new JSValidator('resetAccountForm').init();

		},

		methods: {

			onSubmit() {

				if(this.resetAccountFormValidator.status) {

					this.disabled = true;

					axios.post(route.name('password.update'), {
						_token: csrf_token,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation,
						token: this.token
					}).then( res => {

						this.$emit('submit', {
							message: 'Se ha restablecido la contraseña',
							res: res
						});

					}).catch( error => {

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