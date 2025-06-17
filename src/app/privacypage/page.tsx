"use client";
import SafetyBanner from "@/components/SafetyBanner";
import Contact from "@/components/Contact";
import Link from "next/link";
import Policy from "@/components/Policy";

export default function PrivacyPolicyPage() {
  return (
    <div className=" text-gray-700">
        <SafetyBanner />
        <Contact />
        <div className="md:px-20 md:py-10 px-4 py-8 ">
      <h1 className="md:text-3xl text-xl font-bold mb-6">Privacy & Cookie Policy</h1>

      <p className="mb-4">
        Atlantic Fenders is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you visit our website.
      </p>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Personal Information:</strong> Such as your name, email, and phone number (if provided through forms).</li>
          <li><strong>Usage Data:</strong> Such as your IP address, browser type, and pages you visit.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance user experience and collect analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide and improve our services.</li>
          <li>To analyze website usage and performance.</li>
          <li>To personalize your browsing experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">3. Cookie Usage</h2>
        <p className="mb-2">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Required for the website to function (cannot be disabled).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the site.</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and campaigns.</li>
        </ul>
        <p className="mt-2">
          You can update your cookie preferences anytime using the "Cookie Settings" at the bottom of the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">4. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or loss.</p>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>We may use third-party tools like Google Analytics. These services may also collect cookies and usage data as per their own privacy policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to request access, correction, or deletion of your personal data. Contact us if you wish to exercise your rights.</p>
      </section>

      <section className="mb-8">
        <h2 className="md:text-xl font-semibold mb-2">7. Contact</h2>
        <p>If you have any questions about this policy, please contact us at: <Link href="#contact" className="text-blue-900 underline hover:text-blue-600">Contact Us</Link></p>
      </section>

      <p className="text-sm text-gray-500">Last updated: Jan 3, 2025</p>
    </div>
    <Policy />
    </div>
  );
}
