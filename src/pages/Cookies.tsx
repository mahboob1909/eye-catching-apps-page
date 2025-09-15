import { useEffect } from 'react';

export function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Performance Cookies:</strong> Collect information about how you use our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Strictly Necessary Cookies</h3>
                <p className="mb-2">
                  These cookies are essential for the website to function and cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Website functionality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Analytics Cookies</h3>
                <p className="mb-2">
                  We use Google Analytics to understand how our website is used.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>_ga (Google Analytics)</li>
                  <li>_gid (Google Analytics)</li>
                  <li>_gat (Google Analytics)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Functional Cookies</h3>
                <p className="mb-2">
                  These cookies remember your preferences and settings.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Theme preferences (dark/light mode)</li>
                  <li>Language settings</li>
                  <li>User interface preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Most browsers allow you to view, manage, and delete cookies</li>
              <li>You can set your browser to refuse cookies</li>
              <li>You can delete existing cookies from your browser</li>
              <li>You can opt-out of analytics cookies through browser settings</li>
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our site are set by third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Plugins:</strong> If you interact with social sharing buttons</li>
              <li><strong>Embedded Content:</strong> Videos or other embedded content may set cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting 
              the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at cookies@webportfolio.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}