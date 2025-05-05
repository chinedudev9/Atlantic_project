"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { motion } from "framer-motion";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  // Check cookie on mount
  useEffect(() => {
    const stored = Cookies.get("cookie_consent");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setShowBanner(false);
      } catch {
        // corrupted cookie, reset
        Cookies.remove("cookie_consent");
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Toggle individual preferences
  const handleToggle = (type: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const savePreferences = () => {
    Cookies.set("cookie_consent", JSON.stringify(preferences), { expires: 365 });
    setShowBanner(false);
  };

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    Cookies.set("cookie_consent", JSON.stringify(all), { expires: 365 });
    setPreferences(all);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    Cookies.set("cookie_consent", JSON.stringify(onlyEssential), { expires: 365 });
    setPreferences(onlyEssential);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: "var(--background)" }}
      className="fixed z-50 p-4 text-sm border rounded-2xl shadow-md bg-white
        bottom-0 left-0 right-0
        md:bottom-5 md:left-5 md:right-auto md:max-w-md
        flex flex-col space-y-3"
    >
      <p className="text-gray-800">
        Atlantic Fenders values your experience. By continuing, you agree to our
        <Link href="/privacypage" className="text-blue-700 underline ml-1">privacy policy</Link>.
      </p>

      {showPreferences && (
        <div className="space-y-2 text-sm border-t pt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked disabled className="accent-blue-700 cursor-pointer" />
            Essential Cookies (Always Required)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() => handleToggle("analytics")}
              className="accent-blue-700 cursor-pointer"
            />
            Analytics Cookies
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() => handleToggle("marketing")}
              className="accent-blue-700 cursor-pointer"
            />
            Marketing Cookies
          </label>
          <button
            onClick={savePreferences}
            className="w-full bg-blue-900 text-white rounded-2xl py-2 mt-2 hover:bg-blue-700"
          >
            Save Preferences
          </button>
        </div>
      )}

      {!showPreferences && (
        <div className="flex flex-col md:flex-row gap-2 font-semibold">
          <button
            onClick={rejectAll}
            className="px-6 py-1.5 cursor-pointer border border-blue-900 hover:text-white hover:bg-blue-700 rounded-2xl"
          >
            Reject All
          </button>
          <button
            onClick={() => setShowPreferences(true)}
            className="px-6 cursor-pointer py-1.5 border border-blue-900 text-blue-900 hover:bg-blue-100 rounded-2xl"
          >
            Preferences
          </button>
          <button
            onClick={acceptAll}
            className="px-6 cursor-pointer py-1.5 bg-blue-900 text-white rounded-2xl hover:bg-blue-700"
          >
            Accept All
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default CookieBanner;

