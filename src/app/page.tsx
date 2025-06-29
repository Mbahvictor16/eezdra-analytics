import FeatureCard from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";

import Image from "next/image";
import Link from "next/link";
// import { FaChartBar } from "react-icons/fa";
import { BarChart3, Users, TrendingUp, Clock, Zap, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <>
      <div className="w-11/12 mx-auto lg:w-10/12 md:flex items-center justify-center h-[300px] lg:h-[450px] mb-20">
        <div className="md:text-center lg:w-3/5">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Tracking Tiktok Success with Precision</h1>
          <p className="md:text-2xl text-[#3a3a3a]">
            <small>Unlock powerful insights, track engagement, and grow audience with comprehensive analytics</small>
          </p>
          <div>
            <Link href="/dashboard" className="block md:w-fit md:mx-auto px-4 py-2 text-white rounded-full bg-[#7B04CE] font-bold">Get Started</Link>
          </div>
        </div>
      </div>

      <section className="w-11/12 mx-auto lg:w-10/12 md:flex items-center justify-center min-h-[300px] lg:min-h-[450px] mb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#00F2EA] text-white">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Grow</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides comprehensive tools to track, analyze, and optimize your social media performance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#FF3B30]/10 p-2">
                <BarChart3 className="h-6 w-6 text-[#FF3B30]" />
              </div>
              <h3 className="text-lg font-bold">Advanced Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Detailed metrics and insights to understand your content performance and audience engagement.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#00F2EA]/10 p-2">
                <Users className="h-6 w-6 text-[#00F2EA]" />
              </div>
              <h3 className="text-lg font-bold">Audience Insights</h3>
              <p className="text-sm text-muted-foreground">
                Understand your followers with demographic data, interests, and behavior patterns.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#4CAF50]/10 p-2">
                <TrendingUp className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <h3 className="text-lg font-bold">Growth Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your account growth over time with detailed charts and projections.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#FFC107]/10 p-2">
                <Clock className="h-6 w-6 text-[#FFC107]" />
              </div>
              <h3 className="text-lg font-bold">Scheduled Reports</h3>
              <p className="text-sm text-muted-foreground">
                Automated reports delivered to your inbox on your preferred schedule.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#FF3B30]/10 p-2">
                <Zap className="h-6 w-6 text-[#FF3B30]" />
              </div>
              <h3 className="text-lg font-bold">Competitor Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Compare your performance against competitors and identify opportunities.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-[#00F2EA]/10 p-2">
                <Shield className="h-6 w-6 text-[#00F2EA]" />
              </div>
              <h3 className="text-lg font-bold">Data Security</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security to keep your data safe and compliant with regulations.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-11/12 mx-auto lg:w-10/12 md:flex items-center justify-center h-[300px] lg:h-[450px] mb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Social Media Strategy?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of creators who are growing their audience and increasing engagement with TikTrack.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" style={{ backgroundColor: "#FF3B30", color: "white" }} asChild>
                <Link href="/dashboard">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section className="w-11/12 mx-auto lg:w-10/12 md:flex items-center justify-center h-[300px] lg:min-h-[450px] mb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFC107] text-[#1A1A1A]">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about Eezdra analytics and our services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does Eezdra collect data?</AccordionTrigger>
                <AccordionContent>
                  Eezdra analytics to your social media accounts through official APIs. We only collect data that you
                  authorize us to access, and we never store your passwords or sensitive information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I export my analytics data?</AccordionTrigger>
                <AccordionContent>
                  Yes, all plans include the ability to export your data in CSV or PDF format. Pro and Business plans also
                  include API access for custom integrations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How often is the data updated?</AccordionTrigger>
                <AccordionContent>
                  Our platform updates data in real-time for most metrics. Some advanced analytics may have a slight delay
                  of up to 24 hours depending on the social media platform's API limitations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I track multiple social media platforms?</AccordionTrigger>
                <AccordionContent>
                  Yes, Eezdra supports all major social media platforms including TikTok, Instagram, YouTube, Twitter,
                  and Facebook. You can connect multiple accounts based on your subscription plan.
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="item-5">
                <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start
                  your trial.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
