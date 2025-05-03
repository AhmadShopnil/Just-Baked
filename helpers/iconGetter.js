import * as solidIcons from '@fortawesome/free-solid-svg-icons'; // Import all solid icons

export function getFormattedIcon(iconClass) {
  // Convert "fas fa-table" -> "faTable" to match icon names in FontAwesome
  const formattedIconName = iconClass
    ?.replace(/^fas\s|^far\s/, '') // Remove 'fas ' or 'far ' prefix
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()); // Capitalize letters after hyphen
  
  // Dynamically fetch icon from the imported object
  return solidIcons[formattedIconName] || solidIcons.faQuestionCircle; // Default to 'faQuestionCircle' if not found
}
