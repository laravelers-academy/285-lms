<template>
	
	<!-- AUTH MODAL-->
	<div id="authModal" uk-modal>

	    <div class="uk-modal-dialog uk-modal-body">
	    
	        <button class="uk-modal-close-default" type="button" uk-close></button>
	    
	        <ul 
	        	class="uk-tab uk-flex-center"
	        	uk-switcher="animation: uk-animation-fade">
	        	
	        	<!-- LOGIN -->
	        	<li>
	        		
	        		<a href="#">Acceso</a>

	        	</li>

	        	<!-- REGISTER -->
	        	<li>
	        		
	        		<a href="#">Registro</a>

	        	</li>

	        	<!-- FORGOT PASSWORD-->
	        	<li class="uk-hidden">
	        		
	        		<a href="#">Recuperar la contraseña</a>

	        	</li>

	        </ul>

	        <ul class="uk-switcher uk-margin">
	        	
	        	<!-- LOGIN -->
	        	<li>

	        		<login-form 
	        			@submit="submitForm"/>

	        	</li>

	        	<!-- REGISTER -->
	        	<li>
	        		
	        		<register-form 
	        			@submit="submitForm"/>

	        	</li>

	        	<!-- FORGOT PASSWORD -->
	        	<li>
	        		
	        		<reset-password-form 
	        			@submit="submitForm"/>

	        	</li>

	        </ul>

	    </div>

	</div>

</template>

<script>
	
	import LoginForm from '@forms/auth/LoginForm'
	import RegisterForm from '@forms/auth/RegisterForm'
	import ResetPasswordForm from '@forms/auth/ResetPasswordForm'
	
	export default {

		components: {

			LoginForm,
			RegisterForm,
			ResetPasswordForm,

		},

		methods: {

			submitForm(payload) {

				this.$store.dispatch('initApp');

				UIkit.notification({
					message: payload.message,
					status: 'success'
				});

				UIkit.modal('#authModal').hide();

			}

		}

	}

</script>