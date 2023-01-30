import BaseSkin from "./components/skinComponents/BaseSkin";
import AvatarColorOption from "../../components/buttons/AvatarColorOption";
import MaleCrewCut from "./components/headHairComponents/MaleCrewCut";
import MaleBuzzCut1 from "./components/headHairComponents/MaleBuzzCut1";

const styleOptions = {
  immutable: [
    {
      expressionlessMouth: [
        ["fill", "none"],
        ["stroke-linecap", "round"],
        ["stroke-miterlimit", "10"],
        ["stroke-width", "7px"],
      ],
      eyebrows: [
        ["fill", "none"],
        ["stroke", "#27273d"],
        ["stroke-linecap", "round"],
        ["stroke-miterlimit", "10"],
        ["stroke-width", "7px"],
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
      expressionlessMouth: [["stroke", "#e5b5ac"]],
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
};

const pathOptions = {
  skin: [<BaseSkin />],
  hair: [<MaleCrewCut />, <MaleBuzzCut1 />],
};

const optionButtons = {
  skinColor: [<AvatarColorOption option={styleOptions.skinColor[0]} />],
};

const interfaceTree = {
  skinColor: {
    components: false,
    componentIndex: null,
    title: "Skin color",
    description: null,
    styleIndex: null,
    colors: "skinColor",
    colorTitle: "Skin color",
    colorDicription: "Select the color of the skin",
    colorIndex: 1,
    iconComponentName: "skin",
    iconComponentIndex: 0,
  },
  hair: {
    components: "hair",
    componentIndex: 1,
    title: "Hair",
    description: "Select the hair style",
    styleIndex: 1,
    colors: "hairColor",
    colorTitle: "Hair color",
    colorDicription: "Select the color of the hair",
    colorIndex: 2,
    iconComponentName: "hair",
    iconComponentIndex: 1,
  },
};

export { styleOptions, pathOptions, optionButtons, interfaceTree };
