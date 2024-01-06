'use client'

import React, { useState } from 'react';

export default function Tool() {
  const [url, setUrl] = useState<string>('');
  const [mainDomain, setMainDomain] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const extractMainDomain = (hostname: string): string => {
    const parts = hostname.split('.');
    return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    let formattedUrl = url;
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'http://' + formattedUrl;
    }

    try {
      const urlObject = new URL(formattedUrl);
      const hostname = urlObject.hostname;
      const mainDomain = extractMainDomain(hostname);
      setMainDomain(mainDomain);
    } catch (error) {
      setMainDomain('Invalid URL');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
        <input
          className="w-96 h-12 rounded-md px-4 border-2 border-gray-300"
          type="text"
          placeholder="Paste link here"
          value={url}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-4 w-96 h-12 rounded-md bg-blue-500 text-white font-bold"
        >
          Check
        </button>
        {submitted && (
          <div className="mt-2">
            {mainDomain && (
              <p className="text-lg">
                Main Domain: {mainDomain}
                <br />
                <small>Note: Using subdomains is a common method to deceive or phish. Always verify the authenticity of a website.</small>
              </p>
            )}
            <p className="text-sm mt-2 italic">
              Disclaimer: This tool is for educational purposes only and does not guarantee the safety of any link. Please use your own judgment and verify links independently. We are not responsible for any damages or losses incurred by using this tool.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
