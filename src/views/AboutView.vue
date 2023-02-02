<template>
	<main class="grid">
		<section class="grid__contents thankYou">
			<div class="content">
				<!-- particle js -->
				<h1 class="subHeading">Thank You!</h1>
				<p>
					Your email has been sent.
				</p>
				<p>
					We'll get back to you shortly. In the meantime, check out my work or read more about me
				</p>
				<router-link :to="{ name: 'home' }" class="cta cta__sec"
					>Go back to homepage</router-link
				>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
main {
	min-height: calc(100vh - 96px - 326px);
	@media (min-width: 760px) {
		min-height: calc(100vh - 96px - 106px);
	}
}
.thankYou {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2em;
	background-color: rgba(0, 0, 0, 0.2);
	/* z-index: 0; */
}
.content {
	position: relative;
	z-index: 99;
	max-width:450px;
	text-align: center;
	padding: 2em;
	border-radius: 1em;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
}
.subHeading {
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8));
	margin-bottom: 0.7em;
}
</style>
