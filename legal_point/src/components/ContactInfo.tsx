import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <section className="px-[50px] py-10 text-gray-800 text-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-2">
        📞 Phone:{' '}
        <a
          href="tel:+16503916478"
          className="text-blue-600 hover:underline"
        >
          1 (650) 391-6478
        </a>
      </p>
      <p>
        📧 Email:{' '}
        <a
          href="mailto:jbutko@legalpointcorp.com"
          className="text-blue-600 hover:underline"
        >
          jbutko@legalpointcorp.com
        </a>
      </p>
    </section>
  );
};

export default ContactInfo;
