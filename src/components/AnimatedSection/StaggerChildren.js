import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * StaggerChildren - Animates children one after another with stagger effect
 */
const StaggerChildren = ({ 
    children, 
    staggerDelay = 0.1,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,
        margin: '-100px'
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StaggerChildren;
