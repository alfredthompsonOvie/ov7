<template>
	<footer>
		<section class="footer__contents">
			<img src="@/assets/images/logo.svg" alt="site logo" class="branding__footer" />
			<ul class="nav__list">
				<li>
					<AppLink :to="{ name: 'home' }" class="footerNav__link">Home</AppLink>
				</li>
				<li>
					<AppLink :to="{ name: 'portfolioView' }" class="footerNav__link">Portfolio</AppLink>
				</li>
				<li>
					<AppLink :to="{ name: 'ContactView' }" class="footerNav__link">Contact Me</AppLink>
				</li>
			</ul>
			<ul class="social__list">
				<li>
					<AppLink to="https://github.com/alfredthompsonOvie">
						<img src="@/assets/images/icons/github.svg" alt="link to my  github" />
					</AppLink>
				</li>
				<li>
					<AppLink to="https://www.twitter.com/Eivo_official">
						<img src="@/assets/images/icons/twitter.svg" alt="a link to my twitter" />
					</AppLink>
				</li>
				<li>
					<AppLink to="https://www.linkedin.com/in/alfredthompsonovie/">
						<img src="@/assets/images/icons/linkedin.svg" alt="a link to my linkedin" />
					</AppLink>
				</li>
			</ul>
		</section>
	</footer>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--GrayishDarkBlue);
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: auto;
}
.footer__contents {
  grid-column: 2;
  grid-row: 1;
  padding: 2em 0;
  text-align: center;
}
.footer__contents > * {
  margin-top: 1.5em;
}
.branding__footer, .social__list {
  filter: invert(1) brightness(2);
}
.footerNav__link {
  color: var(--LightGreyTextField);
  transition: all .3s ease;
  padding: .5em 1em;
  display: inline-block;
}
.footerNav__link:hover {
  color: var(--SlightlyDesaturatedCyan);
}

.social__list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  transition: all .3s ease;

}
.social__list a {
  transition: all .3s ease;
  display: inline-flex;
  img {
    image-rendering: crisp-edges;
    
    filter: sepia(1);
  }
}
/* github */
.social__list li:nth-child(1) a:hover {
  transform: translateY(-2px) scale(1.5);
}
/* twitter */
.social__list li:nth-child(2) a:hover {
  transform: translateY(-2px) scale(1.3) rotate(-12deg);
  filter: saturate(99);

}
/* linkedin */
.social__list li:nth-child(3) a:hover {
  transform: translateY(-2px) scale(1.5) rotate(8deg);
  filter: invert(1) hue-rotate(180deg) contrast(1.4) saturate(9);
}

@media (min-width: 760px) {
  .footer__contents {
  padding: 2em 0;
  }
  .footer__contents > * {
  margin-top: 0;
  }
  .footer__contents, .nav__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
}


.nav__list {
  gap: 1em;
  a {
	transition: all .3s linear;
}
a.router-link-active {
	color: var(--SlightlyDesaturatedCyan);
}
}
.social__list {
  margin-left: auto;
}
}

</style>
