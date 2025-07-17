import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

interface Person {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  university: string;
  skills: string[];
  profileImage?: string;
  profile?: string; // เพิ่มฟิลด์ profile
}

interface NameCardProps {
  person: Person;
  cardStyle: object;
}

const UserIcon = ({ name }: { name?: string }) => (
  <View style={styles.iconContainer}>
    {name ? (
      <Text style={styles.iconText}>{name.charAt(0).toUpperCase()}</Text>
    ) : (
      <Text style={styles.iconText}>👤</Text>
    )}
  </View>
);

const MailIcon = () => (
  <Text style={styles.contactIcon}>📧</Text>
);

const PhoneIcon = () => (
  <Text style={styles.contactIcon}>📞</Text>
);

const LocationIcon = () => (
  <Text style={styles.contactIcon}>📍</Text>
);

const CompanyIcon = () => (
  <Text style={styles.contactIcon}>🏢</Text>
);

const NameCard = ({ person, cardStyle }: NameCardProps) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);
  
  return (
    <View style={[styles.cardContainer, cardStyle]}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              {(person.profileImage || person.profile) && !imageError ? (
                <>
                  <Image 
                    source={{ uri: person.profileImage || person.profile }}
                    style={styles.profileImage}
                    onError={() => {
                      setImageError(true);
                      setImageLoading(false);
                    }}
                    onLoadStart={() => {
                      setImageError(false);
                      setImageLoading(true);
                    }}
                    onLoadEnd={() => setImageLoading(false)}
                  />
                  {imageLoading && (
                    <View style={styles.imageLoadingOverlay}>
                      <ActivityIndicator size="small" color="#FFFFFF" />
                    </View>
                  )}
                </>
              ) : (
                <>
                  {/* Try Avatar Service first */}
                  {!imageError ? (
                    <Image 
                      source={{ 
                        uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=160&background=6366f1&color=ffffff&bold=true&format=png`
                      }}
                      style={styles.profileImage}
                      onError={() => setImageError(true)}
                      onLoadStart={() => setImageLoading(true)}
                      onLoadEnd={() => setImageLoading(false)}
                    />
                  ) : (
                    <View style={styles.fallbackAvatar}>
                      <Text style={styles.avatarText}>{person.name.charAt(0).toUpperCase()}</Text>
                    </View>
                  )}
                  {imageLoading && (
                    <View style={styles.imageLoadingOverlay}>
                      <ActivityIndicator size="small" color="#FFFFFF" />
                    </View>
                  )}
                </>
              )}
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.name}>{person.name}</Text>
              <Text style={styles.title}>{person.title}</Text>
              <View style={styles.universityBadge}>
                <Text style={styles.universityText}>{person.university}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <View style={styles.contactGrid}>
            <View style={styles.contactItem}>
              <View style={styles.contactIconWrapper}>
                <Text style={styles.contactIcon}>✉️</Text>
              </View>
              <Text style={styles.contactText} numberOfLines={1}>{person.email}</Text>
            </View>
            
            <View style={styles.contactItem}>
              <View style={styles.contactIconWrapper}>
                <Text style={styles.contactIcon}>📱</Text>
              </View>
              <Text style={styles.contactText}>{person.phone}</Text>
            </View>
            
            <View style={styles.contactItem}>
              <View style={styles.contactIconWrapper}>
                <Text style={styles.contactIcon}>📍</Text>
              </View>
              <Text style={styles.contactText}>{person.location}</Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.skillsSection}>
          <Text style={styles.skillsTitle}>ความเชี่ยวชาญ</Text>
          <View style={styles.skillsGrid}>
            {person.skills.map((skill: string, index: number) => (
              <View key={index} style={[styles.skillChip, { backgroundColor: `hsl(${(index * 60) % 360}, 70%, 95%)` }]}>
                <Text style={[styles.skillText, { color: `hsl(${(index * 60) % 360}, 70%, 40%)` }]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      const response = await fetch('https://raw.githubusercontent.com/Kritchanaxt/kritchanat_json/refs/heads/main/kritchanat_name_card.json');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Validate and clean the data
      const validatedData = data.filter((person: any) => 
        person.name && 
        person.title && 
        person.email && 
        person.phone && 
        person.location && 
        person.university && 
        Array.isArray(person.skills)
      );
      
      setPeople(validatedData);
      setLastUpdated(new Date());
    } catch (err: any) {
      console.error('Fetch error:', err.message);
      setError('Error: ' + err.message);
    } finally {
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  const onRefresh = () => {
    fetchData(true);
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Kritchanaxt/kritchanat_json/refs/heads/main/kritchanat_name_card.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Validate and clean the data
        const validatedData = data.filter((person: any) => 
          person.name && 
          person.title && 
          person.email && 
          person.phone && 
          person.location && 
          person.university && 
          Array.isArray(person.skills)
        );
        
        setPeople(validatedData);
        setLastUpdated(new Date());
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error.message);
        setError('Error: ' + error.message);
        setLoading(false);
      });
    
    // Set up auto-refresh every 30 seconds to keep data in sync
    const interval = setInterval(fetchData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const cardStyles = [
    { 
      shadowColor: '#4CAF50',
      borderLeftColor: '#4CAF50',
    },   
    { 
      shadowColor: '#2196F3',
      borderLeftColor: '#2196F3',
    },   
    { 
      shadowColor: '#E91E63',
      borderLeftColor: '#E91E63',
    },   
    { 
      shadowColor: '#9C27B0',
      borderLeftColor: '#9C27B0',
    },   
    { 
      shadowColor: '#FF9800',
      borderLeftColor: '#FF9800',
    },   
    { 
      shadowColor: '#F44336',
      borderLeftColor: '#F44336',
    },   
    { 
      shadowColor: '#607D8B',
      borderLeftColor: '#607D8B',
    },   
    { 
      shadowColor: '#00BCD4',
      borderLeftColor: '#00BCD4',
    },   
  ];

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1A237E" />
          <Text style={styles.loadingText}>กำลังโหลดข้อมูล...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>เกิดข้อผิดพลาด: {error}</Text>
          <TouchableOpacity onPress={() => fetchData()}>
            <Text style={styles.retryText}>แตะเพื่อลองใหม่</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#3B82F6']}
            tintColor="#3B82F6"
            title="กำลังซิงค์ข้อมูล..."
            titleColor="#1E293B"
          />
        }
      >
        <View style={styles.headerContainer}>
          <Text style={styles.appTitle}>💼 นามบัตรดิจิทัล</Text>
          <Text style={styles.subtitle}>ดึงลงเพื่อรีเฟรชข้อมูลใหม่</Text>
          {lastUpdated && (
            <Text style={styles.lastUpdated}>
              อัปเดตล่าสุด: {lastUpdated.toLocaleTimeString('th-TH')}
            </Text>
          )}
          <Text style={styles.imageNote}>
            📸 รูปโปรไฟล์อาจใช้เวลาในการโหลด
          </Text>
          {people.length > 0 && (
            <Text style={styles.cardCount}>
              แสดงนามบัตร {people.length} ใบ
            </Text>
          )}
        </View>
        {people.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>ไม่มีข้อมูลนามบัตร</Text>
            <Text style={styles.emptySubtext}>กรุณาลองรีเฟรชข้อมูลใหม่</Text>
          </View>
        ) : (
          <View style={styles.cardsWrapper}>
            {people.map((person, index) => (
              <NameCard
                key={`${person.name}-${index}`}
                person={person}
                cardStyle={cardStyles[index % cardStyles.length]}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  scrollContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: '100%',
  },
  cardsWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1E293B',
    letterSpacing: -0.8,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 16,
    color: '#64748B',
    fontWeight: '600',
  },
  lastUpdated: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    color: '#94A3B8',
  },
  imageNote: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 5,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  cardCount: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#475569',
    fontWeight: '700',
  },
  
  // Modern Card Styles
  cardContainer: {
    marginBottom: 32,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 32,
    borderLeftWidth: 6,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
    transform: [{ scale: 1 }],
  },
  
  // Header Section
  headerSection: {
    marginBottom: 28,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    width: '100%',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
    overflow: 'hidden',
    backgroundColor: '#F8FAFC',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  imageLoadingOverlay: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#475569',
  },
  nameSection: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 8,
    color: '#1E293B',
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  universityBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  universityText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  
  // Contact Section
  contactSection: {
    marginBottom: 28,
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
  },
  contactGrid: {
    gap: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  contactIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactIcon: {
    fontSize: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
    flex: 1,
    lineHeight: 24,
  },
  
  // Skills Section
  skillsSection: {
    marginTop: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
  },
  skillsTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 20,
    color: '#1E293B',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  skillChip: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  skillText: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  
  // Legacy styles (keeping for compatibility)
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  headerText: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    paddingVertical: 2,
  },
  skills: {
    marginTop: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  
  // Loading and Error States
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#1E293B',
    textAlign: 'center',
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  retryText: {
    fontSize: 16,
    color: '#3B82F6',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  emptyText: {
    fontSize: 20,
    color: '#64748B',
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default App;
