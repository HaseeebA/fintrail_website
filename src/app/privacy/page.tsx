import { NextPage } from "next";
import Head from "next/head";

const PrivacyPolicy: NextPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy - FinTrail</title>
				<meta name="description" content="Privacy Policy of FinTrail" />
			</Head>
			<main className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
				<p className="mb-4">
					At FinTrail, we  are committed to protecting your privacy. This Privacy
					Policy outlines our practices regarding the collection, use, and
					disclosure of your information.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
				<p className="mb-4">
					We collect information that you provide to us directly, such as when
					you create an account, update your profile, or use our services. This
					may include your name, email address, and other contact information.
				</p>
				<h2 className="text-2xl font-semibold mb-2">
					How We Use Your Information
				</h2>
				<p className="mb-4">
					We use the information we collect to provide, maintain, and improve
					our services, to communicate with you, and to protect FinTrail and our
					users.
				</p>
				<h2 className="text-2xl font-semibold mb-2">
					Sharing Your Information
				</h2>
				<p className="mb-4">
					We do not share your personal information with third parties except as
					necessary to provide our services, comply with the law, or protect our
					rights.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
				<p className="mb-4">
					You have choices regarding the information we collect and how it is
					used. You can update your account information at any time, and you can
					opt out of receiving promotional communications from us.
				</p>
				<h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
				<p className="mb-4">
					If you have any questions about this Privacy Policy, please contact us
					at support@fintrail.com.
				</p>
			</main>
		</>
	);
};

export default PrivacyPolicy;
