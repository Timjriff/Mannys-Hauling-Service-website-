import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy | Manny's Hauling Services",
  description: "Privacy policy for Manny's Hauling Services in Santa Ana, CA.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <main className="container max-w-3xl py-32">
      <h1 className="text-5xl font-black tracking-tight">Privacy Policy</h1>
      <p className="mt-6 leading-8 text-black/64">Manny&apos;s Hauling Services uses contact information submitted by customers to respond to estimate requests, schedule junk removal, and provide service updates. We do not sell personal information.</p>
      <h2 className="mt-10 text-2xl font-black">Information collected</h2>
      <p className="mt-3 leading-8 text-black/64">We may collect your name, phone number, email, service address, photos you provide, and details about the requested hauling job.</p>
      <h2 className="mt-10 text-2xl font-black">Contact</h2>
      <p className="mt-3 leading-8 text-black/64">Questions can be sent to mannyswork.818@gmail.com.</p>
    </main>
  );
}
