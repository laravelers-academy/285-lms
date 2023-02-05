<template>
	
	<div id="AppWrapper">
		
		<router-view></router-view>

	</div>

</template>

<script>
	
	export default {

		beforeCreate() {

			this.$store.dispatch('initApp');

		}

	}

</script>