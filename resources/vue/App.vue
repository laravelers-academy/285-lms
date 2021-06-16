<template>
	
	<p>Hola desde Vue</p>

</template>

<script>
	
	export default {

		beforeCreate() {

			this.$store.dispatch('initApp');

		}

	}

</script>