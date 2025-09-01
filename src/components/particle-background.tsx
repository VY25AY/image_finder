import React, { useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        let particles: Particle[] = [];
        const numberOfParticles = 100;

        interface Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 5 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() - 0.5) * 2;
                const speedY = (Math.random() - 0.5) * 2;
                particles.push({ x, y, size, speedX, speedY });
            }
        };

        const animateParticles = () => {
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((particle) => {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                });
            }
            requestAnimationFrame(animateParticles);
        };

        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
            animateParticles();
        }

        return () => {
            cancelAnimationFrame(animateParticles);
        };
    }, []);

    return <canvas id="particle-canvas" className="absolute top-0 left-0 z-0" />;
};

export default ParticleBackground;