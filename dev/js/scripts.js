import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, ExpoScaleEase, RoughEase, SlowMo);

const mainTL = gsap.timeline();

function line1(){
    const tl= gsap.timeline();

    tl.from("#line1", {duration:1, drawSVG: "0%"})

    return tl;
}


mainTL.add(line1());


GSDevTools.create();


