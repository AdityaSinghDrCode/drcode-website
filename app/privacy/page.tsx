import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DrCode AI Venture Studio. Learn how we collect, use, and protect your personal information. We respect your privacy and follow data protection laws. Effective July 2024.",
  keywords: [
    "DrCode privacy",
    "AI privacy policy",
    "data protection",
    "personal information",
    "privacy rights",
    "data security",
    "cookies policy",
    "user rights",
    "data retention"
  ],
  openGraph: {
    title: "Privacy Policy | DrCode — AI Venture Studio",
    description: "Privacy Policy for DrCode AI Venture Studio. Learn how we collect, use, and protect your personal information and data.",
    url: "https://drcode.ai/privacy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | DrCode — AI Venture Studio",
    description: "Privacy Policy for DrCode AI Venture Studio. Learn how we collect, use, and protect your personal information and data.",
  },
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 text-center mb-16">
            Effective Date: July 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The purpose of this Privacy Policy is to inform users of Dr Code
                  about how we collect, use, disclose, and safeguard their personal
                  information when they interact with our website. It also aims to
                  ensure transparency regarding the types of data we collect and the
                  measures we take to protect it. By using our website, users agree
                  to the terms outlined in this Privacy Policy, which is intended to
                  build trust and help them understand their rights concerning their
                  data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At Dr. Code, we are committed to respecting and protecting the
                  privacy of our users. We recognize the importance of maintaining
                  the confidentiality and security of personal data and strictly
                  adhere to applicable data protection laws, including the
                  Information Technology Act, 2000, and the Rules enacted
                  thereunder. We employ best practices and industry standards to
                  safeguard user information and are dedicated to ensuring that
                  users have control over their data. Our commitment to data privacy
                  is integral to our operations, and we continuously strive to
                  provide a secure online experience for our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect various types of personal information from our
                  users to provide and improve our services. This information may
                  include, but is not limited to:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Contact Details:</strong> Such as your name, email
                    address, phone number, and postal address.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information on how you interact
                    with our website and services, including the pages visited, time
                    spent, clicks, and other engagement metrics.
                  </li>
                  <li>
                    <strong>Account Information:</strong> Details you provide when
                    creating an account, such as your username and password.
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Information related to
                    any transactions carried out through our website.
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect personal information through multiple channels:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Direct User Input:</strong> Information you provide when
                    you fill out forms, register an account, or communicate with us
                    directly.
                  </li>
                  <li>
                    <strong>Automated Collection:</strong> Data that is
                    automatically collected when you access or use our website, such
                    as IP addresses, browser type, device information, and browsing
                    behavior through cookies and similar tracking technologies.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect from you for a variety of
                  purposes to provide, improve, and personalize our services. These
                  purposes include:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Delivery:</strong> To deliver and manage the
                    services you have requested, including account management,
                    processing transactions, providing customer support, and
                    responding to your inquiries.
                  </li>
                  <li>
                    <strong>Personalization:</strong> To enhance your experience on
                    our website by tailoring the content and features to match your
                    preferences and interests.
                  </li>
                  <li>
                    <strong>Analytics and Improvement:</strong> To analyze usage
                    patterns, monitor and assess the performance of our services,
                    and identify areas for improvement.
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you relevant information
                    regarding updates, changes, and offers related to our services.
                  </li>
                  <li>
                    <strong>Security and Compliance:</strong> To protect our website
                    and users from fraudulent activities, unauthorized access, or
                    other security risks.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Dr. Code, we prioritize your privacy and strive to limit data
                  sharing to the bare minimum necessary to provide and enhance our
                  services. We may share your data with third parties only under
                  specific circumstances, such as:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Service Providers:</strong> We may engage trusted
                    third-party service providers to perform certain functions on
                    our behalf, such as hosting services, payment processing,
                    analytics, or customer support.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> In certain situations, we
                    may be required to disclose your information in response to
                    lawful requests, such as court orders, legal processes, or
                    regulatory obligations.
                  </li>
                  <li>
                    <strong>Protecting Rights and Security:</strong> We may disclose
                    data if we believe it is necessary to protect our rights, your
                    safety, or the safety of others.
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  We want to make it clear that Dr. Code does not access, store, or
                  share your entire codebase or project files. When you submit a
                  pull request (PR) for review, we only access the specific code
                  associated with that particular PR for analysis and feedback.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Third-Party Services and APIs (Usage of OpenAI API)
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To enhance the functionality of Dr. Code, we integrate with
                  third-party services, including the OpenAI API, which enables
                  advanced features like code review, analysis, and language
                  processing. These integrations are carefully selected to provide
                  you with the best experience and ensure that any data shared is
                  secure and managed responsibly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you interact with features powered by the OpenAI API,
                  it&apos;s important to know that OpenAI adheres to strict data
                  handling policies. Specifically, OpenAI does not use API data to
                  train or improve their models unless explicit permission is
                  granted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Data Retention and Deletion
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Dr. Code, we retain user data only for as long as it is
                  necessary to fulfill the purposes outlined in this Privacy Policy,
                  comply with legal obligations, resolve disputes, and enforce our
                  agreements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to request the deletion of your data at any
                  time. Upon receiving your request, we will delete or anonymize
                  your personal information from our systems within a reasonable
                  timeframe, except for any information that we are legally required
                  to retain.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Security Measures
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Dr. Code, we prioritize the security of your data and implement
                  a range of measures to safeguard it:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Encryption:</strong> We use industry-standard encryption
                    protocols to protect your data during transmission and storage.
                  </li>
                  <li>
                    <strong>Access Control:</strong> We implement strict access
                    control measures to ensure that only authorized personnel have
                    access to your information.
                  </li>
                  <li>
                    <strong>Authentication and Password Security:</strong> We
                    require strong password practices and offer two-factor
                    authentication (2FA) for enhanced account security.
                  </li>
                  <li>
                    <strong>Data Anonymization:</strong> Where possible, we
                    anonymize or pseudonymize data to further protect user privacy.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. User Rights and Choices
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Code is committed to giving users control over their personal
                  data in accordance with applicable data protection laws:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information, and we will provide it in a commonly used format.
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request corrections to any
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request the deletion of your data,
                    unless retention is required for legal purposes.
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request to restrict processing in
                    certain circumstances.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Dr. Code, we employ cookies and similar tracking technologies
                  to enhance user experience, analyze website traffic, and
                  personalize content. Types of cookies we use include:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Crucial for the proper
                    functioning of our website.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Collect data about how
                    visitors use our website.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Enable our website to
                    remember user preferences.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Used to collect information
                    about how visitors interact with our website.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Children&apos;s Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The Services are general audience and intended for users 13 and
                  older. We do not knowingly collect Personal Information from
                  anyone younger than age 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Policy Updates and Changes
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Dr. Code, we may update our Privacy Policy from time to time to
                  reflect changes in our practices or applicable laws. We will
                  review and revise this Privacy Policy periodically. Significant
                  changes will be made public on our website and will take effect
                  upon posting. Users are encouraged to review the Privacy Policy
                  regularly to stay informed about our data practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or your personal data, please feel free to reach
                  out to us:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:hello@drcode.ai"
                      className="text-[#875BF8] hover:underline"
                    >
                      hello@drcode.ai
                    </a>
                  </li>
                  <li>Phone: +91 99994 10384</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  13. Legal Compliance
                </h2>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Intellectual Property Rights:</strong> All content on
                    Dr. Code, including but not limited to text, articles, logos,
                    graphics, images, and videos, is the property of Dr. Code or its
                    content providers and is protected by copyright and intellectual
                    property laws.
                  </li>
                  <li>
                    <strong>Trademarks:</strong> Unauthorized use of any Dr. Code
                    trademark, service mark, or logo is prohibited and may be a
                    violation of applicable trademark laws.
                  </li>
                  <li>
                    <strong>Copyrights:</strong> The Website is protected by
                    applicable copyright laws.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  14. Users Outside India
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Code, Inc is based in India, and your use of the Services
                  implies consent to the transfer of information to countries
                  outside your country of residence, including India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  15. What Personal Data is Not Collected?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Code does not collect the following types of personal data:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    Sensitive personal information such as health records, racial or
                    ethnic origin, political opinions, or religious beliefs.
                  </li>
                  <li>
                    Financial information, including credit card details, unless
                    explicitly provided for transaction purposes.
                  </li>
                  <li>
                    Any personal data of minors under the age of 18 without parental
                    consent.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  16. With Whom Does Dr. Code Share My Personal Data?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Code may share your personal data with the following entities:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist in operating our website, conducting business, or
                    providing services to you, provided they agree to keep this
                    information confidential.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> If required by law, we may
                    disclose your information to comply with legal obligations or
                    protect our rights.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger,
                    acquisition, or sale of all or a portion of our assets, your
                    data may be transferred as part of that transaction.
                  </li>
                </ul>
              </section>

              <section className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Conclusion
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Dr. Code, your privacy is our priority. We are committed to
                  protecting your personal data and ensuring transparency about how
                  it is used. By using our services, you agree to the terms outlined
                  in this Privacy Policy. We encourage you to review this document
                  regularly and contact us if you have any questions or concerns.
                  Thank you for trusting us with your information.
                </p>
              </section>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-[#875BF8] hover:underline font-medium"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
