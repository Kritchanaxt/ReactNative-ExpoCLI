import { StyleSheet } from 'react-native';
import { CyberPunkTheme } from '../constants/theme';

const { colors, spacing, radius, shadows, typography } = CyberPunkTheme;

export const stateStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: spacing.lg,
    fontSize: typography.sizes.lg,
    color: colors.textPrimary,
    textAlign: 'center',
    fontWeight: typography.weights.medium,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
  },
  errorText: {
    fontSize: typography.sizes.lg,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.lg,
    fontWeight: typography.weights.medium,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  retryText: {
    fontSize: typography.sizes.lg,
    color: colors.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: typography.weights.semibold,
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: spacing['5xl'],
    backgroundColor: colors.surface,
    borderRadius: radius['2xl'],
    marginHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.glass,
    ...shadows.neon,
    shadowColor: colors.primary,
  },
  emptyText: {
    fontSize: typography.sizes.xl,
    color: colors.textSecondary,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
    textAlign: 'center',
    textShadowColor: colors.primaryDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  emptySubtext: {
    fontSize: typography.sizes.md,
    color: colors.textMuted,
    textAlign: 'center',
    fontWeight: typography.weights.medium,
  },
});
