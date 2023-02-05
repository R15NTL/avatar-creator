import { styleOptions } from "../avatarCreator/avatarTree";

function StyleGenerator({ selectedOptions }) {
  let styleOutput = `  `;

  const optionsNames = Object.keys(styleOptions);

  const selectedStyles = optionsNames.map((optionName, index) => {
    return styleOptions[optionName][selectedOptions[index]];
  });

  let allStyles = {};

  selectedStyles.forEach((option) => {
    for (let className in option) {
      allStyles[className] = option[className];
    }
  });

  for (let className in allStyles) {
    styleOutput += `
            .${className} {
                ${getStylesFromClass(allStyles[className])}
            } 
    `;
  }

  return styleOutput;
}

function getStylesFromClass(styleClass) {
  let output = ` `;
  styleClass.forEach((cssRule) => {
    output += ` 
    ${cssRule[0]}: ${cssRule[1]};
    `;
  });

  return output;
}

export default StyleGenerator;
