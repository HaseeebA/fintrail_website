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
              This Privacy Policy explains how HAAS Inc. We handle your data
              while using FinTrail, our personal finance management application. This policy applies to
              all services provided through our mobile application and associated services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="mb-4">We collect and process the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>Email address (for account creation and communication)</li>
                  <li>User profile information (name, preferences)</li>
                  <li>Device information (device ID, operating system version)</li>
                </ul>
              </li>
              <li>
                <strong>Financial Information:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>Transaction data (amounts, categories, dates)</li>
                  <li>Budget information</li>
                  <li>Financial goals and targets</li>
                  <li>Account balances and financial summaries</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>App interaction data</li>
                  <li>Feature usage statistics</li>
                  <li>Performance metrics</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Storage:</strong> Primary financial data is stored locally on your device using industry-standard encryption
              </li>
              <li>
                <strong>Cloud Storage:</strong> If backup is enabled, data is stored on secure servers using:
                <ul className="list-circle pl-6 space-y-1">
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS for data in transit</li>
                  <li>Regular security audits and monitoring</li>
                </ul>
              </li>
              <li>
                <strong>Access Controls:</strong> Strict authentication and authorization protocols protect your data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain FinTrail&apos;s core functionality</li>
              <li>To authenticate and secure your account</li>
              <li>To process and store your financial data</li>
              <li>To provide technical support and respond to your requests</li>
              <li>To analyze app performance and improve user experience</li>
              <li>To send important service updates and notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
            <p className="mb-4">
              HAAS Inc. does not sell, rent, or trade your personal data. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>Cloud storage providers for backup services</li>
                  <li>Analytics providers to improve app performance</li>
                  <li>Customer support platforms to handle inquiries</li>
                </ul>
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose data if required by law or to protect our rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Retention and Deletion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active Accounts:</strong> We retain your data while your account is active
              </li>
              <li>
                <strong>Account Deletion:</strong> Upon request, we will delete your account and associated data within 30 days
              </li>
              <li>
                <strong>Backup Retention:</strong> Backup data is retained for 90 days after deletion
              </li>
              {/* <li>
                <strong>Usage Data:</strong> Anonymized usage data may be retained for up to 12 months
              </li> */}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Data Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of optional data collection</li>
              <li>Export your data in a machine-readable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children&apos;s Privacy</h2>
            <p className="mb-4">
              FinTrail is not intended for users under 13 years of age. We do not knowingly collect
              or maintain data from children under 13. If we learn that we have collected personal
              information from a child under 13, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. We will notify you of any material changes
              through the app or via email before they become effective. Continued use of FinTrail after
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
            <p className="mb-4">
              For any questions, concerns, or requests related to your privacy and data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:fintrailapp@gmail.com" className="text-indigo-600 hover:underline">
                  fintrailapp@gmail.com
                </a>
              </li>
              <li>
                <strong>Company:</strong> HAAS Inc.
              </li>
              <li>
                <strong>Privacy Form:</strong>{' '}
                <a href="mailto:fintrailapp@gmail.com" className="text-indigo-600 hover:underline">
                  Submit a Privacy Inquiry
                </a>
              </li>
            </ul>
          </section>

          <footer className="text-sm text-gray-600 mt-8">
            Last Updated: October 28, 2024
          </footer>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;