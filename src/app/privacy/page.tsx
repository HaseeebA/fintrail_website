import { NextPage } from "next";
import Head from "next/head";
import React from 'react';

const PrivacyPolicy: NextPage = () => {
	return (
		<>
		  <Head>
			<title>Privacy Policy - FinTrail</title>
			<meta name="description" content="Privacy Policy of FinTrail - Your Personal Finance Companion" />
		  </Head>
		  <main className="container mx-auto px-4 py-8 max-w-4xl">
			<h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
			
			<div className="space-y-8">
			  <section>
				<p className="mb-4">
				  At FinTrail, we take your privacy seriously. This Privacy Policy explains how we handle your data
				  while using our personal finance management application. We believe in complete transparency
				  about how we collect, use, and protect your information.
				</p>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
				<ul className="list-disc pl-6 space-y-2">
				  <li>
					<strong>Essential App Data:</strong> Information necessary for core app functionality, including user preferences and app settings
				  </li>
				  {/* <li>
					<strong>Location Data:</strong> Only when you grant permission, to provide location-specific features
				  </li> */}
				  <li>
					<strong>Financial Information:</strong> Your financial data is stored locally on your device by default
				  </li>
				  <li>
					<strong>Account Information:</strong> Basic details needed for account creation and management
				  </li>
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">How We Store Your Data</h2>
				<ul className="list-disc pl-6 space-y-2">
				  <li>
					<strong>Local Storage:</strong> By default, all your financial data is stored locally on your device
				  </li>
				  <li>
					<strong>Optional Backup:</strong> If you opt in, your data can be backed up to our secure servers using encryption
				  </li>
				  <li>
					<strong>Data Security:</strong> We use industry-standard encryption to protect any data that you choose to back up
				  </li>
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
				<ul className="list-disc pl-6 space-y-2">
				  <li>To provide and maintain the core functionality of FinTrail</li>
				  {/* <li>To offer location-specific features when permitted</li> */}
				  <li>To improve app performance and user experience</li>
				  <li>To provide technical support when needed</li>
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
				<p className="mb-4">
				  We do not share your data with any third parties. This includes:
				</p>
				<ul className="list-disc pl-6 space-y-2">
				  <li>No sharing with advertisers</li>
				  <li>No sharing with marketing companies</li>
				  <li>No sharing with data brokers</li>
				  <li>No selling of your data to any third parties</li>
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Your Data Rights</h2>
				<ul className="list-disc pl-6 space-y-2">
				  <li>Access and view all your stored data</li>
				  <li>Delete your data at any time</li>
				  <li>Enable or disable data backup</li>
				  {/* <li>Export your data in a readable format</li> */}
				  {/* <li>Opt out of location services</li> */}
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Data Backup</h2>
				<p className="mb-4">
				  Data backup is entirely optional. If you choose to enable backup:
				</p>
				<ul className="list-disc pl-6 space-y-2">
				  {/* <li>Your data is encrypted before transmission</li> */}
				  <li>Backups are stored on secure servers</li>
				  <li>You can disable backup at any time</li>
				  <li>You can delete backed-up data permanently</li>
				</ul>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Children&apos;s Privacy</h2>
				<p className="mb-4">
				  Our services are not intended for users under the age of 13. We do not knowingly collect
				  information from children under 13 years of age.
				</p>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
				<p className="mb-4">
				  We may update this Privacy Policy from time to time. We will notify you of any changes by
				  posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
				</p>
			  </section>
	
			  <section>
				<h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
				<p className="mb-4">
				  If you have any questions about this Privacy Policy or our data practices, please contact us at:
				  <br />
				  <a href="mailto:fintrailapp@gmail.com" className="text-blue-600 hover:underline">
					fintrailapp@gmail.com
				  </a>
				</p>
			  </section>
	
			  <footer className="text-sm text-gray-600 mt-8">
				Last Updated: October 24, 2024
			  </footer>
			</div>
		  </main>
		</>
	  );
	};

export default PrivacyPolicy;
