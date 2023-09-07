import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function applyPinning(elementSelector) {
  gsap.utils.toArray(elementSelector).forEach(section => {
    ScrollTrigger.create({
        trigger: elementSelector,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,

    });
});
}
