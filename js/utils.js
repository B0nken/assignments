export function showError(containerId, message) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `<div>${message}</div>`;
  }
}

export function scareLevelText(level) {
  switch (level) {
    case 1:
      return "Mysigt";
    case 2:
      return "Lite läskigt";
    case 3:
      return "Obehagligt";
    case 4:
      return "Skräckinjagande";
    case 5:
      return "Ren terror";
    default:
      return "Okänd nivå";
  }
}
