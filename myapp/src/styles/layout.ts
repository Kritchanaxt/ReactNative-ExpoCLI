import { StyleSheet } from 'react-native';
import { CyberPunkTheme } from '../constants/theme';

const { colors, spacing, radius } = CyberPunkTheme;

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingVertical: spacing['4xl'],
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    minHeight: '100%',
  },
  cardsWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: spacing.lg,
  },
});
