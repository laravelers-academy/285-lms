<template>
	
	<div class="uk-section uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="expand: true">
		
		<div class="uk-container">
			
			<div class="uk-width-1-1 uk-grid-margin" uk-grid>

				<div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
					
					<reset-account-form 
						@submit="submitForm"/>

				</div>

			</div>

		</div>

	</div>

</template>

<script>

	import ResetAccountForm from '@forms/auth/ResetAccountForm'
	
	export default {

		components: {
			ResetAccountForm
		},

		methods: {

			submitForm(payload) {

				this.$store.dispatch('initApp');

				this.$router.push({ name: 'Site'});

				UIkit.notification({
					message: payload.message,
					status: 'success'
				});

			}

		}

	}

</script>