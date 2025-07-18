import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { NameCard, AppHeader, LoadingScreen, ErrorScreen, EmptyState, CyberPunkBackground } from './src/components';
import { layoutStyles } from './src/styles';
import { usePeopleData } from './src/hooks/usePeopleData';
import { CYBER_PUNK_CARD_COLORS, CyberPunkTheme } from './src/constants';

const App = () => {
  const {
    people,
    loading,
    refreshing,
    error,
    lastUpdated,
    onRefresh,
    fetchData,
  } = usePeopleData();

  if (loading) {
    return (
      <SafeAreaView style={[layoutStyles.container, { backgroundColor: CyberPunkTheme.colors.background }]}>
        <CyberPunkBackground />
        <StatusBar barStyle="light-content" backgroundColor={CyberPunkTheme.colors.background} />
        <LoadingScreen />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[layoutStyles.container, { backgroundColor: CyberPunkTheme.colors.background }]}>
        <CyberPunkBackground />
        <StatusBar barStyle="light-content" backgroundColor={CyberPunkTheme.colors.background} />
        <ErrorScreen error={error} onRetry={() => fetchData()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[layoutStyles.container, { backgroundColor: CyberPunkTheme.colors.background }]}>
      <CyberPunkBackground />
      <StatusBar barStyle="light-content" backgroundColor={CyberPunkTheme.colors.background} />
      <ScrollView 
        contentContainerStyle={layoutStyles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[CyberPunkTheme.colors.primary]}
            tintColor={CyberPunkTheme.colors.primary}
            title="🤖 กำลังซิงค์ข้อมูลไซเบอร์... ⚡"
            titleColor={CyberPunkTheme.colors.textPrimary}
          />
        }
      >
        <AppHeader lastUpdated={lastUpdated} cardCount={people.length} />
        
        {people.length === 0 ? (
          <EmptyState />
        ) : (
          <View style={layoutStyles.cardsWrapper}>
            {people.map((person, index) => (
              <NameCard
                key={`${person.name}-${index}`}
                person={person}
                cardStyle={CYBER_PUNK_CARD_COLORS[index % CYBER_PUNK_CARD_COLORS.length]}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;