<template>
	<main>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="mobile"
					/>
					<img
						src="@/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="tablet"
					/>
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="desktop"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Manage</h1>
					<p class="description">
						This project required me to build a fully responsive landing page to
						the designs provided. I used HTML5, along with CSS Grid and
						JavaScript for the areas that required interactivity, such as the
						testimonial slider.
					</p>

					<router-link :to="{ name: 'projectDetailsView', params: { id: 'manage'} }" class="cta cta__sec">
						<!-- <span class="cta__content">Go to Portfolio</span> -->
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="mobile"
						/>

					<img
						src="@/assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="tablet"
						/>

						<img
						src="@/assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="desktop"
						/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Bookmark</h1>
					<p class="description">
						This project required me to build a fully responsive landing page to
						the designs provided. I used HTML5, along with CSS Grid and
						JavaScript for the areas that required interactivity, such as the
						features section.
					</p>

					<router-link :to="{ name: 'projectDetailsView', params: { id: 'bookmark'} }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="mobile"
					/>
					<img
						src="@/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="tablet"
					/>
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="desktop"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Insure</h1>
					<p class="description">
						This was a small project which mostly consisted of HTML and CSS. I
						built a fully-responsive landing page. The only JavaScript this
						project required was to enable the toggling of the mobile
						navigation.
					</p>

					<router-link :to="{ name: 'projectDetailsView', params: { id: 'insure'} }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg"
						alt=""
						v-if="mobile"
					/>
					<img
						src="@/assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg"
						alt=""
						v-if="tablet"
					/>
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"
						alt=""
						v-if="desktop"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Fylo</h1>
					<p class="description">
						This project was built in pure HTML and CSS. I had mobile and
						desktop designs to work to and built it so that it was
						fully-responsive. I took a mobile-first approach and used modern CSS
						like Flexbox and Grid for layout purposes.
					</p>

					<router-link :to="{ name: 'projectDetailsView', params: { id: 'fylo'} }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<!-- <img
						src="@/assets/images/portfolio/mobile/image-portfolio-space-tourism.jpg"
						alt=""
						v-if="mobile"
					/>
					<img
						src="@/assets/images/portfolio/tablet/image-portfolio-space-tourism.jpg"
						alt=""
						v-if="tablet"
					/> -->
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-space-tourism.jpg"
						alt=""
						/>
						<!-- v-if="desktop" -->
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Space Tourism</h1>
					<p class="description">
						This project was built in pure HTML and CSS. I had mobile and
						desktop designs to work to and built it so that it was
						fully-responsive. I took a mobile-first approach and used modern CSS
						like Flexbox and Grid for layout purposes.
					</p>

					<router-link :to="{ name: 'projectDetailsView', params: { id: 'space-tourism'} }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>

		<ContactMe />
	</main>
</template>

<script>
import { ref, onMounted } from "vue";
import ContactMe from "../../components/ContactMe.vue";
export default {
	name: "portfolioView",
	components: {
		ContactMe
	},
	setup() {
		const mobile = ref(null);
		const tablet = ref(null);
		const desktop = ref(null);
		const windowWidth = ref(null);

		const checkScreen = () => {
			windowWidth.value = window.innerWidth;
			// mobile
			if (windowWidth.value < 481) {
				mobile.value = true;
				tablet.value = false;
				desktop.value = false;
				// mobileMenu.value = true;
				return;
			}
			// tablet
			if (windowWidth.value < 768) {
				mobile.value = false;
				tablet.value = true;
				desktop.value = false;
				return;
			}
			// desktop
			mobile.value = false;
			tablet.value = false;
			desktop.value = true;
			return;
		};

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			mobile,
			tablet,
			desktop,
		};
	},
};
</script>

<style lang="scss" scoped>
.about {
	/* margin-top: 5em; */
}
.about__illustration {
	text-align: center;
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

@media (min-width: 768px) {
	.about + .about {
		margin-top: 6em;
	}
	.about__contents {
		/* display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto; */
		display: flex;
		flex-direction: row;
		grid-gap: 3em;
	}
	.about:nth-child(even) .about__contents {
		flex-direction: row-reverse;
		/* background-color: red; */
	}
	.about__illustration {
		/* grid-column: 1;
		grid-row: 1; */
		margin: 0;
		flex: 1;
		max-width: 500px;
		overflow: hidden;

		img {
			height: 100%;
			object-fit: contain;
		}
	}
	.about__content {
		flex: 2;
		border-top: 1px solid var(--LightGreyTextField);
		border-bottom: 1px solid var(--LightGreyTextField);

		/* display: flex; */
		justify-content: center;
		/* flex-direction: column; */
	}
	.about__details {
		margin-top: 0em;
		max-width: 330px;
		font-size: 15px;
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

@media (min-width: 1200px) {
	.about + .about {
		margin-top: 4em;
	}
	.about__contents {
		grid-gap: 6em;
	}
	.about__illustration {
		max-width: 550px;
	}
}
</style>
