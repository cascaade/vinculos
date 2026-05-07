import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT_SELECTOR = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "blockquote",
    "a",
    "button",
    "span",
    "strong",
    "small"
].join(",");

const isTextLeaf = (element: Element) => {
    if (!(element instanceof HTMLElement)) return false;
    if (element.dataset.textRevealReady) return false;
    if (element.closest("[data-text-reveal-ignore]")) return false;
    if (element.closest("[contenteditable='true']")) return false;
    if (!element.textContent?.trim()) return false;

    const nonBreakChildren = Array.from(element.children).filter(
        (child) => child.tagName.toLowerCase() !== "br"
    );

    if (nonBreakChildren.length > 0) return false;

    const styles = window.getComputedStyle(element);

    return (
        styles.display !== "none" &&
        styles.visibility !== "hidden" &&
        Number(styles.opacity) > 0.95 &&
        element.getClientRects().length > 0
    );
};

const sortTopToBottomLeftToRight = (a: Element, b: Element) => {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    const verticalDifference = Math.round(aRect.top - bRect.top);

    if (Math.abs(verticalDifference) > 8) {
        return verticalDifference;
    }

    return aRect.left - bRect.left;
};

export default function useScrollTextReveal() {
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reduceMotion.matches) return;

        const root = document.body;
        const batches: ScrollTrigger[] = [];
        const animatedTargets = new Set<HTMLElement>();
        let raf = 0;

        const setupTextReveal = () => {
            const targets = Array.from(root.querySelectorAll(TEXT_SELECTOR)).filter(isTextLeaf) as HTMLElement[];

            if (targets.length === 0) return;

            targets.forEach((target) => {
                target.dataset.textRevealReady = "true";
                animatedTargets.add(target);
            });

            gsap.set(targets, {
                autoAlpha: 0,
                y: 28,
                scale: 0.985,
                transformOrigin: "50% 100%",
                willChange: "transform, opacity"
            });

            batches.push(
                ...ScrollTrigger.batch(targets, {
                    once: true,
                    start: "top 92%",
                    onEnter: (batch) => {
                        const orderedBatch = [...batch].sort(sortTopToBottomLeftToRight);

                        gsap.to(orderedBatch, {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: "back.out(1.55)",
                            stagger: 0.055,
                            clearProps: "opacity,visibility,transform,willChange"
                        });
                    }
                })
            );

            ScrollTrigger.refresh();
        };

        const scheduleSetup = () => {
            window.cancelAnimationFrame(raf);
            raf = window.requestAnimationFrame(setupTextReveal);
        };

        setupTextReveal();

        const observer = new MutationObserver(scheduleSetup);
        observer.observe(root, {
            childList: true,
            subtree: true
        });

        return () => {
            window.cancelAnimationFrame(raf);
            observer.disconnect();
            batches.forEach((batch) => batch.kill());
            animatedTargets.forEach((target) => {
                delete target.dataset.textRevealReady;
            });
            gsap.set(Array.from(animatedTargets), {
                clearProps: "opacity,visibility,transform,willChange"
            });
        };
    }, []);
}
