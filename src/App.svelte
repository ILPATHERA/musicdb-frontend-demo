<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<!-- This part is always displayed -->
<div class= "navigation">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="index.html"><img class= "logo" src="images/logo_small.png" alt="logo" ></a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#/kalorienrechner">Kalorienrechner</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/gewichte">Gewichtstracker</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/ernaehrungsbedarfe">Ernährungsbedarf</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/mahlzeiten">Mahlzeiten</a>
					</li>
												
				</ul>
			</div>
		</div>
	</nav>

</div>

<div class="container mt-3">
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>

<style>

	.logo{
		width: 300px;
	}
</style>