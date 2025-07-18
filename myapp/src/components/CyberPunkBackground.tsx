import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Animated, 
  Dimensions, 
  StyleSheet,
  Easing,
} from 'react-native';
import { CyberPunkTheme, CYBER_EFFECTS } from '../constants/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const { colors } = CyberPunkTheme;

// Matrix Rain Drop Component
const MatrixDrop = ({ 
  char, 
  x, 
  delay, 
  color 
}: { 
  char: string; 
  x: number; 
  delay: number; 
  color: string; 
}) => {
  const animatedValue = useRef(new Animated.Value(-50)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateMatrix = () => {
      // Reset position
      animatedValue.setValue(-50);
      opacityValue.setValue(1);

      // Animate falling
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: screenHeight + 50,
          duration: 3000 + Math.random() * 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.delay(2000),
          Animated.timing(opacityValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        // Restart animation after delay
        setTimeout(animateMatrix, delay);
      });
    };

    // Start with initial delay
    setTimeout(animateMatrix, delay);
  }, [animatedValue, opacityValue, delay]);

  return (
    <Animated.Text
      style={[
        styles.matrixChar,
        {
          left: x,
          color: color,
          transform: [{ translateY: animatedValue }],
          opacity: opacityValue,
        },
      ]}
    >
      {char}
    </Animated.Text>
  );
};

// Floating Particles Component
const FloatingParticle = ({ 
  x, 
  y, 
  color, 
  size, 
  delay 
}: { 
  x: number; 
  y: number; 
  color: string; 
  size: number; 
  delay: number; 
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const animateParticle = () => {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: 2000 + Math.random() * 1000,
              easing: Easing.inOut(Easing.quad),
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: 2000 + Math.random() * 1000,
              easing: Easing.inOut(Easing.quad),
              useNativeDriver: true,
            }),
          ]),
          Animated.loop(
            Animated.sequence([
              Animated.timing(scaleValue, {
                toValue: 1,
                duration: 1500,
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true,
              }),
              Animated.timing(scaleValue, {
                toValue: 0.5,
                duration: 1500,
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true,
              }),
            ])
          ),
        ])
      ).start();
    };

    setTimeout(animateParticle, delay);
  }, [animatedValue, scaleValue, delay]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          left: x,
          top: y,
          backgroundColor: color,
          width: size,
          height: size,
          transform: [
            { translateY },
            { scale: scaleValue },
          ],
        },
      ]}
    />
  );
};

// Scan Line Component
const ScanLine = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateScanLine = () => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    animateScanLine();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenHeight],
  });

  return (
    <Animated.View
      style={[
        styles.scanLine,
        {
          transform: [{ translateY }],
        },
      ]}
    />
  );
};

// Grid Lines Component
const GridLines = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.1, 0.3, 0.1],
  });

  return (
    <Animated.View style={[styles.gridContainer, { opacity }]}>
      {/* Vertical Lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <View
          key={`v-${index}`}
          style={[
            styles.gridLine,
            {
              left: (screenWidth / 10) * index,
              height: screenHeight,
              width: 1,
            },
          ]}
        />
      ))}
      {/* Horizontal Lines */}
      {Array.from({ length: 15 }).map((_, index) => (
        <View
          key={`h-${index}`}
          style={[
            styles.gridLine,
            {
              top: (screenHeight / 15) * index,
              width: screenWidth,
              height: 1,
            },
          ]}
        />
      ))}
    </Animated.View>
  );
};

// Main Animated Background Component
export const CyberPunkBackground = () => {
  // Generate matrix characters
  const matrixChars = Array.from({ length: 20 }).map((_, index) => ({
    char: CYBER_EFFECTS.matrixChars[Math.floor(Math.random() * CYBER_EFFECTS.matrixChars.length)],
    x: Math.random() * screenWidth,
    delay: Math.random() * 3000,
    color: [colors.neonGreen, colors.primary, colors.neonPink][Math.floor(Math.random() * 3)],
  }));

  // Generate floating particles
  const particles = Array.from({ length: 15 }).map((_, index) => ({
    x: Math.random() * screenWidth,
    y: Math.random() * screenHeight,
    color: [colors.primary, colors.neonPink, colors.neonPurple, colors.neonGreen][Math.floor(Math.random() * 4)],
    size: 3 + Math.random() * 5,
    delay: Math.random() * 2000,
  }));

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <View style={styles.gradientBackground} />
      
      {/* Grid Lines */}
      <GridLines />
      
      {/* Matrix Rain */}
      {matrixChars.map((item, index) => (
        <MatrixDrop
          key={`matrix-${index}`}
          char={item.char}
          x={item.x}
          delay={item.delay}
          color={item.color}
        />
      ))}
      
      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <FloatingParticle
          key={`particle-${index}`}
          x={particle.x}
          y={particle.y}
          color={particle.color}
          size={particle.size}
          delay={particle.delay}
        />
      ))}
      
      {/* Scan Line */}
      <ScanLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background,
    opacity: 0.9,
  },
  gridContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: colors.primary,
    opacity: 0.1,
  },
  matrixChar: {
    position: 'absolute',
    fontSize: 14,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    textShadowColor: colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  particle: {
    position: 'absolute',
    borderRadius: 50,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.primary,
    opacity: 0.3,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
