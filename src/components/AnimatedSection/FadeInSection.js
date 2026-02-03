import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * FadeInSection - Simple fade-in animation on scroll
 */
const FadeInSection = ({ 
    children, 
    delay = 0, 
    duration = 0.6,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,
        margin: '-100px'
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: 'easeOut'
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
