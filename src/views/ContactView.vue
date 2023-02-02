<template>
	<main class="grid">
		<section class="grid__contents">
			<section class="contact__details contact__section flex">
				<h1 class="subHeading flex__contents--heading">Get in Touch</h1>
				<div class="contact__contents__container flex__contents--body">
					<p class="contact__description">
						I’d love to hear about what you’re working on and how I could help.
						I’m currently looking for a new role and am open to a wide range of
						opportunities. My preference would be to find a position in a
						company in London. But I’m also happy to hear about opportunites
						that don’t fit that description. I’m a hard-working and positive
						person who will always approach each task with a sense of purpose
						and attention to detail. Please do feel free to check out my online
						profiles below and get in touch using the form.
					</p>
					<ul class="social__list">
						<li>
					<AppLink to="https://github.com/alfredthompsonOvie" class="social__link">
						<img src="@/assets/images/icons/github.svg" alt="a link to my github page" />
					</AppLink>
				</li>
				<li>
					<AppLink to="https://www.twitter.com/Eivo_official" class="social__link">
						<img src="@/assets/images/icons/twitter.svg" alt="a link to my twitter page" />
					</AppLink>
				</li>
				<li>
					<AppLink to="https://www.linkedin.com/in/alfredthompsonovie/" class="social__link">
						<img src="@/assets/images/icons/linkedin.svg" alt="a link to my linkedin page" />
					</AppLink>
				</li>
					</ul>
				</div>
			</section>

			<section class="contact__section">
				<form @submit="onSubmit">
					<fieldset class="flex">
						<div class="flex__contents--heading">
							<legend class="subHeading">Contact Me</legend>
						</div>
						<div class="form__contents flex__contents--body">
							<div class="form__group">
								<label for="fullname">Name</label>
								<input
									type="text"
									name="fullname"
									id="fullname"
									placeholder="Jane Appleseed"
									v-model="fullname"
									class="form__control"
									:class="{ addBorder: errors.fullname, success: !errors.fullname }"
								/>
								<p v-if="errors" class="error">{{ errors.fullname }}</p>
							</div>
							<div class="form__group">
								<label for="email">Email Address</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email@example.com"
									v-model="email"
									class="form__control"
									:class="{ addBorder: errors.email, success: !errors.email }"
								/>
								<p v-if="errors" class="error">{{ errors.email }}</p>
							</div>
							<div class="form__group">
								<label for="message">Message</label>
								<textarea
									v-model="message"
									name="message"
									id="message"
									cols="30"
									rows="10"
									placeholder="How can I help?"
									class="form__control"
									:class="{ addBorder: errors.message, success: !errors.message }"
								></textarea>
								<p v-if="errors" class="error">{{ errors.message }}</p>
							</div>
							<div class="form__group">
								<input
									type="submit"
									value="Send Message"
									:disabled="isSubmitting"
								/>
							</div>
						</div>
					</fieldset>
				</form>
			</section>
		</section>
		<section class="feedback" v-if="showFeedback">
			<div class="feedback__content">
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
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";

import emailjs from '@emailjs/browser';
import { ref } from "vue";

export default {
	name: "ContactView",
	setup() {
		const isSubmitting = ref(false);
		const showFeedback = ref(false);
		const schema = object({
			fullname: string().required("This field is required"),
			email: string().required("This field is required").email(),
			message: string().required("This field is required"),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: fullname } = useField("fullname");
		const { value: email } = useField("email");
		const { value: message } = useField("message");

		const onSubmit = handleSubmit((values) => {
			console.log(values);
			isSubmitting.value = true;
			emailjs.send("service_dy8oq15", "contact_form", values, "LmD4BAQZ0uDvqETKL")
				.then(
					function (response) {
					// show this in feedback
						console.log("SUCCESS!", response.status, response.text);
						isSubmitting.value = false;
						showFeedback.value = true;
				},
					function (error) {
					// show this in feedback
					console.log("FAILED...", error);
					isSubmitting.value = false;
					showFeedback.value = false;
				}
			);

		});

		return {
			fullname,
			email,
			message,
			onSubmit,
			errors,
			isSubmitting,
			showFeedback
		};
	},
};
</script>

<style lang="scss" scoped>
section > section {
	margin-top: 2em;
}
.contact__details {
	border-top: 1px solid var(--GrayishDarkBlue-border);
	border-bottom: 1px solid var(--GrayishDarkBlue-border);
	padding: 2em 0;
}
.contact__description {
	margin: 1.5em 0;
}
.social__list {
	display: flex;
	align-items: center;
	gap: 1em;
}
.social__link {
	img {
		transition: all .3s linear;
	}
	&:hover img {
		transform: rotate(-12deg) scale(1.2);
	}
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
form {
	margin-bottom: 2em;
}
fieldset {
	border: 0;
}
.form__contents {
	margin: 1em 0;
}
.form__group + .form__group {
	margin-top: 1.5em;
}
label {
	display: inline-block;
	font-weight: 700;
	font-size: 13px;
	line-height: 30px;
}
.form__control {
	display: inline-block;
	width: 100%;
	padding: 1em 1.5em;
	background-color: var(--LightGreyTextField);
	border: 0;
}
.success {
	border: 1px solid var(--SlightlyDesaturatedCyan);
}

input[type="submit"] {
	padding: 1em 3em;
	color: #fff;
	background-color: var(--DarkBlue);
	border: 0;
	text-transform: uppercase;

	font-family: Public Sans;
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 2px;
	text-align: center;
	cursor: pointer;
	transition: all .3s linear;
}
input[type="submit"]:hover {
	background-color: var(--SlightlyDesaturatedCyan);
}
.error {
	color: var(--BrightRedErrors);
	font-style: italic;
	font-size: 12px;
}
.addBorder {
	border: 1px solid var(--BrightRedErrors);
}
input[disabled] {
	cursor: not-allowed;
}

.feedback {
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
	z-index: 80;
}
.feedback__content {
	position: relative;
	z-index: 99;
	max-width:450px;
	text-align: center;
	padding: 2em;
	border-radius: 1em;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	background-color: #fff;
}
.feedback__content .subHeading {
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8));
	margin-bottom: 0.7em;
}

@media (min-width: 992px) {
	.contact__description {
		margin: 0;
		margin-bottom: 1.5em;
	}
	.form__contents {
		margin-top: 0;
	}
	.flex {
		display: flex;
		align-items: flex-start;
	}
	.flex__contents--heading {
		flex: 1;
	}
	.flex__contents--body {
		flex: 1;
	}
}
</style>
