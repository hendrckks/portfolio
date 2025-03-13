import ContactForm from "@/components/ui/ContactForm";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact - Samuel Tetenga",
  description: "Get in touch with Samuel Tetenga for your software designs, development and branding needs",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-36 bg-background">
        <div className="container-custom">
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-10">
            Get in <span className="text-gray-400">touch</span>
          </h1>

          <div className="max-w-4xl">
            <ContactForm />

            <div className="mt-24 pt-12 border-t border-gray-200">
              <h2 className="text-xl mb-8">Not a fan of filling out forms? Not a problem.</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-500 mb-3">Talk to me</p>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-[6px] items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 transition-colors "
                  >
                    Book a 30 minute call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 mb-3">Email me</p>
                  <a
                    href="mailto:samueltetenga@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-[6px]"
                  >
                    samueltetenga@gmail.com
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
