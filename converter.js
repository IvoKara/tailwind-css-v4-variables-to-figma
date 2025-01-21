// Function to convert hex to RGBA
export function hexToFigmaRGBA(hex) {
    let r = 0, g = 0, b = 0, a = 1;

    // 3 digits
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    else if (hex.length === 9) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
        a = parseInt(hex[7] + hex[8], 16) / 255; // Convert to a value between 0 and 1
      }

    return { r, g, b, a };
}

// Function to convert rgb to RGBA
export function rgbToFigmaRGBA(rgb) {
    const match = rgb.match(/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/);
    if (match) {
      const [, r, g, b] = match.map(Number);
      return { r, g, b, a: 1 };
    }
    return null;
  }
  
  // Function to convert rgba to RGBA
 export function rgbaToFigmaRGBA(rgba) {
    const match = rgba.match(/rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*([\d.]+)\)/);
    if (match) {
      const [, r, g, b, a] = match.map(Number);
      return { r, g, b, a };
    }
    return null;
  }
  