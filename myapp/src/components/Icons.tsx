import React from 'react';
import { View, Text } from 'react-native';
import { legacyStyles } from '../styles';

interface UserIconProps {
  name?: string;
}

export const UserIcon = ({ name }: UserIconProps) => (
  <View style={legacyStyles.iconContainer}>
    {name ? (
      <Text style={legacyStyles.iconText}>{name.charAt(0).toUpperCase()}</Text>
    ) : (
      <Text style={legacyStyles.iconText}>👤</Text>
    )}
  </View>
);

export const MailIcon = () => (
  <Text style={{ fontSize: 20 }}>�</Text>
);

export const PhoneIcon = () => (
  <Text style={{ fontSize: 20 }}>�</Text>
);

export const LocationIcon = () => (
  <Text style={{ fontSize: 20 }}>🌐</Text>
);

export const CompanyIcon = () => (
  <Text style={{ fontSize: 20 }}>🏢</Text>
);
