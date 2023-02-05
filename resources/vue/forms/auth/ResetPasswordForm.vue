<template>
	
	<form id="resetPasswordForm" @submit.prevent="onSubmit">

		<p class="uk-text-center uk-margin-auto">
			Escribe tu email y te enviaremos un correo para recuperar tu cuenta.
		</p>

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
			
			<button 
				class="uk-button uk-button-primary uk-button-large uk-width-1-1"
				:disabled="disabled">
				Recuperar contraseña	
			</button>

		</div>

		<div class="uk-margin uk-text-small uk-text-center">
			
			<a href="#" uk-switcher-item="0">Regresar al login</a>

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
				email: '',
				disabled: false,
				resetPasswordFormValidator: undefined
			}

		},

		mounted() {

			this.resetPasswordFormValidator = new JSValidator('resetPasswordForm').init()

		},

		methods: {

			onSubmit() {

				if(this.resetPasswordFormValidator.status) {

					this.disabled = true;

					axios.post(route.name('password.email'), {
						_token: csrf_token,
						email: this.email
					}).then( res => {

						this.$emit('submit', {
							message: 'Se ha enviado un correo de recuperación a la cuenta ' + this.email,
							res: res
						});

					}).catch( error => {

						this.disabled = false;

						UIkit.notification({
							message: 'No hemos encontrado el email en nuestros registros',
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