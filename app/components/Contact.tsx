'use client';

import { FormEvent } from 'react';
import { Section, Row, Column, Module } from './layout';

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Message: ${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;

    window.location.href = `mailto:giolobaton1024@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <Section id="contact" backgroundColor="bg-gray-50">
      <Row>
        <Column>
          <Module className="text-center mb-[30px]">
            <h2 className="text-[2em] text-gray-900">Contact</h2>
          </Module>
          <Module className="max-w-[400px] mx-auto mb-10">
            <form 
              className="contact-form flex flex-col gap-4" 
              onSubmit={handleSubmit}
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="p-2.5 border border-gray-300 rounded-md"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="p-2.5 border border-gray-300 rounded-md"
              />
              <textarea 
                name="message" 
                placeholder="Your Message/Inquiry" 
                required 
                className="p-2.5 border border-gray-300 rounded-md"
              ></textarea>
              <button 
                type="submit" 
                className="p-2.5 border-none bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </Module>

          <Module className="contact-details text-center">
            <p>Email: giolobaton1024@gmail.com</p>
            <p>Phone: +63 947 246 7693</p>
            <div className="social-icons mt-4 flex justify-center gap-5">
              <a href="#" className="hover:text-blue-500">LinkedIn</a>
              <a href="#" className="hover:text-blue-500">GitHub</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
            </div>
          </Module>
        </Column>
      </Row>
    </Section>
  );
};

export default Contact;
