import React, { useState, useEffect } from "react";
import { Camera, RefreshCw, BarChart2, Zap, HelpCircle } from "lucide-react";
import gsap from "gsap";

const TypewriterText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i)); // Fix typewriter issue
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
      >
        <h3 className="font-semibold">{question}</h3>
        <HelpCircle className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50 rounded-b-lg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const CrossItLandingPage = () => {
  const [headerStyle, setHeaderStyle] = useState({
    transform: "translate(0px, 0px) scale(1)",
    opacity: 0,
  });

  useEffect(() => {
    // Retrieve final position & scale from animation.html
    const storedData = JSON.parse(localStorage.getItem("finalHeaderPosition"));

    if (storedData) {
      setHeaderStyle({
        transform: `translate(${storedData.x}px, ${storedData.y}px) scale(${storedData.scale})`,
        opacity: 1,
      });
    }
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ✅ Fixed Header (Matches Animation End Position & Stays Visible) */}
      <div
        id="header-container"
        className="fixed top-0 left-0 w-full flex justify-center items-center transition-all duration-500"
        style={{
          transform: headerStyle.transform,
          opacity: headerStyle.opacity,
          zIndex: 1000, // Ensure it's always on top
          background: "white", // Keeps it readable on all backgrounds
          padding: "1px 0", // Adds spacing
        }}
      >
        <div className="flex items-center">
          <img src="/Logoalone200x200.svg" alt="Logo" className="h-20 w-20" /> {/* Resized to match animation */}
          <img src="/CrossIt350x100.svg" alt="Text" className="h-17 -ml-24" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center py-32">
        <h2 className="text-5xl font-bold mb-4">Make Your Cameras Smarter.</h2>
        <h3 className="text-4xl font-bold text-red-600">
          <TypewriterText text="Learn More, Grow Faster." />
        </h3>
        <p className="text-xl mt-6 max-w-2xl mx-auto">
          CrossIt enhances your existing security cameras with AI-Powered insights - no new hardware, no vendor lock in.
        </p>

        {/* UI Images */}
    <div className="relative mt-12 flex justify-center">
    <img
        src="/CrossItDash.png"
        alt="CrossIt UI"
        className="w-3/4 relative z-10 shadow-lg rounded-lg"
    />
    <img
        src="/CrosItUIExample.png"
        alt="CrossIt UI Overlay"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 w-2/3 rounded-lg z-20"
    />
    </div>

        <div className="mt-52 flex justify-center">
    <button 
        onClick={scrollToWaitlist}
        className="bg-blue-600 text-white px-48 py-16 rounded-lg text-2xl font-bold hover:bg-blue-700 transition"
    >
        Get Early Access - Join the Waitlist Now
    </button>
    </div>

      </section>
      
      {/* Business Comparison */}
      <section className="mt-16">
        <div className="flex">
          <div className="w-1/2 mr-4">
            <div className="bg-red-100 bg-opacity-50 p-4 mb-4 text-center">
              <h3 className="font-bold">Your Business Without CrossIt</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Locked into expensive, outdated systems",
                "Forced into proprietary hardware",
                "Overpriced subscriptions",
                "Bulky, outdated software",
                "Slow and rigid integrations",
                "High switching costs"
              ].map((item, index) => (
                <li key={index} className="bg-red-50 p-2 rounded text-red-800">
                  <span role="img" aria-label="Warning" className="mr-2">🚨</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 ml-4">
            <div className="bg-green-100 bg-opacity-50 p-4 mb-4 text-center">
              <h3 className="font-bold">Your Business With CrossIt</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Modern, flexible, cost-efficient security powered by AI",
                "Works with your existing hardware",
                "Pay only for what you need",
                "Modern, lightweight UI",
                "Seamless automation & integration",
                "Full control & flexibility"
              ].map((item, index) => (
                <li key={index} className="bg-green-50 p-2 rounded text-green-800">
                  <span role="img" aria-label="Checkmark" className="mr-2">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mt-16 grid grid-cols-4 gap-6">
        {[
          { 
            icon: <Camera />, 
            title: "AI-Powered Insights", 
            description: "Get real-time data from your cameras without upgrading hardware." 
          },
          { 
            icon: <RefreshCw />, 
            title: "Works with Any Security System", 
            description: "No vendor lock-in. Plug Crossit into your existing setup." 
          },
          { 
            icon: <BarChart2 />, 
            title: "Business Growth Insights", 
            description: "Track foot traffic, trends, and optimize your operations." 
          },
          { 
            icon: <Zap />, 
            title: "Instant Setup", 
            description: "No complicated installs—just connect and start learning." 
          }
        ].map((feature, index) => (
          <div key={index} className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <div className="mb-4 flex justify-center text-blue-600">{feature.icon}</div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="mt-16">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4 text-left">Feature</th>
              <th className="border p-4 text-center">
                <span role="img" aria-label="Rocket">🚀</span> Crossit
              </th>
              <th className="border p-4 text-center">
                <span role="img" aria-label="Cross Mark">❌</span> Traditional Systems
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { 
                feature: "Uses Your Existing Cameras", 
                crossit: "✅ Yes", 
                traditional: "❌ No (Requires New Hardware)" 
              },
              { 
                feature: "No Vendor Lock-In", 
                crossit: "✅ Yes", 
                traditional: "❌ No (Proprietary Ecosystem)" 
              },
              { 
                feature: "AI-Powered Insights", 
                crossit: "✅ Yes", 
                traditional: "❌ No" 
              },
              { 
                feature: "Affordable Pricing", 
                crossit: "✅ Yes", 
                traditional: "❌ Expensive Subscriptions/Licensing" 
              },
              { 
                feature: "Open API & Integrations", 
                crossit: "✅ Yes", 
                traditional: "❌ Limited or None" 
              }
            ].map((row, index) => (
              <tr key={index}>
                <td className="border p-4">{row.feature}</td>
                <td className="border p-4 text-center">{row.crossit}</td>
                <td className="border p-4 text-center">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {[
          { 
            question: "How does Crossit work with my existing cameras?", 
            answer: "Crossit connects to your current security setup, analyzing video feeds without replacing your hardware." 
          },
          { 
            question: "Do I need to install new hardware?", 
            answer: "No! Crossit works with the cameras you already have—no extra purchases required." 
          },
          { 
            question: "What kind of insights does Crossit provide?", 
            answer: "It helps you track foot traffic, detect activity patterns, and optimize business operations." 
          },
          { 
            question: "Is there a free trial or beta program?", 
            answer: "Yes! Join the waitlist today for early access." 
          }
        ].map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <button 
          onClick={scrollToWaitlist}
          className="bg-blue-600 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:bg-blue-700 transition"
        >
          Be the First to Try CrossIt - Join the Waitlist
        </button>
      </section>

      {/* Mailchimp Waitlist */}
      <section id="waitlist" className="mt-20 bg-gray-50 py-16">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-purple-700">Stay Updated. Join the Waitlist!</h2>
  </div>

  <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
    <div dangerouslySetInnerHTML={{ __html: `
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form action="https://crossit.us14.list-manage.com/subscribe/post?u=8f29e0f23140b621a05075731&amp;id=5d60bfb86e&amp;f_id=00bac2e1f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                class="validate" 
                target="_blank">
            <div id="mc_embed_signup_scroll">
              <h2 class="text-xl font-semibold text-center">Join the Beta Program!</h2>
              <div class="indicates-required text-red-500 text-sm"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-EMAIL" class="block text-sm font-medium text-gray-700">Email Address <span class="asterisk text-red-500">*</span></label>
                <input type="email" name="EMAIL" class="required email border border-gray-300 rounded-lg p-2 w-full mt-1" id="mce-EMAIL" required="">
              </div>
              <div class="mc-field-group mt-4">
                <label for="mce-FNAME" class="block text-sm font-medium text-gray-700">First Name <span class="asterisk text-red-500">*</span></label>
                <input type="text" name="FNAME" class="required text border border-gray-300 rounded-lg p-2 w-full mt-1" id="mce-FNAME" required="">
              </div>
              <div class="mc-field-group mt-4">
                <label for="mce-LNAME" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="LNAME" class="text border border-gray-300 rounded-lg p-2 w-full mt-1" id="mce-LNAME">
              </div>
              <div class="mc-field-group mt-4">
                <label for="mce-PHONE" class="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" name="PHONE" class="REQ_CSS border border-gray-300 rounded-lg p-2 w-full mt-1" id="mce-PHONE">
              </div>
              <div class="mc-field-group mt-4">
                <label for="mce-COMPANY" class="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" name="COMPANY" class="text border border-gray-300 rounded-lg p-2 w-full mt-1" id="mce-COMPANY">
              </div>
              <div class="optionalParent mt-6">
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
              <div class="text-center mt-4">
                <img src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" class="mx-auto w-44">
              </div>
            </div>
          </form>
        </div>
      </div>
    ` }} />
  </div>
</section>
    </div>
  );
};

export default CrossItLandingPage
