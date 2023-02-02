<template>
	<AppNav />

	<RouterView v-slot="{ Component }">
		<transition name="slide" mode="out-in">
			<component :is="Component"></component>
		</transition>
	</RouterView>

	<AppFooter />
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	name: "App",
	components: {
		AppNav,
		AppFooter,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.slide-enter-from {
	opacity: 0;
	transform: translateX(-100px);
}
.slide-enter-active {
	transition: all 0.85s ease;
} 
.slide-leave-active, .slide-move {
	transition: all 0.25s ease;
} 
.slide-leave-to {
	opacity: 0;
	transform: scale(0.95);
	transform-origin: center;
}

</style>
