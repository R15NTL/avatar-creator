import BaseSkin from "./components/skinComponents/BaseSkin";
import AvatarColorOption from "../../components/buttons/AvatarColorOption";
import MaleCrewCut1 from "./components/headHairComponents/MaleCrewCut1";
import MaleBuzzCut1 from "./components/headHairComponents/MaleBuzzCut1";
import NewBaseSkin from "./components/skinComponents/NewBaseSkin";
import MaleCrewCut2 from "./components/headHairComponents/MaleCrewCut2";
import NoEyewear from "./components/eyewearComponents/NoEyewear";
import EyebrowBase from "./components/eyebrowComponents/EyebrowBase";
import Eyes from "./components/eyeComponents/Eyes";
import GlassesRound from "./components/eyewearComponents/GlassesRound";
import MaleSmile from "./components/mouthComponents/MaleSmile";
import MaleExpressionless from "./components/mouthComponents/MaleExpressionless";

const styleOptions = {
  immutable: [
    {
      eyebrows: [
        ["fill", "none"],
        ["stroke", "#27273d"],
        ["stroke-linecap", "round"],
        ["stroke-miterlimit", "10"],
        ["stroke-width", "7px"],
      ],
      eye: [["fill", "#27273d"]],
      eyelid: [
        ["fill", "none"],
        ["stroke", "#27273d"],
      ],
    },
  ],
  skinColor: [
    {
      skinPrimary: [["fill", "#f9dcd7"]],
      skinShadowed: [["fill", "#fcc8bc"]],
      leftInnerEar: [["fill", "#e5b5ac"]],
      expressionlessMouth: [["stroke", "#e5b5ac"]],
    },
    {
      skinPrimary: [["fill", "#a65c3b"]],
      skinShadowed: [["fill", "#9e4830"]],
      leftInnerEar: [["fill", "#27273d"]],
      expressionlessMouth: [["stroke", "#27273d"]],
    },
  ],
  hairColor: [
    {
      hairMediumShade: [["fill", "#f6d372"]],
      hairDarkShade: [["fill", "#f6c752"]],
      hairLightShade: [["fill", "#f7db94"]],
    },
    {
      hairMediumShade: [["fill", "#EC40FF"]],
      hairDarkShade: [["fill", "#E500FF"]],
      hairLightShade: [["fill", "#F280FF"]],
    },
  ],
  eyebrows: [
    {
      eyebrow: [["stroke", "#27273d"]],
    },
  ],
};

const pathOptions = {
  skin: [<NewBaseSkin />, <BaseSkin />],
  hair: [<MaleCrewCut2 />, <MaleCrewCut1 />, <MaleBuzzCut1 />],
  eyewear: [<NoEyewear />, <GlassesRound />],
  eyes: [<Eyes />],
  eyebrows: [<EyebrowBase />],
  mouth: [<MaleSmile />, <MaleExpressionless />],
};

const optionButtons = {
  skinColor: [<AvatarColorOption option={styleOptions.skinColor[0]} />],
};

const interfaceTree = {
  skinColor: {
    components: false,
    componentIndex: null,
    componentViewBox: null,
    title: false,
    description: null,
    styleIndex: null,
    colors: "skinColor",
    colorTitle: "Skin color",
    colorDicription: "Select the color of the skin",
    colorIndex: 1,
    iconComponentName: "skin",
    iconComponentIndex: 0,
    iconViewBox: "0 0 512 512",
  },
  hair: {
    components: "hair",
    componentIndex: 1,
    componentViewBox: "0 64 512 256",
    title: "Hair",
    description: "Select the hair style",
    styleIndex: 1,
    colors: "hairColor",
    colorTitle: "Hair color",
    colorDicription: "Select the color of the hair",
    colorIndex: 2,
    iconComponentName: "hair",
    iconComponentIndex: 1,
    iconViewBox: "0 -92 512 512",
  },
  eyewear: {
    components: "eyewear",
    componentIndex: 2,
    componentViewBox: "128 128 256 256",
    title: "Eyewear",
    description: "Select the eyewear",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "eyewear",
    iconComponentIndex: 2,
    iconViewBox: "128 128 256 256",
  },
  mouth: {
    components: "mouth",
    componentIndex: 5,
    componentViewBox: "128 256 256 128",
    title: "Mouth",
    description: "Select the mouth",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "mouth",
    iconComponentIndex: 5,
    iconViewBox: "160 224 192 192",
  },
};

export { styleOptions, pathOptions, optionButtons, interfaceTree };
