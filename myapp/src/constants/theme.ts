// 🤖⚡ Cyber Punk Theme - ธีมไซเบอร์พังค์ล้ำสมัย
export const CyberPunkTheme = {
  // Primary Colors - สีหลัก
  colors: {
    // Neon Electric Colors - สีนีออนไฟฟ้า
    primary: '#00FFFF', // Cyan Neon
    primaryDark: '#0080FF', // Electric Blue
    primaryLight: '#40E0D0', // Turquoise
    
    // Dark Cyber Background - พื้นหลังไซเบอร์เข้ม
    background: '#0A0A0F', // Deep Space Black
    surface: '#1A1A2E', // Dark Navy
    surfaceLight: '#16213E', // Midnight Blue
    
    // Neon Accent Colors - สีนีออนเสริม
    neonPink: '#FF00FF', // Hot Pink
    neonGreen: '#00FF41', // Matrix Green
    neonPurple: '#8A2BE2', // Blue Violet
    neonOrange: '#FF6600', // Electric Orange
    neonYellow: '#FFFF00', // Electric Yellow
    
    // Text Colors - สีข้อความ
    textPrimary: '#FFFFFF', // Pure White
    textSecondary: '#00FFFF', // Cyan
    textMuted: '#888EFF', // Light Purple
    textAccent: '#FF00FF', // Hot Pink
    
    // Glass & Transparency - แก้วและความโปร่งใส
    glass: 'rgba(0, 255, 255, 0.1)', // Cyan Glass
    glassStrong: 'rgba(0, 255, 255, 0.2)',
    glassPink: 'rgba(255, 0, 255, 0.1)', // Pink Glass
    glassGreen: 'rgba(0, 255, 65, 0.1)', // Green Glass
    
    // Status Colors
    success: '#00FF41',
    warning: '#FFFF00',
    error: '#FF0040',
    
    // Gradients Base
    gradientStart: '#0A0A0F',
    gradientEnd: '#1A1A2E',
  },
  
  // Typography - ตัวอักษร
  typography: {
    fontFamily: {
      regular: 'System',
      mono: 'Courier New', // เพิ่ม monospace สำหรับ cyber feel
      bold: 'System',
      black: 'System',
    },
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      '2xl': 20,
      '3xl': 24,
      '4xl': 32,
      '5xl': 48,
      '6xl': 64, // เพิ่มขนาดใหญ่สำหรับ cyberpunk effect
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    } as const,
  },
  
  // Shadows & Glows - เงาและแสงเรืองแสง
  shadows: {
    neon: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 8,
    },
    neonStrong: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 12,
    },
    cyber: {
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.6,
      shadowRadius: 15,
      elevation: 10,
    },
    floating: {
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 25,
      elevation: 16,
    },
  },
  
  // Border Radius - ความโค้ง
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    full: 9999,
  },
  
  // Spacing - ระยะห่าง
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
    '6xl': 64,
  },
  
  // Animations - แอนิเมชั่น
  animations: {
    pulse: {
      duration: 2000,
      iterations: -1, // infinite
    },
    glow: {
      duration: 1500,
      iterations: -1,
    },
    float: {
      duration: 3000,
      iterations: -1,
    },
    matrix: {
      duration: 4000,
      iterations: -1,
    },
  },
  
  // Gradients - ไล่สี
  gradients: {
    cyber: ['#0A0A0F', '#1A1A2E', '#16213E'],
    neon: ['#00FFFF', '#FF00FF', '#00FF41'],
    electric: ['#0080FF', '#00FFFF', '#8A2BE2'],
    matrix: ['#000000', '#003300', '#00FF41'],
    sunset: ['#FF6600', '#FF00FF', '#8A2BE2'],
  },
};

// Cyber Punk Card Colors - สีการ์ดแบบไซเบอร์พังค์
export const CYBER_PUNK_CARD_COLORS = [
  { 
    shadowColor: '#00FFFF',
    borderLeftColor: '#00FFFF',
    glowColor: 'rgba(0, 255, 255, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#FF00FF',
    borderLeftColor: '#FF00FF',
    glowColor: 'rgba(255, 0, 255, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#00FF41',
    borderLeftColor: '#00FF41',
    glowColor: 'rgba(0, 255, 65, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#8A2BE2',
    borderLeftColor: '#8A2BE2',
    glowColor: 'rgba(138, 43, 226, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#FF6600',
    borderLeftColor: '#FF6600',
    glowColor: 'rgba(255, 102, 0, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#FFFF00',
    borderLeftColor: '#FFFF00',
    glowColor: 'rgba(255, 255, 0, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#0080FF',
    borderLeftColor: '#0080FF',
    glowColor: 'rgba(0, 128, 255, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
  { 
    shadowColor: '#40E0D0',
    borderLeftColor: '#40E0D0',
    glowColor: 'rgba(64, 224, 208, 0.5)',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
  },   
];

// Animation values
export const ANIMATION = {
  duration: {
    ultraFast: 100,
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 1000,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

// Cyber Punk Effects
export const CYBER_EFFECTS = {
  // Matrix Rain Effect Characters
  matrixChars: ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ'],
  
  // Glitch Effect
  glitchColors: ['#FF0040', '#00FFFF', '#FF00FF', '#00FF41'],
  
  // Scan Line Animation
  scanLineHeight: 2,
  scanLineOpacity: 0.1,
};
