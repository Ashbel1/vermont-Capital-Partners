import { useEffect } from 'react';

// Scroll reveal hook
export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
};

// Counter animation hook
export const useCounterAnimation = (ref, target, duration = 2000) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const increment = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              element.textContent = Math.ceil(target);
              clearInterval(timer);
            } else {
              element.textContent = Math.ceil(current);
            }
          }, 16);
          
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, target, duration]);
};

// Parallax effect hook
export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Smooth scroll to element
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Stagger animation helper
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
  });
};

// Image lazy loading with fade-in
export const useLazyLoadImages = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('fade-in');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    return () => imageObserver.disconnect();
  }, []);
};

// Page transition helper
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

// Mobile menu toggle with animation
export const toggleMobileMenu = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
  if (!isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
