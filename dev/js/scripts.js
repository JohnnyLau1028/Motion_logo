import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, CustomEase);

const mainTL = gsap.timeline();

function line(){
    const tl= gsap.timeline();

    tl.from("#line1", {duration: 3, drawSVG: 0, ease: "power1.out"});
    tl.from("#line2", {duration: 3, drawSVG: 0, ease: "power2.out", delay: -5});
    tl.from("#line3", {duration: 3, drawSVG: 0, ease: "power2.out", delay: -5});
    tl.from("#linelast", {duration: 3, drawSVG: 0, ease: "power2.out", delay: -5});
    
    return tl;
}

function stroke(){
    const tl= gsap.timeline();

    tl.from("#stroke1", {duration: .8, alpha: 0, x: -800, ease: "power1.out"}, "same")
    tl.to("#stroke1", {duration: .8, x: 800, ease: "power1.out"}, "same");
    tl.from("#stroke2", {duration: .6, alpha: 0, x: -800, ease: "power1.out"}, "same")
    tl.to("#stroke2", {duration: .6, x: 800, ease: "power1.out"}, "same");
    tl.from("#stroke3", {duration: 1.2, alpha: 0, x: -800, ease: "power1.out"}, "same")
    tl.to("#stroke3", {duration: 1.2, x: 800, ease: "power1.out"}, "same");
    tl.from("#stroke4", {duration: .75, alpha: 0, x: -800, ease: "power1.out"}, "same")
    tl.to("#stroke4", {duration: .75, x: 800, ease: "power1.out"}, "same");
    tl.from("#stroke5", {duration: 1, alpha: 0, x: -800, ease: "power1.out"}, "same")
    tl.to("#stroke5", {duration: 1, x: 800, ease: "power1.out"}, "same");
    
    return tl;
}

mainTL.add(line())
.add(stroke());


GSDevTools.create();


