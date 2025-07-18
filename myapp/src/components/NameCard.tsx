import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NameCardProps } from '../types';
import {
  cardStyles,
  contactStyles,
  skillsStyles,
} from '../styles';

export const NameCard = ({ person, cardStyle }: NameCardProps) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);
  
  return (
    <View style={[cardStyles.cardContainer, cardStyle]}>
      <View style={cardStyles.card}>
        {/* Header Section */}
        <View style={cardStyles.headerSection}>
          <View style={cardStyles.profileSection}>
            <View style={cardStyles.avatarContainer}>
              {(person.profileImage || person.profile) && !imageError ? (
                <>
                  <Image 
                    source={{ uri: person.profileImage || person.profile }}
                    style={cardStyles.profileImage}
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
                    <View style={cardStyles.imageLoadingOverlay}>
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
                      style={cardStyles.profileImage}
                      onError={() => setImageError(true)}
                      onLoadStart={() => setImageLoading(true)}
                      onLoadEnd={() => setImageLoading(false)}
                    />
                  ) : (
                    <View style={cardStyles.fallbackAvatar}>
                      <Text style={cardStyles.avatarText}>{person.name.charAt(0).toUpperCase()}</Text>
                    </View>
                  )}
                  {imageLoading && (
                    <View style={cardStyles.imageLoadingOverlay}>
                      <ActivityIndicator size="small" color="#FFFFFF" />
                    </View>
                  )}
                </>
              )}
            </View>
            <View style={cardStyles.nameSection}>
              <Text style={cardStyles.name}>{person.name}</Text>
              <Text style={cardStyles.title}>{person.title}</Text>
              <View style={cardStyles.universityBadge}>
                <Text style={cardStyles.universityText}>{person.university}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={contactStyles.contactSection}>
          <View style={contactStyles.contactGrid}>
            <View style={contactStyles.contactItem}>
              <View style={contactStyles.contactIconWrapper}>
                <Text style={contactStyles.contactIcon}>📧</Text>
              </View>
              <Text style={contactStyles.contactText} numberOfLines={1}>{person.email}</Text>
            </View>
            
            <View style={contactStyles.contactItem}>
              <View style={contactStyles.contactIconWrapper}>
                <Text style={contactStyles.contactIcon}>⚔️</Text>
              </View>
              <Text style={contactStyles.contactText}>{person.phone}</Text>
            </View>
            
            <View style={contactStyles.contactItem}>
              <View style={contactStyles.contactIconWrapper}>
                <Text style={contactStyles.contactIcon}>🏰</Text>
              </View>
              <Text style={contactStyles.contactText}>{person.location}</Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View style={skillsStyles.skillsSection}>
          <Text style={skillsStyles.skillsTitle}>🤖 ความเชี่ยวชาญ ⚡</Text>
          <View style={skillsStyles.skillsGrid}>
            {person.skills.map((skill: string, index: number) => (
              <View key={index} style={[skillsStyles.skillChip]}>
                <Text style={[skillsStyles.skillText]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
