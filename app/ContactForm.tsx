'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Request sent!');
      setForm({ name: '', email: '', budget: '', message: '' });
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full bg-black border border-gray-800 p-4 rounded-lg"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-black border border-gray-800 p-4 rounded-lg"
      />

      <input
        name="budget"
        placeholder="Budget range"
        value={form.budget}
        onChange={handleChange}
        className="w-full bg-black border border-gray-800 p-4 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="What are you looking for?"
        value={form.message}
        onChange={handleChange}
        className="w-full bg-black border border-gray-800 p-4 rounded-lg h-32"
      />

      <button className="w-full bg-white text-black py-4 rounded-lg font-medium">
        Submit Request
      </button>
    </form>
  );
}