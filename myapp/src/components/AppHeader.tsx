import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from '../styles';

interface HeaderProps {
  lastUpdated: Date | null;
  cardCount: number;
}

export const AppHeader = ({ lastUpdated, cardCount }: HeaderProps) => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.appTitle}>นามบัตรไซเบอร์พังค์</Text>
      {lastUpdated && (
        <Text style={headerStyles.lastUpdated}>
          อัปเดตล่าสุด: {lastUpdated.toLocaleTimeString('th-TH')}
        </Text>
      )}
      <Text style={headerStyles.imageNote}>
        รูปโปรไฟล์อาจใช้เวลาในการโหลด
      </Text>
      {cardCount > 0 && (
        <Text style={headerStyles.cardCount}>
          แสดงนามบัตรไซเบอร์ {cardCount} ใบ 
        </Text>
      )}
    </View>
  );
};
