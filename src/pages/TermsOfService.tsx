import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              ← Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on Echo Verse DB LLC's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Terms</h2>
            <p className="mb-4">
              Our web development services are provided under the following terms:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All projects require a signed contract and deposit before work begins</li>
              <li>Project timelines are estimates and may vary based on scope changes</li>
              <li>Client feedback and approvals are required at specified milestones</li>
              <li>Final payment is due upon project completion and delivery</li>
              <li>Source code and assets are transferred upon full payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p className="mb-4">
              The materials on WebPortfolio's website are provided on an 'as is' basis. WebPortfolio makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
            <p className="mb-4">
              In no event shall WebPortfolio or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on WebPortfolio's website, even if WebPortfolio or a WebPortfolio authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Revisions and Errata</h2>
            <p className="mb-4">
              The materials appearing on WebPortfolio's website could include technical, typographical, or photographic errors. 
              WebPortfolio does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

            <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@echoverse.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}