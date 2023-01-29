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
      zIndexRear: [["fill", "none"]],
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
    type: "color",
    name: "Skin color",
    description: "Select the color of the skin",
    styleIndex: 1,
  },
  hairColor: {
    type: "color",
    name: "Hair color",
    description: "Select the color of the hair",
    styleIndex: 2,
  },
  hair: {
    type: "component",
    name: "Hair",
    description: "Select the hair style",
    styleIndex: 1,
    colors: "hairColor",
    colorName: "Hair color",
    colorDicription: "Select the color of the hair",
    colorIndex: 2,
  },
};

export { styleOptions, pathOptions, optionButtons, interfaceTree };
