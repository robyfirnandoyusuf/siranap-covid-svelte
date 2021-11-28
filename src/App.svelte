<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import Results from "./pages/Results.svelte";
	import { dataApi, resApi } from './store.js';
  
	export let url = "";
	let dataValue, xDataValue;
	dataApi.subscribe(value => {
		dataValue = value;
	});

</script>
  
<Router url="{url}">
	<Route path="results" component="{Results}" />
	<Route path="/"><Home /></Route>
</Router>