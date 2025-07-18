import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { stateStyles } from '../styles';
import { CyberPunkTheme } from '../constants/theme';

export const LoadingScreen = () => (
  <View style={stateStyles.loadingContainer}>
    <ActivityIndicator size="large" color={CyberPunkTheme.colors.primary} />
    <Text style={stateStyles.loadingText}>🤖 กำลังเชื่อมต่อเครือข่าย... ⚡</Text>
  </View>
);

interface ErrorScreenProps {
  error: string;
  onRetry: () => void;
}

export const ErrorScreen = ({ error, onRetry }: ErrorScreenProps) => (
  <View style={stateStyles.errorContainer}>
    <Text style={stateStyles.errorText}>🔴 ระบบขัดข้อง: {error} ⚡</Text>
    <TouchableOpacity onPress={onRetry}>
      <Text style={stateStyles.retryText}>💻 แตะเพื่อรีบูตระบบ 🔄</Text>
    </TouchableOpacity>
  </View>
);

export const EmptyState = () => (
  <View style={stateStyles.emptyContainer}>
    <Text style={stateStyles.emptyText}>🤖 ไม่พบข้อมูลในเครือข่าย ⚡</Text>
    <Text style={stateStyles.emptySubtext}>💻 กรุณาซิงค์ข้อมูลใหม่ 🔄</Text>
  </View>
);
