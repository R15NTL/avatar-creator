import NewBaseSkin from "./avatarComponents/skin/NewBaseSkin";
import MaleCrewCut1 from "./avatarComponents/headHair/MaleCrewCut1";
import MaleBalding1 from "./avatarComponents/headHair/MaleBalding1";
import MaleBalding2 from "./avatarComponents/headHair/MaleBalding2";
import MaleBuzzCut1 from "./avatarComponents/headHair/MaleBuzzCut1";
import MaleCrewCut2 from "./avatarComponents/headHair/MaleCrewCut2";
import MaleCrewCut3 from "./avatarComponents/headHair/MaleCrewCut3";
import MaleLong1 from "./avatarComponents/headHair/MaleLong1";
import MaleLong2 from "./avatarComponents/headHair/MaleLong2";
import ManBun from "./avatarComponents/headHair/ManBun";
import MaleAfro from "./avatarComponents/headHair/MaleAfro";
import MaleBald from "./avatarComponents/headHair/MaleBald";
import FemaleLong1 from "./avatarComponents/headHair/FemaleLong1";
import FemaleLong2 from "./avatarComponents/headHair/FemaleLong2";
import FemaleLong3 from "./avatarComponents/headHair/FemaleLong3";
import FemaleLong4 from "./avatarComponents/headHair/FemaleLong4";
import FemaleMedium1 from "./avatarComponents/headHair/FemaleMedium1";
import FemaleMedium2 from "./avatarComponents/headHair/FemaleMedium2";
import FemaleShort1 from "./avatarComponents/headHair/FemaleShort1";
import FemaleBun from "./avatarComponents/headHair/FemaleBun";
import FemaleAfro from "./avatarComponents/headHair/FemaleAfro";
import NoBeard from "./avatarComponents/beard/NoBeard";
import BeardMedium1 from "./avatarComponents/beard/BeardMedium1";
import BeardMedium2 from "./avatarComponents/beard/BeardMedium2";
import Goatee1 from "./avatarComponents/beard/Goatee1";
import Goatee2 from "./avatarComponents/beard/Goatee2";
import Mustache from "./avatarComponents/beard/Mustache";
import NeckBeard from "./avatarComponents/beard/NeckBeard";
import Stubble from "./avatarComponents/beard/Stubble";
import NoEyewear from "./avatarComponents/eyewear/NoEyewear";
import EyebrowBase from "./avatarComponents/eyebrow/EyebrowBase";
import Eyes from "./avatarComponents/eye/Eyes";
import GlassesRound from "./avatarComponents/eyewear/GlassesRound";
import GlassesSquare from "./avatarComponents/eyewear/GlassesSquare";
import MaleSmile from "./avatarComponents/mouth/MaleSmile";
import MaleExpressionless from "./avatarComponents/mouth/MaleExpressionless";
import FemaleSmile from "./avatarComponents/mouth/FemaleSmile";
import FemaleExpressionless from "./avatarComponents/mouth/FemaleExpressionless";
import Background from "./avatarComponents/background/Background";
import Suit from "./avatarComponents/clothing/Suit";
import Bowtie from "./avatarComponents/clothing/Bowtie";
import Jacket1 from "./avatarComponents/clothing/Jacket1";
import Jacket2 from "./avatarComponents/clothing/Jacket2";
import Jacket3 from "./avatarComponents/clothing/Jacket3";
import JacketFemale from "./avatarComponents/clothing/JacketFemale";
import Shirt from "./avatarComponents/clothing/Shirt";
import TShirt1 from "./avatarComponents/clothing/TShirt1";
import TShirt2 from "./avatarComponents/clothing/TShirt2";
import VNeck1 from "./avatarComponents/clothing/VNeck1";
import VNeck2 from "./avatarComponents/clothing/VNeck2";
import NoEarrings from "./avatarComponents/earrings/NoEarrings";
import HoopEarrings from "./avatarComponents/earrings/HoopEarrings";
import RoundEarrings from "./avatarComponents/earrings/RoundEarrings";
import SquareEarring from "./avatarComponents/earrings/SquareEarring";
import BeardIcon from "./avatarComponents/thumbnailIcons/BeardIcon";
import ClothingIcon from "./avatarComponents/thumbnailIcons/ClothingIcon";
import SkinColorIcon from "./avatarComponents/thumbnailIcons/SkinColorIcon";
import EyewearIcon from "./avatarComponents/thumbnailIcons/EyewearIcon";
import MouthIcon from "./avatarComponents/thumbnailIcons/MouthIcon";
import HairIcon from "./avatarComponents/thumbnailIcons/HairIcon";
import EyebrowsIcon from "./avatarComponents/thumbnailIcons/EyebrowsIcon";
import EarringsIcon from "./avatarComponents/thumbnailIcons/EarringsIcon";
import BackgroundIcon from "./avatarComponents/thumbnailIcons/BackgroundIcon";

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
      skinPrimary: [["fill", "#F5C3BA"]],
      skinShadowed: [["fill", "#FAAE9D"]],
      leftInnerEar: [["fill", "#DEA298"]],
      expressionlessMouth: [["stroke", "#DEA298"]],
    },
    {
      skinPrimary: [["fill", "#F0AA9D"]],
      skinShadowed: [["fill", "#F9957F"]],
      leftInnerEar: [["fill", "#D78F82"]],
      expressionlessMouth: [["stroke", "#D78F82"]],
    },
    // dark
    {
      skinPrimary: [["fill", "#CD8D6F"]],
      skinShadowed: [["fill", "#CE7860"]],
      leftInnerEar: [["fill", "#C55B3E"]],
      expressionlessMouth: [["stroke", "#C55B3E"]],
    },
    {
      skinPrimary: [["fill", "#C98465"]],
      skinShadowed: [["fill", "#CB6E55"]],
      leftInnerEar: [["fill", "#B95337"]],
      expressionlessMouth: [["stroke", "#B95337"]],
    },
    {
      skinPrimary: [["fill", "#C57B59"]],
      skinShadowed: [["fill", "#C66347"]],
      leftInnerEar: [["fill", "#A74B32"]],
      expressionlessMouth: [["stroke", "#A74B32"]],
    },
    {
      skinPrimary: [["fill", "#BF6F4A"]],
      skinShadowed: [["fill", "#BE573A"]],
      leftInnerEar: [["fill", "#93422C"]],
      expressionlessMouth: [["stroke", "#93422C"]],
    },
    {
      skinPrimary: [["fill", "#B56540"]],
      skinShadowed: [["fill", "#AD4F35"]],
      leftInnerEar: [["fill", "#7F3926"]],
      expressionlessMouth: [["stroke", "#7F3926"]],
    },
    {
      skinPrimary: [["fill", "#a65c3b"]],
      skinShadowed: [["fill", "#9e4830"]],
      leftInnerEar: [["fill", "#6C3020"]],
      expressionlessMouth: [["stroke", "#6C3020"]],
    },
    // yellow
    {
      skinPrimary: [["fill", "#FFD99F"]],
      skinShadowed: [["fill", "#F2CB91"]],
      leftInnerEar: [["fill", "#C2A880"]],
      expressionlessMouth: [["stroke", "#C2A880"]],
    },
    {
      skinPrimary: [["fill", "#FFD391"]],
      skinShadowed: [["fill", "#F0C27D"]],
      leftInnerEar: [["fill", "#B8996A"]],
      expressionlessMouth: [["stroke", "#B8996A"]],
    },
    {
      skinPrimary: [["fill", "#FFC772"]],
      skinShadowed: [["fill", "#EDB868"]],
      leftInnerEar: [["fill", "#B18F5D"]],
      expressionlessMouth: [["stroke", "#B18F5D"]],
    },
  ],
  hairColor: [
    // brown
    {
      hairDarkShade: [["fill", "#B15F2C"]],
      hairMediumShade: [
        ["fill", "#CF763F"],
        ["stroke", "#CF763F"],
      ],
      hairLightShade: [["fill", "#D99165"]],
    },
    {
      hairDarkShade: [["fill", "#8A4B23"]],
      hairMediumShade: [
        ["fill", "#B15F2C"],
        ["stroke", "#B15F2C"],
      ],
      hairLightShade: [["fill", "#CF763F"]],
    },
    {
      hairDarkShade: [["fill", "#633519"]],
      hairMediumShade: [
        ["fill", "#77401E"],
        ["stroke", "#77401E"],
      ],
      hairLightShade: [["fill", "#8A4B23"]],
    },
    // yellow
    {
      hairDarkShade: [["fill", "#f6c752"]],
      hairMediumShade: [
        ["fill", "#F7CF69"],
        ["stroke", "#F7CF69"],
      ],
      hairLightShade: [["fill", "#F8D782"]],
    },
    {
      hairDarkShade: [["fill", "#F3B924"]],
      hairMediumShade: [
        ["fill", "#F6C752"],
        ["stroke", "#F6C752"],
      ],
      hairLightShade: [["fill", "#F7CF69"]],
    },
    {
      hairDarkShade: [["fill", "#DDA20C"]],
      hairMediumShade: [
        ["fill", "#F3B924"],
        ["stroke", "#F3B924"],
      ],
      hairLightShade: [["fill", "#F6C752"]],
    },
    // orange
    {
      hairDarkShade: [["fill", "#FF6403"]],
      hairMediumShade: [
        ["fill", "#FF7D2C"],
        ["stroke", "#FF7D2C"],
      ],
      hairLightShade: [["fill", "#FF904C"]],
    },
    {
      hairDarkShade: [["fill", "#D75200"]],
      hairMediumShade: [
        ["fill", "#FF6403"],
        ["stroke", "#FF6403"],
      ],
      hairLightShade: [["fill", "#FF7D2C"]],
    },
    {
      hairDarkShade: [["fill", "#AC4200"]],
      hairMediumShade: [
        ["fill", "#D75200"],
        ["stroke", "#D75200"],
      ],
      hairLightShade: [["fill", "#FF6403"]],
    },
    // black
    {
      hairDarkShade: [["fill", "#222235"]],
      hairMediumShade: [
        ["fill", "#27273D"],
        ["stroke", "#27273D"],
      ],
      hairLightShade: [["fill", "#3F3F62"]],
    },
    // grey
    {
      hairDarkShade: [["fill", "#3F3F62"]],
      hairMediumShade: [
        ["fill", "#555585"],
        ["stroke", "#555585"],
      ],
      hairLightShade: [["fill", "#7171A4"]],
    },
    {
      hairDarkShade: [["fill", "#555585"]],
      hairMediumShade: [
        ["fill", "#7171A4"],
        ["stroke", "#7171A4"],
      ],
      hairLightShade: [["fill", "#9494BB"]],
    },
    {
      hairDarkShade: [["fill", "#7171A4"]],
      hairMediumShade: [
        ["fill", "#9494BB"],
        ["stroke", "#9494BB"],
      ],
      hairLightShade: [["fill", "#B8B8D2"]],
    },
    {
      hairDarkShade: [["fill", "#9494BB"]],
      hairMediumShade: [
        ["fill", "#B8B8D2"],
        ["stroke", "#B8B8D2"],
      ],
      hairLightShade: [["fill", "#DBDBE8"]],
    },
    {
      hairDarkShade: [["fill", "#B8B8D2"]],
      hairMediumShade: [
        ["fill", "#DBDBE8"],
        ["stroke", "#DBDBE8"],
      ],
      hairLightShade: [["fill", "#FFFFFF"]],
    },

    // pink
    {
      hairDarkShade: [["fill", "#E500FF"]],
      hairMediumShade: [
        ["fill", "#EC40FF"],
        ["stroke", "#EC40FF"],
      ],
      hairLightShade: [["fill", "#F280FF"]],
    },
    // blue
    {
      hairDarkShade: [["fill", "#00F2FF"]],
      hairMediumShade: [
        ["fill", "#49F6FF"],
        ["stroke", "#49F6FF"],
      ],
      hairLightShade: [["fill", "#92FAFF"]],
    },
  ],
  eyebrows: [
    // black
    {
      eyebrow: [["stroke", "#27273D"]],
    },
    //grey
    {
      eyebrow: [["stroke", "#555585"]],
    },
    {
      eyebrow: [["stroke", "#7171A4"]],
    },
    {
      eyebrow: [["stroke", "#9494BB"]],
    },
    {
      eyebrow: [["stroke", "#B8B8D2"]],
    },
    // brown
    {
      eyebrow: [["stroke", "#CF763F"]],
    },
    {
      eyebrow: [["stroke", "#B15F2C"]],
    },
    {
      eyebrow: [["stroke", "#77401E"]],
    },
    // yellow
    {
      eyebrow: [["stroke", "#F7CF69"]],
    },
    {
      eyebrow: [["stroke", "#F6C752"]],
    },
    {
      eyebrow: [["stroke", "#F3B924"]],
    },
    // orange
    {
      eyebrow: [["stroke", "#FF7D2C"]],
    },
    {
      eyebrow: [["stroke", "#FF6403"]],
    },
    {
      eyebrow: [["stroke", "#D75200"]],
    },
  ],
  background: [
    {
      background: [["fill", "#B99095"]],
      backgroundShadow: [["fill", "#B18388"]],
    },
    {
      background: [["fill", "#FCB5AC"]],
      backgroundShadow: [["fill", "#FB9B8E"]],
    },
    {
      background: [["fill", "#B5E5CF"]],
      backgroundShadow: [["fill", "#9EDDC1"]],
    },
    {
      background: [["fill", "#3D5B59"]],
      backgroundShadow: [["fill", "#344F4D"]],
    },
    {
      background: [["fill", "#7EC8E3"]],
      backgroundShadow: [["fill", "#69BFDE"]],
    },
  ],
  earrings: [
    {
      earring: [["fill", "#ffffff"]],
    },
    {
      earring: [["fill", "#080f0f"]],
    },
    {
      earring: [["fill", "#566563"]],
    },
    {
      earring: [["fill", "#a4bab7"]],
    },
    {
      earring: [["fill", "#EFF2C0"]],
    },
    {
      earring: [["fill", "#BEA57D"]],
    },
    {
      earring: [["fill", "#A52422"]],
    },
    {
      earring: [["fill", "#f6c752"]],
    },
  ],
};

const pathOptions = {
  background: [<Background />],
  skin: [<NewBaseSkin />],
  hair: [
    <MaleCrewCut2 />,
    <MaleCrewCut1 />,
    <MaleCrewCut3 />,
    <MaleBalding1 />,
    <MaleBalding2 />,
    <MaleBuzzCut1 />,
    <MaleLong1 />,
    <MaleLong2 />,
    <ManBun />,
    <MaleAfro />,
    <MaleBald />,
    <FemaleLong1 />,
    <FemaleLong2 />,
    <FemaleLong3 />,
    <FemaleLong4 />,
    <FemaleMedium1 />,
    <FemaleMedium2 />,
    <FemaleShort1 />,
    <FemaleBun />,
    <FemaleAfro />,
  ],
  eyewear: [<NoEyewear />, <GlassesRound />, <GlassesSquare />],
  eyes: [<Eyes />],
  eyebrows: [<EyebrowBase />],
  clothing: [
    <Jacket1 />,
    <Suit />,
    <VNeck1 />,
    <VNeck2 />,
    <TShirt1 />,
    <TShirt2 />,
    <Shirt />,

    <Jacket2 />,
    <Jacket3 />,
    <JacketFemale />,
    <Bowtie />,
  ],
  beard: [
    <NoBeard />,
    <BeardMedium1 />,
    <BeardMedium2 />,
    <Goatee1 />,
    <Goatee2 />,
    <Mustache />,
    <NeckBeard />,
    <Stubble />,
  ],
  mouth: [
    <MaleSmile />,
    <MaleExpressionless />,
    <FemaleSmile />,
    <FemaleExpressionless />,
  ],
  earrings: [
    <NoEarrings />,
    <HoopEarrings />,
    <RoundEarrings />,
    <SquareEarring />,
  ],
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
    icon: <SkinColorIcon />,
  },
  hair: {
    components: "hair",
    componentIndex: 2,
    componentViewBox: "0 0 512 414",
    title: "Hair",
    description: "Select the hair style",
    styleIndex: 1,
    colors: "hairColor",
    colorTitle: "Hair color",
    colorDicription: "Select the color of the hair",
    colorIndex: 2,
    iconComponentName: "hair",
    iconComponentIndex: 2,
    iconViewBox: "0 -92 512 512",
    icon: <HairIcon />,
  },
  beard: {
    components: "beard",
    componentIndex: 7,
    componentViewBox: "0 0 512 512",
    title: "Beard",
    description: "Select the beard",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "beard",
    iconComponentIndex: 7,
    iconViewBox: "0 0 512 512",
    icon: <BeardIcon />,
  },
  eyewear: {
    components: "eyewear",
    componentIndex: 3,
    componentViewBox: "128 128 256 256",
    title: "Eyewear",
    description: "Select the eyewear",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "eyewear",
    iconComponentIndex: 3,
    iconViewBox: "128 128 256 256",
    icon: <EyewearIcon />,
  },
  mouth: {
    components: "mouth",
    componentIndex: 8,
    componentViewBox: "128 256 256 128",
    title: "Mouth",
    description: "Select the mouth",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "mouth",
    iconComponentIndex: 8,
    iconViewBox: "160 224 192 192",
    icon: <MouthIcon />,
  },
  clothing: {
    components: "clothing",
    componentIndex: 6,
    componentViewBox: "0 256 512 256",
    title: "Clothing",
    description: "Select the clothing",
    styleIndex: 1,
    colors: false,
    colorTitle: null,
    colorDicription: null,
    colorIndex: null,
    iconComponentName: "clothing",
    iconComponentIndex: 6,
    iconViewBox: "0 0 10 512",
    icon: <ClothingIcon />,
  },
  eyebrows: {
    components: false,
    componentIndex: null,
    componentViewBox: null,
    title: null,
    description: "Select the eyebrow color",
    styleIndex: null,
    colors: "eyebrows",
    colorTitle: "Eyebrows",
    colorDicription: "Select the color of the hair",
    colorIndex: 3,
    iconComponentName: "hair",
    iconComponentIndex: 2,
    iconViewBox: "0 0 512 512",
    icon: <EyebrowsIcon />,
  },
  earrings: {
    components: "earrings",
    componentIndex: 9,
    componentViewBox: "0 0 512 512",
    title: "Earrings",
    description: "Select the earrings",
    styleIndex: 1,
    colors: "earrings",
    colorTitle: "Earring color",
    colorDicription: "Select the color of the earrings",
    colorIndex: 5,
    iconComponentName: "clothing",
    iconComponentIndex: 6,
    iconViewBox: "0 0 512 512",
    icon: <EarringsIcon />,
  },
  background: {
    components: false,
    componentIndex: null,
    componentViewBox: null,
    title: false,
    description: null,
    styleIndex: null,
    colors: "background",
    colorTitle: "Background",
    colorDicription: "Select the color of the background",
    colorIndex: 4,
    iconComponentName: "",
    iconComponentIndex: 0,
    iconViewBox: "0 0 512 512",
    icon: <BackgroundIcon />,
  },
};

export { styleOptions, pathOptions, interfaceTree };
