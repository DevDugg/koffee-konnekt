import Link from "next/link";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">Terms and Conditions for {config.appName}</h1>

        <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
          {`Terms & Services
Effective Date: January 13, 2025

Welcome to KoffeeKonnekt!

These Terms & Services govern your use of our website, software, and services. By accessing or using KoffeeKonnekt, you agree to these Terms. If you do not agree, please discontinue use of our services.

1. Services Provided
KoffeeKonnekt offers software for arranging coffee meetings for remote teams. Users are granted monthly access to a dashboard where they can add and manage team members.

2. User Responsibilities
Users must provide accurate and up-to-date information, including name, email, and payment details.
Users are responsible for maintaining the confidentiality of their login credentials.

3. Data Collection
We collect personal data (name, email, and payment information) as outlined in our Privacy Policy.
We also use cookies to enhance the user experience.

4. Payment and Subscriptions
Access to the dashboard is provided on a subscription basis.
All fees are billed monthly and are non-refundable except as required by law.

5. Ownership and Intellectual Property
All content, software, and materials provided by KoffeeKonnekt are the intellectual property of KoffeeKonnekt. Users are granted a limited, non-transferable license to use the software solely for its intended purpose.

6. Modifications to Terms
KoffeeKonnekt reserves the right to update these Terms. Users will be notified of changes via email. Continued use of the services after updates signifies acceptance of the new Terms.

7. Termination
KoffeeKonnekt reserves the right to terminate or suspend access to services for any breach of these Terms.

8. Governing Law
These Terms are governed by the laws of the United States.

9. Contact Information
For any questions or concerns, please contact us at dugg@devdugg.com.

By using KoffeeKonnekt, you acknowledge and agree to these Terms & Services.

Thank you for choosing KoffeeKonnekt!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
