'use client';
import { useEffect } from 'react';


export const useScrollReveal = (selectors: string, options = {}) => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = require('scrollreveal').default;
        ScrollReveal().reveal(selectors, {
          reset: false,
          mobile: true,
          ...options, // Merge default options with any provided options
        });
      }
    }, [selectors]);
  };