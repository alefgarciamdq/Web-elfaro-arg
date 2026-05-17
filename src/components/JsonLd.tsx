import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c')
        }}
      />
    </Helmet>
  );
}
