import { StyleSheet } from 'react-native';
import { CyberPunkTheme } from '../constants/theme';

const { colors, spacing, radius, shadows, typography } = CyberPunkTheme;

export const headerStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: spacing['4xl'],
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: radius['2xl'],
    marginHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
    ...shadows.neon,
    shadowColor: colors.primary,
  },
  appTitle: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.black,
    textAlign: 'center',
    marginBottom: spacing.md,
    color: colors.textPrimary,
    letterSpacing: -0.8,
    textShadowColor: colors.primary,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    textAlign: 'center',
    marginBottom: spacing.md,
    color: colors.textSecondary,
    fontWeight: typography.weights.semibold,
  },
  lastUpdated: {
    fontSize: typography.sizes.sm,
    textAlign: 'center',
    marginBottom: spacing.xs,
    color: colors.textMuted,
  },
  imageNote: {
    fontSize: typography.sizes.xs,
    textAlign: 'center',
    marginBottom: spacing.xs,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  cardCount: {
    fontSize: typography.sizes.lg,
    textAlign: 'center',
    marginBottom: spacing.md,
    color: colors.primary,
    fontWeight: typography.weights.extrabold,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
