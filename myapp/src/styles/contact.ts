import { StyleSheet } from 'react-native';
import { CyberPunkTheme } from '../constants/theme';

const { colors, spacing, radius, shadows, typography } = CyberPunkTheme;

export const contactStyles = StyleSheet.create({
  contactSection: {
    marginBottom: spacing['2xl'],
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.glass,
  },
  contactGrid: {
    gap: spacing.md,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.glass,
    ...shadows.neon,
    shadowColor: colors.primary,
  },
  contactIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary,
    ...shadows.neon,
    shadowColor: colors.primary,
  },
  contactIcon: {
    fontSize: 20,
  },
  contactText: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    fontWeight: typography.weights.semibold,
    flex: 1,
    lineHeight: 24,
  },
});
