<template>
	<section class="contact">
		<div class="contact__contents">
			<h2 class="subHeading">Interested in doing a project together?</h2>
			<span class="line"></span>
			<router-link :to="{ name: 'ContactView' }" class="cta cta__sec">
				Contact Me
			</router-link>
		</div>
	</section>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.contact {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;
	margin: 7em 0 5em;
	overflow: hidden;
}
.contact__contents {
	grid-row: 1;
	grid-column: 2;
	text-align: center;
}
.subHeading {
	max-width: 320px;
	margin-inline: auto;
	margin-bottom: 0.6em;
}

@media (min-width: 550px) {
	.subHeading {
		max-width: 330px;
	}
}

@media (min-width: 760px) {
  .contact {
	margin: 0;
}
	.contact__contents {
		display: flex;
		align-items: center;
		gap: 2em;
		margin: 6em 0;
	}
	.subHeading {
		margin-bottom: 0;
    text-align: left;
	}
	.line {
		background-color: var(--LightGreyTextField);
		width: 100%;
		width: 50%;
		height: 2px;
		display: inline-flex;
	}
	.cta__sec {
		flex: 2;
		display: block;
		min-width: 15em;
		margin-top: 0;
	}
}
</style>
