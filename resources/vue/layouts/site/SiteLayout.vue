<template>
	
	<div id="SiteLayoutWrapper">
		
		<!-- NAVBAR -->
		<nav class="uk-navbar-container">

			<div class="uk-container uk-navbar-container" uk-navbar>
				
				<div class="uk-navbar-left">

			        <ul class="uk-navbar-nav">
			            <li class="uk-active"><a href="#">Active</a></li>
			            <li>
			                <a href="#">Parent</a>
			                <div class="uk-navbar-dropdown">
			                    <ul class="uk-nav uk-navbar-dropdown-nav">
			                        <li class="uk-active"><a href="#">Active</a></li>
			                        <li><a href="#">Item</a></li>
			                        <li><a href="#">Item</a></li>
			                    </ul>
			                </div>
			            </li>
			            <li><a href="#">Item</a></li>
			        </ul>

			    </div>

			    <div class="uk-navbar-right">

			        <ul class="uk-navbar-nav">
			            <li class="uk-active"><a href="#">Active</a></li>
			            <li>
			                <a href="#">Parent</a>
			                <div class="uk-navbar-dropdown">
			                    <ul class="uk-nav uk-navbar-dropdown-nav">
			                        <li class="uk-active"><a href="#">Active</a></li>
			                        <li><a href="#">Item</a></li>
			                        <li><a href="#">Item</a></li>
			                    </ul>
			                </div>
			            </li>
			            
			            <li>

			            	<a 
			            		class="uk-button uk-button-primary uk-text-bold uk-text-white" 
			            		href="#"
			            		uk-toggle="target: #authModal">

			            		Iniciar Sesión

			            	</a>

			            </li>

			        </ul>

			    </div>

			</div>

		</nav>

		<router-view></router-view>

		<auth-modal />

	</div>

</template>

<script>

	import AuthModal from '@components/modals/AuthModal'
	
	export default {

		components: {

			AuthModal

		}

	}

</script>