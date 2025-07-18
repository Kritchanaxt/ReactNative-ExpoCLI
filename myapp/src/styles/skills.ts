import { StyleSheet } from 'react-native';
import { CyberPunkTheme } from '../constants/theme';

const { colors, spacing, radius, shadows, typography } = CyberPunkTheme;

export const skillsStyles = StyleSheet.create({
  skillsSection: {
    marginTop: spacing.sm,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.glass,
  },
  skillsTitle: {
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.black,
    marginBottom: spacing.lg,
    color: colors.textPrimary,
    textAlign: 'center',
    letterSpacing: -0.3,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'center',
  },
  skillChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
    ...shadows.neon,
    shadowColor: colors.primary,
  },
  skillText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.extrabold,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    textAlign: 'center',
    color: colors.textSecondary,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
