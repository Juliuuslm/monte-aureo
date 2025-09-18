'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Google Analytics tracking function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Analytics events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || eventName,
      value: parameters?.value || 1,
      ...parameters,
    });
  }
};

// Conversion tracking
export const trackConversion = (type: 'whatsapp_click' | 'form_submit' | 'phone_click', details?: Record<string, unknown>) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: type,
    conversion_type: type,
    ...details,
  });
};

// Villa interest tracking
export const trackVillaInterest = (villaName: string, action: 'view' | 'click' | 'inquiry') => {
  trackEvent('villa_interest', {
    event_category: 'product_interest',
    event_label: villaName,
    villa_name: villaName,
    action,
  });
};

// Booking funnel tracking
export const trackBookingFunnel = (step: 'widget_open' | 'form_start' | 'form_complete' | 'whatsapp_redirect') => {
  trackEvent('booking_funnel', {
    event_category: 'funnel',
    event_label: step,
    funnel_step: step,
  });
};

const Analytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Track page views on route changes
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID || '', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Initial page view
    handleRouteChange();

    // Listen for route changes (for SPA navigation)
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID || 0},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
};

export default Analytics;