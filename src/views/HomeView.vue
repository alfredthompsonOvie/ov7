<template>
	<main role="main" >
		<section class="hero grid">
			<div class="hero__contents grid__contents">
				<div class="hero__illustration">
					<img
						src="@/assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
						alt="an image of manage website viewed from a desktop"
						v-if="mobile"
					/>
					<img
						src="@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
						alt="an image of manage website viewed from a desktop"
						v-if="desktop"
					/>
					<!-- <picture>
						<source media="(min-width: 465px)" srcset="@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg" />
						<source media="(min-width: 760px)" srcset="@/assets/images/homepage/tablet/image-homepage-hero@2x.jpg" />
						<img src="@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg" alt="an image of manage website viewed from a desktop"/>
					</picture> -->
				</div>
				<div class="hero__content hero__details">
					<h1 class="heading">
						Hey, I’m Alfred Thompson Ovie and I love building beautiful websites
					</h1>

					<router-link class="cta cta__primary" to="#about">
						<span class="cta__icon"
							><img src="@/assets/images/icons/down-arrows.svg" alt=""
						/></span>
						<span class="cta__content">About Me</span>
					</router-link>
				</div>
			</div>
		</section>

		<section class="about grid" ref="about" id="about">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<!-- <picture class="avatar--js">
						<source media="(min-width: 465px)" srcset="@/assets/images/homepage/desktop/profile-1.jpg" />
						<source media="(min-width: 760px)" srcset="@/assets/images/homepage/desktop/profile-1.jpg" />
						<img src="@/assets/images/homepage/desktop/profile-1.jpg" alt="a picture of Alfred Thompson Ovie"/>
					</picture> -->
          <img src="@/assets/images/homepage/desktop/profile-1.jpg" alt="a picture of Alfred Thompson Ovie"/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading subHeading--js">About Me</h1>
					<p class="description">
						I'm a front-end developer eager to join an exciting company. My expertise includes crafting accessible HTML, applying modern CSS practices, and writing clean JavaScript code. While I favor Vue.js for development, I'm versatile and can adapt to different tools as needed. I'm currently based in Lagos, Nigeria, but I'm open to remote work and have experience in remote teams. I'm a diligent and result-driven developer, consistently striving for the best outcomes on every project. When I'm not coding, you'll find me reading, playing chess, or hitting the gym. Don't hesitate to explore my work
					</p>

					<router-link :to="{ name: 'portfolioView' }" class="cta cta__sec">
						Go to Portfolio
					</router-link>
				</div>
			</div>
		</section>

		<ContactMe />
	</main>
</template>

<script>
import ContactMe from "../components/ContactMe.vue";
import { ref, onMounted } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default {
	components: {
		ContactMe,
	},
	setup() {
		const about = ref(null);

		const mobile = ref(null);
		const desktop = ref(null);
		const windowWidth = ref(null);

		const checkScreen = () => {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value < 992) {
				mobile.value = true;
				desktop.value = false;
				return;
			}

			mobile.value = false;
			desktop.value = true;
			return;
		};

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			about,
			mobile,
			desktop,
		};
	},
};
</script>

<style lang="scss" scoped>
.hero__contents {
	margin-top: 0.5em;
}
.hero__illustration {
	text-align: center;
}
.hero__content {
	padding: 1em 0;
}
.hero__content h1 {
	font-family: var(--ff-heading);
	font-size: clamp(25px, 10vw, 40px);
	font-weight: 700;
	margin-top: 0.3em;
}
.cta__primary {
	background-color: var(--DarkBlue);
	color: #fff;
	margin-top: 1.8em;
}
.cta__primary:hover .cta__content,
.cta__primary:hover .cta__icon {
	background-color: var(--SlightlyDesaturatedCyan);
}
.cta__content {
	padding: 1em 3em;
	letter-spacing: 2px;
	line-height: 2;
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
.about {
	margin-top: 5em;
}
.about__illustration {
	text-align: center;
  img {
    max-height: 30em;
  }
}
.about__details {
	margin-top: 2em;
	border-top: 1px solid var(--LightGreyTextField);
	border-bottom: 1px solid var(--LightGreyTextField);

	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 1.5em 0;
}
.description {
	padding: 1em 0 1.2em;
}
.cta__sec {
	margin-top: 2em;
	margin-bottom: 3em;
	align-self: flex-start;
}

/* 768px */
@media (min-width: 760px) {
	.hero__contents {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: calc(100vh - 6em);
		margin-top: 0;
	}
	.hero__illustration {
		grid-row: 1/-1;
		grid-column: 1/-1;
	}
	.hero__illustration img {
		width: 100%;
		height: 100%;
	}
	.hero__content {
		grid-row: 1;
		grid-column: 1;
		align-self: end;
		background-color: var(--VeryLightGreyBG);
		padding: 2em 2em 0 0;

		max-width: 450px;
	}
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 32px);
	}
	.cta__primary {
		margin-top: 3em;
	}
	.about__contents {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: auto;
		grid-template-rows: 98vh; 
		justify-content: start;
		grid-gap: 3em;
	}
	.about__illustration {
		grid-column: 1;
		grid-row: 1;
		margin: 0;
		text-align: left;

		img {
			width: 100%;
			height: 100%;
      max-height: initial;
      object-fit: contain;
      object-fit: fill;
			object-fit: cover;
			/* object-position: left; */
			object-position:center;
			object-position: top;
      /* image-rendering:auto; */
		}
	}
	.about__content {
		border-top: 1px solid var(--LightGreyTextField);
		border-bottom: 1px solid var(--LightGreyTextField);

		display: flex;
		justify-content: space-evenly;

		flex-direction: column;
	}
	.about__details {
		margin-top: 0em;
		max-width: 330px;
	}
	.cta__sec {
		margin-top: 0em;
		margin-bottom: 1em;
		align-self: flex-start;
	}
	.subHeading {
		margin: 0;
	}
}

@media (min-width: 992px) {
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 40px);
	}
}
@media (min-width: 1200px) {
	.hero__content {
		padding: 2em 2.5em 0 0;
	}
	.about__contents {
		grid-template-columns: 1fr 1fr;
		grid-gap: 4.5em;
	}
	.about__illustration {
		text-align: center;

		/* img {
			object-position: center;
		} */

	}
}
@media (min-width: 1300px) {
	.hero__content {
		max-width: 450px;
		max-width: 550px;
	}
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 40px);
	}
}
</style>
