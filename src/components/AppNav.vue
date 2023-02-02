<template>
	<header class="grid">
		<nav class="grid__contents">
			<!-- branding -->
			<img src="@/assets/images/logo.svg" alt="site logo" />
			<!-- hamburger menu -->
			<div class="hamburger" v-if="mobileMenu">
				<transition name="fade" mode="out-in">
					<button v-if="!showMenu" @click.prevent="showMenu = !showMenu">
						<img src="@/assets/images/icons/hamburger.svg" alt="open menu" />
					</button>
	
					<button v-else @click.prevent="showMenu = !showMenu">
						<img src="@/assets/images/icons/close.svg" alt="open menu" />
					</button>
				</transition>
			</div>
			<!-- mobile nav -->
			<template v-if="mobileMenu">
				<Transition
					:css="false"
					@before-enter="beforeEnter"
					@enter="enter"
					@leave="leave"
				>
					<ul class="mobileNav" v-if="showMenu">
						<li @click.prevent="showMenu = !showMenu">
							<AppLink :to="{ name: 'home' }">Home</AppLink>
						</li>
						<li @click.prevent="showMenu = !showMenu">
							<AppLink :to="{ name: 'portfolioView' }">Portfolio</AppLink>
						</li>
						<li @click.prevent="showMenu = !showMenu">
							<AppLink :to="{ name: 'ContactView' }">Contact Me</AppLink>
						</li>
					</ul>
				</Transition>
			</template>
			<!-- desktop nav -->
			<ul class="mainMenu" v-if="!mobileMenu">
				<li>
					<AppLink :to="{ name: 'home' }">Home</AppLink>
				</li>
				<li>
					<AppLink :to="{ name: 'portfolioView' }">Portfolio</AppLink>
				</li>
				<li>
					<AppLink :to="{ name: 'ContactView' }">Contact Me</AppLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

export default {
	setup() {
		const showMenu = ref(false);
		const mobileNav = ref(null);
		const mobileMenu = ref(null);
		const windowWidth = ref(null);

		const checkScreen = () => {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value < 768) {
				mobileNav.value = true;
        mobileMenu.value = true;
        return;
      }
      
      mobileNav.value = false;
      mobileMenu.value = false;
      showMenu.value = false;
      return;
    };
    onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		const beforeEnter = (el) => {
			const li = [...el.children];

			gsap.set(el, {
				clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
			});
			gsap.set(li, {
				autoAlpha: 0.01,
				y: 20,
			});
		};
		const enter = (el, done) => {
			const tl = gsap.timeline();
			const li = [...el.children];

			tl.to(el, {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				ease: "expo",
			}).to(li, {
				autoAlpha: 1,
				y: 0,
				stagger: 0.2,
				ease: "back",
				onComplete: done,
			});
		};
		const leave = (el, done) => {
			const tl = gsap.timeline();

			tl.to(el, {
				rotateY: "90deg",
				transformOrigin: "right",
				ease: "circ",
				onComplete: done,
				duration: .2,
			});
		};
		return {
			showMenu,
			mobileMenu,
			beforeEnter,
			enter,
			leave,
		};
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.2s linear;
}

nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	/* border: 1px solid; */
	padding: 2em 0em;

}
.mobileNav {
	position: absolute;
	top: 4.5em;
	right: 1em;
	background-color: var(--GrayishDarkBlue);
	background-color: #33323d;

	padding: 2em .3em;
	text-align: center;


	li + li {
		margin-top: 1em;
	}
	a {
		color: #fff;
		/* border: 1px solid; */
		display: block;
		padding: .5em 3em;
	}
}

.mainMenu {
	display: flex;
	gap: 1em;
	a {
	color: var(--GrayishDarkBlue);
	transition: all .3s linear;
}
a.router-link-active {
	color: var(--SlightlyDesaturatedCyan);
}
}

</style>
