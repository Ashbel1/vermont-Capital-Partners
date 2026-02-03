import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedSection - A reusable component for scroll-triggered animations
 * @param {string} direction - 'left', 'right', 'up', 'down'
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 0.6)
 * @param {React.ReactNode} children - Content to animate
 */
const AnimatedSection = ({ 
    children, 
    direction = 'left', 
    delay = 0, 
    duration = 0.6,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true, // Animation happens only once
        margin: '-100px' // Trigger when element is 100px from viewport
    });

    const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: 100 },
        down: { x: 0, y: -100 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction]
    };

    const animate = {
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directions[direction].x,
        y: isInView ? 0 : directions[direction].y,
        transition: {
            duration: duration,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
